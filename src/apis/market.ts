import {GetAgent} from "@/did/Agent";
import {Principal} from "@dfinity/principal";
import {getCurrencyString, parseAmount} from "@/utils/formate";
import {ActorType, ipfsHost} from "@/config";
import {UserOwnedNFTsModel} from "@/model";
import {
    OrderExt,
    OrderStatus,
    TxReceipt,
    Result,
    UserInfoExt,
    CollectionExt, Offer,
} from "@/did/model/market";
import {NFTMintApi, WicpApi} from "@/apis";
import {
    updateUserInfo,
    getUserInfo,
    updateMarketInfo,
    updateProfileInfo,
    updateCollectionsInfo,
    getCollectionsInfo,
} from "@/redux";
import Transactions from "@/did/transactions";
import {uploadIPfs} from "@/utils/common";
import {BigNumber} from "bignumber.js";

class Market {
    allCollectionCansiterid: Array<any> = [];

    async getActor(type?: ActorType) {
        return await GetAgent.marketActor(type);
    }

    async marketNoIdentityActor() {
        return await GetAgent.marketActor();
    }

    async getUserInfo(user_id: string | undefined): Promise<UserInfoExt | any> {
        return new Promise(async (resolve, reject) => {
            const owner = user_id
                ? Principal.fromText(user_id as string)
                : await GetAgent.awaitGetOwner();
            const OldUserInfo = getUserInfo();
            if (OldUserInfo.owner === String(owner)) {
                resolve(OldUserInfo);
            }
            const result = await (await this.getActor()).getUserInfo(owner);
            result.cover =
                result.cover && `${ipfsHost}/${result.cover.replace("//", "")}`;
            result.logo =
                result.logo && `${ipfsHost}/${result.logo.replace("//", "")}`;
            result.favorites = await Promise.all(
                result.favorites.map((_item) => this.getOrder(Number(_item[1])))
            );
            console.log(result.favorites, ' result.favorites')
            result.favorites = result.favorites.map(
                (_order: any) =>
                    _order?.tokenIndex &&
                    NFTMintApi.getTokenInfo(_order?.tokenIndex, {
                        ..._order,
                    }, _order.token + "")
            );
            result.favorites = (await Promise.all(result.favorites)).filter(
                (_fav) => _fav
            );
            resolve(result);
            // Update only the information of the registrant
            if (!user_id) {
                // update store
                await updateUserInfo({...result, owner: String(owner)});
            }

        });
    }

