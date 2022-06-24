import {GetAgent} from '@/did/Agent';
import {Principal} from "@dfinity/principal";
import {getCurrencyString, parseAmount} from "@/utils/formate";
import {TokenPair} from '@/types/global';
import {TxReceipt} from "@/did/model/wicp";
import Transactions from '@/did/transactions'
import {updateUserInfo} from "@/redux";
import {MarketApi} from '@/apis'

class Wicp {


    async getActor(canisterId: string) {
        return await GetAgent.wicpActor(canisterId);
    }

    async approveBalance(canisterId: string, price: number | string): Promise<TxReceipt | any> {
        try {
            const tokenCanisterId = import.meta.env.VITE_REACT_APP_WICP_CANISTER_ID as string;
            const result: TxReceipt = await Transactions.wicpApproveTransactions(tokenCanisterId, Principal.fromText(canisterId), BigInt(price));
            if ('Err' in result) {
                return Promise.reject(result)
            }
            return result
        } catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }

    async balanceOf(tokenCanisterId: string = ''): Promise<bigint | any> {
        tokenCanisterId = tokenCanisterId || String(import.meta.env.VITE_REACT_APP_WICP_CANISTER_ID);
        return new Promise(async (resolve, reject) => {
            try {
                await updateUserInfo({loading: true});
                const owner = await GetAgent.awaitGetOwner();
                const balance = (await (await this.getActor(tokenCanisterId)).balanceOf(owner));
                console.log(balance, 'wicp_balance')
                const _balance = getCurrencyString(balance, 8, 4);
                await updateUserInfo({balance: _balance});
                resolve(_balance);
                const marketBalance = await MarketApi.marketBalance()
                console.log(marketBalance, 'marketBalance')

                await updateUserInfo({balance: _balance, marketBalance});
                await updateUserInfo({loading: false});
                await this.getTokenFee();
            } catch (e) {
                console.log(e);
                reject(e);
                return ''
            }
        })


    }

    async getTokenFee(tokenCanisterId: string = ''): Promise<bigint | any> {
        tokenCanisterId = tokenCanisterId || String(import.meta.env.VITE_REACT_APP_WICP_CANISTER_ID);
        return new Promise(async (resolve, reject) => {
            try {
                const tokenFee = (await (await this.getActor(tokenCanisterId)).getTokenFee());
                const _tokenFee = getCurrencyString(tokenFee, 8, 4);
                resolve(_tokenFee);
                await updateUserInfo({tokenFee: _tokenFee});
            } catch (e) {
                console.log(e);
                reject(e);
                return ''
            }
        })


    }

}


export const WicpApi = new Wicp();
