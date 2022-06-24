import {GetAgent} from '@/did/Agent';
import {Principal} from "@dfinity/principal";
import {desensitizationPrincipal, getCurrencyString, parseAmount} from "@/utils/formate";
import {OrderExt, OrderStatus, TxReceipt, Result} from '@/did/model/market';
import {NFTMintApi} from '@/apis'
import {updateUserInfo, useUserInfoStore} from "@/redux"
import {OpRecord, PriceInfo} from "@/did/model/storage.did";
import {allHistoryModal} from '@/model'
import moment from "moment-timezone";

class Storage {

    async getActor() {
        return await GetAgent.storageActor();
    }

    async getUserTransactions(): Promise<allHistoryModal | any> {
        try {
            const owner = await GetAgent.awaitGetOwner();
            let result = (await (await this.getActor()).getUserTransactions(owner, BigInt(1), BigInt(100000)));
            return result.map((_item) => {
                const type = Object.keys(_item.op)[0];
                const value = _item.op[type];
                const index = _item.index;
                const time = moment(Number(_item.timestamp) / 1000000).format("YYYY-MM-DD")
                return {
                    type,
                    time,
                    index,
                    ...value
                }
            }).reverse()

        } catch (e) {
            console.log(e)
            return [];
        }
    }

    async allHistory(): Promise<allHistoryModal | any> {
        try {
            let result = (await (await this.getActor()).getTransactions(BigInt(1), BigInt(100)));
            let resArray: Array<any> = []
            result.forEach((_item: OpRecord | any) => {
                const type = Object.keys(_item.op)[0];
                const value = _item.op[type];
                const index = _item.index;
                const time = moment(Number(_item.timestamp) / 1000000).format("YYYY-MM-DD HH:mm:ss");
                const token = value.token ? desensitizationPrincipal(String(value.token || ""), 4) : "";
                const amount = getCurrencyString(value.price || value.amount + "" || "", 8, 2);
                const from = (value.seller || value.from) ? desensitizationPrincipal((value.seller || value.from) + "", 4) : "";
                const to = (value.buyer || value.to) ? desensitizationPrincipal((value.buyer || value.to) + "", 4) : "";
                resArray.push({
                    type,
                    time,
                    index,
                    token,
                    amount,
                    from,
                    to,
                    fromer: value.seller || value.from,
                    toer: (value.buyer || value.to)
                })
            })
            return resArray.reverse();
        } catch (e) {
            console.log(e)
            return [];
        }
    }

    async getUserOrders(start: number = 0, end: number = 5): Promise<Result | any> {
        try {
            const owner = await GetAgent.awaitGetOwner();
            return (await (await this.getActor())).getUserOrders(owner, BigInt(start), BigInt(end))
        } catch (e) {
            console.log(e);
        }
    }

    async getCollectionHistoryOrders(canisterId: string): Promise<Array<OrderExt> | any> {
        try {
            const collection = Principal.fromText(canisterId);
            const result = await (await this.getActor()).getCollectionHistoryOrders(collection)
            return (result).map((_item) => {
                const type = Object.keys(_item.status)[0];
                const index = _item.index;
                const time = moment(Number(_item.createAt) / 1000000).format("YYYY-MM-DD")
                return {
                    type,
                    time,
                    index,
                    price: _item.price,
                    owner: _item.owner,
                    token: _item.token
                }
            }).reverse()

        } catch (e) {
            console.log(e);
            return []
        }
    }

    async getPriceHistory(collection: string, time?: string): Promise<Result | any> {
        let amount: any = 7, unit: number = 1;
        try {
            if (time?.includes('h')) {
                amount = time?.replace('h', '');
                unit = Number(amount) / 24;
            } else if (time?.includes('d')) {
                amount = time?.replace('d', '');
                unit = Number(amount)
            } else if (time?.includes('y')) {
                amount = time?.replace('y', '');
                unit = Number(amount) * 365
            }
            const end = Number(moment().endOf('day').format('X'));
            const result = await (await this.getActor()).getPriceHistory(Principal.fromText(collection), BigInt(end), Number(unit));
            if (result) {
                return result.map((_o) => ({
                    ..._o,
                    date: moment(Number(_o.date) * 1000).format("YYYY-MM-DD")
                }))
            }
        } catch (e) {
            console.log(e);
        }
    }

    async getItemHistory(collection: string, time?: string, tokenId?: string): Promise<Result | any> {
        let amount: any = 7, unit: any = 'd';
        try {
            if (time?.includes('h')) {
                amount = time?.replace('h', '');
                unit = ' h';
            } else if (time?.includes('d')) {
                amount = time?.replace('d', '');
                unit = 'd'
            } else if (time?.includes('y')) {
                amount = time?.replace('y', '');
                unit = 'y'
            }
            const start = moment().subtract(amount, unit).unix();
            const end = moment().unix();
            const result = await (await this.getActor()).getItemHistory(Principal.fromText(collection), BigInt(start), BigInt(end));
            if (result) {
                return (result.filter((_i) => Number(_i.id) === Number(tokenId))).map((_o) => (
                    {
                        ..._o,
                        date: moment(Number(_o.time) * 1000).format("YYYY-MM-DD")
                    }
                ))
            }
        } catch (e) {
            console.log(e);
        }
    }

    async getNftItemHistory(collection: string, time: string, tokenId: string): Promise<PriceInfo | any> {
        let amount: any = 7, unit: string = 'd';
        try {
            if (time?.includes('h')) {
                amount = time?.replace('h', '');
                unit = ' h';
            } else if (time?.includes('d')) {
                amount = time?.replace('d', '');
                unit = 'd'
            } else if (time?.includes('y')) {
                amount = time?.replace('y', '');
                unit = 'y'
            }
            const start = moment().subtract(amount, unit).unix();
            const end = moment().unix();
            const result = await (await this.getActor()).getNftItemHistory(Principal.fromText(collection), BigInt(tokenId), BigInt(start), BigInt(end));
            if (result) {
                return result.map((_o) => ({
                    ..._o,
                    date: moment(Number(_o.time) * 1000).format("YYYY-MM-DD")
                }))
            }
        } catch (e) {
            console.log(e);
        }
    }

}


export const StorageApi = new Storage();