    // get order Information
    async getOrder(_id: number | string): Promise<OrderExt | {} | any> {
        try {
            const tokenResult = await (
                await this.getActor()
            ).getOrder(BigInt(_id));
            if (tokenResult) {
                return tokenResult[0] || {};
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async marketBalance(): Promise<bigint | any> {
        const owner = await GetAgent.awaitGetOwner();
        try {
            const marketBalance = await (
                await this.getActor("identity")
            ).balanceOf(owner);
            console.log(marketBalance, 'marketBalance')
            const _balance = getCurrencyString(marketBalance, 8, 4);
            await updateUserInfo({marketBalance: _balance});
            return _balance;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async deposit(number: number): Promise<TxReceipt | any> {
        return new Promise(async (resolve, reject) => {
            try {
                const _price =
                    new BigNumber(Math.pow(10, 8)).times(Number(number)) + "";
                const result: TxReceipt | any =
                    await Transactions.depositTransactions(BigInt(_price));
                console.log(result, 'deposit')
                resolve(result);
                await WicpApi.balanceOf();
                setTimeout(async () => {
                    await WicpApi.balanceOf();
                }, 5000)
                return result;
            } catch (e) {
                console.log(e);
                return reject(e);
            }
        });
    }

    async withDraw(number: number): Promise<TxReceipt | any> {
        return new Promise(async (resolve, reject) => {
            try {
                const _price =
                    new BigNumber(Math.pow(10, 8)).times(Number(number)).toFixed(0);
                const result: TxReceipt | any =
                    await Transactions.withdrawTransactions(BigInt(_price));
                if ("err" in result) {
                    return Promise.reject(result);
                }
                console.log(result, 'withDraw')
                resolve(result);
                await WicpApi.balanceOf();
                setTimeout(async () => {
                    await WicpApi.balanceOf();
                }, 5000)
                return result;
            } catch (e) {
                console.log(e);
                return reject(e);
            }
        });
    }

    async buy(id: number | string, price: number): Promise<TxReceipt | any> {
        return new Promise(async (resolve, reject) => {
            try {
                console.time('buy')
                const result = await Transactions.depositAndBuyItemTransactions(
                    BigInt(price),
                    BigInt(id)
                );
                console.timeEnd('buy')

                if ("err" in result) {
                    return Promise.reject(result);
                }
                resolve(result);
                setTimeout(async () => {
                    await WicpApi.balanceOf();
                }, 1000)
                await this.getNftList();
                return result;
            } catch (e) {
                console.log(e);
                return reject(e);
            }
        });
    }

    async createOrder(id: number, price: number, collectionId: string): Promise<TxReceipt | Error> {
        return new Promise(async (resolve, reject) => {
            try {
                console.time('createOrder')
                const collection = import.meta.env
                    .VITE_REACT_APP_MINT_CANISTER_ID as string;
                const result: TxReceipt | any =
                    await Transactions.listTokenTransactions(
                        Principal.fromText(collectionId || collection),
                        BigInt(id),
                        BigInt(price)
                    );
                console.timeEnd('createOrder')
                console.log(result, 'result')
                if ("err" in result) {
                    return reject(result);
                }
                resolve(result);
                this.getNftList();
                return result;
            } catch (e) {
                console.log(e);
                return reject(e);
            }
        })
    }

    async cancelOrder(id: number): Promise<TxReceipt | Error> {
        return new Promise(async (resolve, reject) => {
            try {
                const result: TxReceipt | any =
                    await Transactions.cancelOrder(
                        BigInt(id)
                    );
                if ("err" in result) {
                    return Promise.reject(result);
                }
                resolve(result);
                this.getNftList();
                return result;
            } catch (e) {
                console.log(e);
                return reject(e);
            }
        })
    }

    async getNftList() {
        const orderList = await (await this.getActor()).getOpenOrders();
        const querys = orderList.map((_order: OrderExt) =>
            NFTMintApi.getTokenInfo(_order.tokenIndex, {
                ..._order,
            })
        );
        const result = await Promise.all(querys);
        await updateMarketInfo({nftList: result});
        return result;
    }

    async getUserOrder(user?: string): Promise<Array<OrderExt> | any> {
        try {
            const owner = user ? Principal.fromText(user as string) : await GetAgent.awaitGetOwner();
            const orderList = await (await this.getActor("identity")).getUserOrders(owner);
            const querys = orderList.map((_order: OrderExt) =>
                NFTMintApi.getTokenInfo(_order.tokenIndex, {
                    ..._order,
                })
            );
            const result = await Promise.all(querys);
            await updateProfileInfo({myOrders: result});
            return result

        } catch (e) {
            console.log(e)
            return []
        }
    }

    /**
     *  all collections Cansiterid
     */
    async getNFTs() {
        try {
            this.allCollectionCansiterid = (await (
                await this.getActor()
            ).getNFTs()) as Array<any>;
            console.log(this.allCollectionCansiterid, 'this.allCollectionCansiterid');
            return this.allCollectionCansiterid;
        } catch (e) {

        }
    }

    async getUserOwnedNFTs(
        user: string,
        isShowLoading: boolean = false
    ): Promise<Array<any> | undefined | any> {
        try {
            if (!this.allCollectionCansiterid.length) {
                await this.getNFTs();
            }
            console.time('own')
            if (isShowLoading) await updateProfileInfo({loading: true});
            const owner = user ? Principal.fromText(user) : await GetAgent.awaitGetOwner();
            // const response = (await (
            //     await this.getActor()
            // ).getUserOwnedNFTs(owner)) as Array<any>;
            // const response = (await (
            //     await this.getActor()
            // ).getUserTokens(owner)) as Array<any>;
            // for (const cansiterid of this.allCollectionCansiterid){
            //     const response = ;
            //
            // }
            const arrays = this.allCollectionCansiterid.map((cansiterid) => NFTMintApi.getUserTokens(cansiterid, '', cansiterid));
            let response = (await Promise.all(arrays)).reduce((previousValue, currentValue, currentIndex) => ([...previousValue, ...currentValue]), []);
            console.log(response, 'res');
            console.timeEnd('own');
            if (response.length) {
                let querys: any = [];
                // for (const i of response) {
                //     // querys.push(...((i[1] as any || []).map((_order: OrderExt | any) => this.initData(_order, _order.collectionId))))
                //     querys.push(...((i[1] as any || []).map((_order: OrderExt | any) => this.initData(_order, _order.collectionId))))
                //
                // }
                querys = response.map((_order) => this.initData(_order, _order.collectionId));
                let result = await Promise.all(querys);
                console.log(result, 'querys');
                result = result.filter((_item) => _item);
                const art = result.filter((_item) => !_item.musicNftUrl);
                const music = result.filter((_item) => _item.musicNftUrl);
                if (user) {
                    await updateProfileInfo({
                        loading: false
                    });
                    return {
                        owned: {
                            art,
                            music
                        }
                    }
                }
                await updateProfileInfo({
                    owned: {
                        art,
                        music
                    }, loading: false
                });
                this.getUserOrder(String(owner));
                return result;
            }
        } catch (e) {
            console.log(e)
        }
    }

    initData(tokenResult, collectionId) {
        const {metadata, index, owner, timestamp} = tokenResult;
        if (!metadata[0]) {
            return NFTMintApi.getTokenInfo(
                tokenResult?.tokenIndex || tokenResult?.index,
                {
                    ...tokenResult
                }, collectionId)
        }
        const {attributes, location, filetype} = metadata[0] || {} as any;
        const attr: any = {};
        (attributes || []).forEach(({key, value}) => {
            attr[key] = value
        })
        const nftUrl = location?.IPFS.includes('aws') ? location.IPFS : `${ipfsHost}/${location && location.IPFS.replace('//', '')}`;
        return {
            id: index,
            attr,
            nftUrl,
            filetype,
            owner,
            musicNftUrl: attr?.musicNftUrl,
            createTime: timestamp,
            collectionId,
            ...tokenResult,
        }
    }

    async setUserCover(url: string): Promise<Result | any> {
        try {
            await updateUserInfo({
                cover: `${ipfsHost}/${url.replace("//", "")}`,
            });
            const result = (await (
                await this.getActor('identity')
            ).setUserCover(url)) as any;
            if (result?.err) {
                return Promise.reject(result);
            }
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async setUserLogo(file: any): Promise<Result | any> {
        try {
            const ipfsObject = await uploadIPfs(file);
            const url = ipfsObject?.data?.image.pathname;
            await updateUserInfo({
                logo: `${ipfsHost}/${url.replace("//", "")}`,
            });
            const result = (await (
                await this.getActor('identity')
            ).setUserLogo(url)) as any;
            if (result?.err) {
                return Promise.reject(result);
            }
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async setUserName(name: string): Promise<Result | any> {
        try {
            await updateUserInfo({name});
            const result = (await (
                await this.getActor('identity')
            ).setUserName(name)) as any;
            if (result?.err) {
                return Promise.reject(result);
            }
            return result;
        } catch (e) {
            console.log(e);
        }
    }

    async addFavorite(token: Principal, index: number | bigint): Promise<Result | any> {
        try {
            return new Promise(async (resolve, reject) => {
                const result = await ((await this.getActor("identity")).addFavorite(token, BigInt(index + ""))) as any;
                if (result?.err) {
                    return reject(result);
                }
                resolve(result);
                // update userinfo
                await this.getUserInfo(undefined)
                return result;
            })

        } catch (e) {
            console.log(e);
            return Promise.reject(e)
        }
    }

    async isFavorite(token: Principal, index: number): Promise<Result | any> {
        const owner = await GetAgent.awaitGetOwner();
        try {
            return await (
                await this.getActor("identity")
            ).isFavorite(owner, token, BigInt(index));

        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async removeFavorite(
        token: Principal,
        index: number
    ): Promise<Result | any> {
        try {
            return new Promise(async (resolve) => {
                const result = await (await this.getActor("identity")).removeFavorite(token, BigInt(index)) as any;
                if (result?.err) {
                    return Promise.reject(result);
                }
                // update userinfo
                resolve(result)
                await this.getUserInfo(undefined);
                return result;
            })


        } catch (e) {
            console.log(e);
        }
    }

    async getCollectionHistoryOrders(): Promise<Result | any> {
        try {
            const owner = await GetAgent.awaitGetOwner();
            // const result = await (
            //     await this.getActor()
            // ).getCollectionHistoryOrders(owner);
            // if (result) {
            //     return Promise.reject(result);
            // }
            // return result;
        } catch (e) {
            console.log(e);
        }
    }

    async getCollections(): Promise<Array<CollectionExt> | any> {
        try {
            const response = await (await this.getActor()).getCollections();
            await updateCollectionsInfo({collectionsList: response});
            return response;
        } catch (e) {
            console.log(e)
        }

    }

    async getArtCollections(): Promise<Array<CollectionExt> | any> {
        try {
            const response = await (await this.getActor()).getCollectionsByCategory('art');
            await updateCollectionsInfo({artCollectionsList: response});
            return response;
        } catch (e) {
            console.log(e)
        }

    }

    async getMusicCollections(): Promise<Array<CollectionExt> | any> {
        try {
            const response = await (await this.getActor()).getCollectionsByCategory('music');
            await updateCollectionsInfo({musicCollectionsList: response});
            return response;
        } catch (e) {
            console.log(e)
        }

    }

    async getCollectionOrders(collection_id: string): Promise<any> {

        return new Promise(async (resolve, reject) => {
            const list = getCollectionsInfo()[collection_id];
            if (list) {
                resolve(await updateCollectionsInfo({list}))
            }
            const collectionId = Principal.fromText(collection_id);
            const response = await (
                await this.getActor()
            ).getCollectionOrders(collectionId);
            const querys = response.map((_order: OrderExt) =>
                NFTMintApi.getTokenInfo(_order.tokenIndex, {
                    ..._order,
                }, collectionId + "")
            );
            const result = await Promise.all(querys);
            await updateCollectionsInfo({[collection_id]: result, list: result})
            return result;
        })
    }

    async getCollectionInfo(id: string): Promise<CollectionExt | any> {
        const owner = Principal.fromText(id);
        return (await (await this.getActor()).getCollection(owner));
    }

    async MakerOffer(collectionId: Principal, tokenId: string | number, price: number | string, interval: number) {
        return new Promise(async (resolve, reject) => {
            try {
                const result: TxReceipt | any =
                    await Transactions.makerOffer(collectionId, BigInt(tokenId), BigInt(price), BigInt(interval));
                if (!result) {
                    return Promise.reject(result);
                }
                resolve(result);
                return result;
            } catch (e) {
                console.log(e);
                reject(e)
            }
        })
    }

    async getOffer(collectionId: string, tokenId: string | number): Promise<Array<Offer | string> | any> {
        try {
            return (await (await this.getActor()).allOffers(Principal.fromText(collectionId), BigInt(tokenId)));
        } catch (e) {
            console.log(e)
        }
    }
}

export const MarketApi = new Market();
