import React, {useContext, createContext, useEffect, useState, useCallback} from "react";
import {GetAgent} from '@/did/Agent'
import {Identity} from "@dfinity/agent";
import {Principal} from '@dfinity/principal'
import plugWallet from "../did/Agent/plugWallet";
import {principalToAccountIdentifier} from '@/utils/common';
import {CommonStore} from "@/store/common.store";
// @ts-ignore
import Storage,{walletKeyType} from '../utils/storage'
export interface AuthContext {
    isAuthenticated: boolean;
    isAuthReady: boolean;
    hasCanCanAccount: boolean;
}
export type VariantType = 'default' | 'error' | 'success' | 'warning' | 'info';
export type WalletType = 'II'|'plugWallet';
const II ='II';
const plug = 'plugWallet';
interface Props {
    identity:any,
    isAuthClientReady: boolean,
    principal: Principal,
    logOut: Function,
    isAuth: boolean,
    plugLogIn: Function,
    subAccountId: string,
    walletType: string,
    userInfo: {
        principal: string | Principal | undefined,
        subAccountId: string
    },
    loginLoading: boolean
}
export const useProvideAuth =(authClient):Props|any=>{
    const [_identity, _setIdentity] = useState<Identity | undefined>();
    const [isAuthClientReady, setAuthClientReady] = useState(false);
    const [principal,setPrincipal] = useState<Principal>();
    const [authenticated,setAuthenticated] = useState(false);
    const [subAccountId,setSubAccountId] =useState('');
    const [walletType, setWalletType] = useState<WalletType>('II');
    const [loginLoading, setLoginLoading] = useState<boolean>(false)
    useEffect(() => {
        (async ()=>{
            const type = Storage.getWalletTypeStorage()
            //set wallet type
            if (type===II){

            }else if (type===plug){
               await checkPlug()
            }
        })()

    }, []);
    //update principal
    useEffect(() => {
        if (principal) {
            authClient.setOwner(principal);
        }
    }, [principal])
    useEffect(() => {
        if (subAccountId) {
            authClient.setSubAccountId(subAccountId);
        }
    }, [subAccountId])
    const checkPlug = async () => {
        setLoginLoading(true);
        const {principal, subAccountId} = await plugWallet.verifyConnectionAndAgent();
        if (principal && subAccountId) {
            setLoginLoading(false);
            setPrincipal(principal);
            setSubAccountId(subAccountId);
            setAuthenticated(true);
        }
        setLoginLoading(false);

   }

    const plugLogIn =async ():Promise<{ message?: string,status?:number }|undefined>=>{
        if (!window.ic || !window.ic.plug) {
            window.open('https://plugwallet.ooo');
            return;
        }
        setLoginLoading(true);
        const result = await plugWallet.connect();
        if (result) {
            await plugWallet.createAgent();
            const principal = await window?.ic?.plug?.agent?.getPrincipal();
            const subAccountId = principalToAccountIdentifier(principal, 0);
            setPrincipal(principal);
            setSubAccountId(subAccountId);

            setAuthenticated(true);
            setWalletType('plugWallet');
            Storage.setWalletTypeStorage('plugWallet');
            setLoginLoading(false);
            return {status: 200}
        }else {
           return {message:'connect error'}
       }


    }
    const logOut=async ():Promise<void>=> {
        // if (!authClient.ready) return;
        // await authClient.logout();
        window.ic?.plug?.disconnect()
        setAuthenticated(false);
    }

    const Context = {
       identity:_identity,
        isAuthClientReady,
        principal,
        logOut,
        isAuth: authenticated,
        plugLogIn,
        subAccountId,
        walletType,
        userInfo: {
            principal,
            subAccountId
        },
        loginLoading
    }
   //save common data
    CommonStore.actionSave({...Context})
    return Context;
}
const authContext = createContext<Props>(null!);
export function ProvideAuth({ children }) {
    const auth:Props = useProvideAuth(GetAgent);
    return <authContext.Provider value={Object.assign(auth)}>{children}</authContext.Provider>;
}

export const useAuth=()=>{
    return useContext(authContext)
}
