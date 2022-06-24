import {GetAgent} from '@/did/Agent';
import {Principal} from "@dfinity/principal";
import {getCurrencyString, parseAmount} from "@/utils/formate";
import {authClient} from "@/did/Agent/IIForIdentity";
import {ActorType, ipfsHost} from "@/config";
import {getTokenInfoResult} from './model/min';
import {OrderExt, OrderStatus, TxReceipt} from '@/did/model/market';
import Transactions from '@/did/transactions'
import {TokenMetadata, MintResult, TokenInfoExt} from "@/did/model/mint";
import {updateUserInfo} from "@/redux";

export type Type = 'art' | 'music';

class NFTMint {

    async getActor(canisterid?: string, type?: ActorType) {
        return await GetAgent.NFTItemActor(type, canisterid);
    }

    async mint(mintInfo: [] | [TokenMetadata], type?: Type): Promise<MintResult | Error> {
        try {
            console.time('mint')
            const owner = await GetAgent.awaitGetOwner();
            const result: MintResult = await Transactions.mintTransactions(owner, mintInfo, type);
            console.timeEnd('mint')

            if ("Err" in result) {
                return Promise.reject(result)
            }
            return result
        } catch (e) {
            console.log(e);
            return Promise.reject(e)
        }

    }

    async approve(id: string | number): Promise<TxReceipt | Error> {
        try {
            const marketCanisterId = import.meta.env.VITE_REACT_APP_MARKET_ID as string;
            const result: TxReceipt = await Transactions.approveListItemTransactions(BigInt(id), Principal.fromText(marketCanisterId))
            if ("err" in result) {
                return Promise.reject(result)
            }
            return result
        } catch (e) {
            console.log(e);
            return Promise.reject(e);
        }

    }

    async getTokenInfo(_id: number | bigint | string, orderDetail?: OrderExt, collectionCanisterId?: string): Promise<getTokenInfoResult | any> {
        const tokenResult = await (await this.getActor(collectionCanisterId)).getTokenInfo(BigInt(_id));
        if (!tokenResult) {
            return
        }

        const {metadata, index, owner, timestamp} = tokenResult;
        if (!metadata[0]) {
            return false;
        }
        const {attributes, location, filetype} = metadata[0] || {} as any;
        const attr = {};
        (attributes || []).forEach(({key, value}) => {
            attr[key] = value
        })
        // @ts-ignore
        const nftUrl = location?.IPFS.includes('aws') ? location.IPFS : `${ipfsHost}/${location && location.IPFS.replace('//', '')}`;
        return {
            id: index,
            attr,
            nftUrl,
            filetype,
            owner,
            createTime: timestamp,
            musicNftUrl: attr['musicNftUrl'],
            collectionId: collectionCanisterId,
            ...orderDetail,
        }
    }

    async getUserTokens(canisterId: string, user?: string, collectionId?: string): Promise<Array<TokenInfoExt> | any> {
        try {
            const owner = await GetAgent.awaitGetOwner();
            const result = await (await this.getActor(canisterId)).getUserTokens(owner);
            return result.map((_item) => ({
                ..._item,
                ..._item.metadata[0],
                collectionId
            }))
        } catch (e) {

        }

    }

}

export const NFTMintApi = new NFTMint();
