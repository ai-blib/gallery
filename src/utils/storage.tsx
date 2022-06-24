import {WalletType} from '../usehooks/useAuth';

export type {WalletType} from '../usehooks/useAuth';
export type walletKeyType = 'WALLET_TYPE_KEY';
export default class Storage {
    static walletType: WalletType | unknown;
    static walletTypeKey: walletKeyType = 'WALLET_TYPE_KEY';
    static OrderKey: string = 'ORDER_KEY';
    static TabActive: string = 'TABACTIVE'

    static setWalletTypeStorage(value: any) {
        return localStorage.setItem(this.walletTypeKey, value)
    }

    static getWalletTypeStorage() {
        return localStorage.getItem(this.walletTypeKey)
    }

    static removeStorage() {
        return localStorage.removeItem(this.walletTypeKey)
    }
    //order
    static setOrderSessionStorage(value: any): any {
        return sessionStorage.setItem(this.OrderKey, value ? JSON.stringify(value) : value)
    }

    static getOrderSessionStorage(): any {
        let value = sessionStorage.getItem(this.OrderKey) as string;
        try {
            value = JSON.parse(value);
            return value;
        } catch {
            return value;
        }
    }

    static setTabActive(value: number): any {
        return sessionStorage.setItem(this.TabActive, JSON.stringify(value))
    }

    static getTabActive(): any {
        let value = sessionStorage.getItem(this.TabActive) as string;
        try {
            value = JSON.parse(value);
            return value;
        } catch {
            return value;
        }
    }
}
