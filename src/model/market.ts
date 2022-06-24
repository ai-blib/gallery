import {Principal} from "@dfinity/principal";

export interface UserOwnedNFTsModel {
    id: number | bigint;
    nftUrl: string;
}


export interface allHistoryModal {
    index: bigint | number,
    type: string,
    time:string,
    'token': Principal,
    'tokenIndex': bigint,
    'seller': Principal,
    'orderId': bigint,
    'buyer': Principal,
    'price': bigint,
}
