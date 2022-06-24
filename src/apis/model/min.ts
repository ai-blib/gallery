import {Principal} from "@dfinity/principal";

export interface getTokenInfoResult{
    id:number|bigint;
    attr:object;
    nftUrl:string;
    filetype:string;
    owner:Principal;
    createTime?:number|bigint
}
