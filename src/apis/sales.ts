import {GetAgent} from '@/did/Agent';
import {Principal} from "@dfinity/principal";
import {parseAmount} from "@/utils/formate";
import {TokenPair} from '@/types/global';
import {SaleInfo} from "@/did/model/sales.did";
import {updateSalesInfo} from '@/redux'
import {SaleInfoExt, Result_1, Metadata} from "@/did/model/sale.did";
import Transactions from '@/did/transactions'
import {ActorType} from "@/config";

class Sales {


    async getActor(type?: ActorType) {
        return await GetAgent.salesActor(type);
    }

    async getSingleSaleActor(saleCanisterID: string, type?: ActorType) {
        return await GetAgent.singleSaleActor(saleCanisterID, type);

    }

    async getAllSales(): Promise<[] | [SaleInfo] | any> {
        try {
            const result = (await (await this.getActor()).getAllSales());
            const query = result.map((sale: SaleInfo) => this.getMetadata(String(sale.canisterId), sale));
            const res = await Promise.all(query);
            await updateSalesInfo({allSales: res as any})
            return res;
        } catch (e) {
            console.log(e)
            return [];
        }

    }

    async getSaleInfo(saleCanisterID: string, other?: Object): Promise<SaleInfoExt | any> {
        try {
            await GetAgent.awaitGetOwner();
            const result = (await (await this.getSingleSaleActor(saleCanisterID)).getSaleInfo()) as any;
            if (result.err) {
                return Promise.reject(result);
            }
            //merge
            if (other) return {...result, ...other};
            return result[0];
        } catch (e) {
            console.log(e);
            return Promise.resolve([])
        }
    }

    async balanceOf(saleCanisterID: string): Promise<bigint | any> {
        try {
            const owner = await GetAgent.awaitGetOwner();
            return (await (await this.getSingleSaleActor(saleCanisterID)).balanceOf(owner));

        } catch (e) {
            console.log(e);
            return Promise.reject(e)
        }
    }

    async buy(saleCanisterID: string, amount: number | string): Promise<Result_1 | any> {
        try {
            const result = await Transactions.saleBuyTransactions(saleCanisterID, BigInt(amount))
            if ('err' in result) {
                return Promise.reject(result)
            }
            return result
        } catch (e) {
            console.log(e);
            return Promise.reject(e)
        }
    }

    async getMetadata(saleCanisterID: string,other?: Object): Promise<Metadata> {
        try {
            const result = (await (await this.getSingleSaleActor(saleCanisterID)).getMetadata());
            if ('err' in result) {
                return Promise.reject(result)
            }
            //merge
            if (other) return {...result, ...other};
            return result
        } catch (e) {
            console.log(e);
            return Promise.reject(e)
        }
    }
}


export const SalesApi = new Sales();
