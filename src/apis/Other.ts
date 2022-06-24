import {ActorType} from "@/config";
import {GetAgent} from "@/did/Agent";
import {idlFactory as extDid} from '@/did/ext.did.js';
import {idlFactory as extIdentityDid} from '@/did/ext_identity.js';
import {Principal} from "@dfinity/principal";

import {Ext, ext_identity} from "@/did/model";
import {Balance, Memo, SubAccount, TokenIdentifier, TransferRequest, User} from "@/did/model/ext";

export class ExtMarket {
    //
    static async getActor(did = extDid, canisterId: string = 'ahl3d-xqaaa-aaaaj-qacca-cai', type?: ActorType): Promise<Ext> {
        return await GetAgent.commentActor(did, canisterId, type);
    }

    // identity actor
    static async getEtcIdentityActor(did = extIdentityDid, canisterId: string = 'hlszf-4yaaa-aaaag-qaasq-cai', type?: ActorType): Promise<ext_identity> {
        return await GetAgent.commentActor(did, canisterId, type);
    }

    //etc market
    static async nftlist(): Promise<any> {
        const {subAccountId} = GetAgent;
        const result = await ((await this.getActor()).tokens('073ca335431d6b6f6916068b5784a241730d2e3452ae650025b4bf7a975a81f0'));
        if ('ok' in result) {
            return result.ok;
        }
        return []
    }

    static async getMetadata(str) {
        const result = await ((await this.getActor()).metadata(str));
        if ('ok' in result) {
            return result[0];
        }
    }

    static async getTokenIdentifier() {
        const result = await ((await this.getEtcIdentityActor()).getTokenIdentifier('pk6rk-6aaaa-aaaae-qaazq-cai', 0));
        console.log(result, 'result2');
        return result;
    }

    static async transfer() {
        const owner: Principal = await GetAgent.awaitGetOwner();
        const TokenIdentifier = await this.getTokenIdentifier();
        const TransferRequest = {
            'to': owner,
            'token': TokenIdentifier,
            'notify': true,
            'from': owner,
            'memo': [0],
            'subaccount': null,
            'amount': 0,
        }
        const result = await ((await this.getActor()).transfer(TransferRequest as any));
        console.log(result, 'result');
        return result;
    }
}
