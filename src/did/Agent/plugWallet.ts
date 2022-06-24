import {principalToAccountIdentifier} from "@/utils/common";
import {Principal} from "@dfinity/principal";

const whitelist =["2pjor-riaaa-aaaah-qcs5q-cai",import.meta.env.VITE_REACT_APP_SALES_CANISTER_ID,import.meta.env.VITE_REACT_APP_MINT_CANISTER_ID,import.meta.env.VITE_REACT_APP_WICP_CANISTER_ID,import.meta.env.VITE_REACT_APP_MARKET_ID,import.meta.env.VITE_REACT_APP_LEDGER_CANISTER_ID,import.meta.env.VITE_REACT_APP_STORAGE_CANISTER_ID]
const host = import.meta.env.VITE_REACT_APP_HOST || '';
export default class PlugWallet {
    static whitelist: Array<string|any> =whitelist;
    static async verifyConnectionAndAgent():Promise<{principal:Principal,subAccountId:string}> {
        const connected = await window.ic.plug.isConnected();
        if (!connected) window.ic.plug.requestConnect({ whitelist, host });
        if (connected && !window.ic.plug.agent) {
            await window.ic.plug.createAgent({whitelist:this.whitelist, host})
        }
        const principal = await window?.ic?.plug?.agent?.getPrincipal();
        const subAccountId = principalToAccountIdentifier(principal,0);
        return {principal,subAccountId}
    }
    static async createAgent(){
         return  await window.ic.plug.createAgent({whitelist:this.whitelist, host})

    }
    static async connect(){
        return  await window?.ic?.plug.requestConnect({
            whitelist,
            host,
        });
    }

}
