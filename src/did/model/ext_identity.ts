import type {Principal} from '@dfinity/principal';

export type AccountIdentifier = string;
export type AccountIdentifier__1 = string;
export type Balance = bigint;

export interface BalanceRequest {
    'token': TokenIdentifier,
    'user': User
};
export type BalanceResponse = { 'ok': Balance } |
    { 'err': CommonError__1 };
export type Balance__1 = bigint;
export type CommonError = { 'InvalidToken': TokenIdentifier } |
    { 'Other': string };
export type CommonError__1 = { 'InvalidToken': TokenIdentifier } |
    { 'Other': string };
export type Extension = string;
export type Memo = Array<number>;
export type Metadata = {
    'fungible': {
        'decimals': number,
        'metadata': [] | [Array<number>],
        'name': string,
        'symbol': string,
    }
} |
    { 'nonfungible': { 'metadata': [] | [Array<number>] } };

export interface RegisterTokenRequest {
    'owner': AccountIdentifier__1,
    'metadata': Metadata,
    'supply': Balance__1,
};
export type Result = { 'ok': Balance__1 } |
    { 'err': CommonError };
export type Result_1 = { 'ok': Array<[AccountIdentifier__1, Balance__1]> } |
    { 'err': CommonError };
export type Result_2 = { 'ok': TokenIndex } |
    { 'err': string };
export type Result_3 = { 'ok': bigint } |
    { 'err': CommonError };
export type Result_4 = { 'ok': Metadata } |
    { 'err': CommonError };
export type SubAccount = Array<number>;
export type TokenIdentifier = string;
export type TokenIdentifier__1 = string;
export type TokenIndex = number;
export type TokenIndex__1 = number;

export interface TokenObj {
    'canister': Array<number>,
    'index': TokenIndex__1,
};

export interface TransferRequest {
    'to': User,
    'token': TokenIdentifier,
    'notify': boolean,
    'from': User,
    'memo': Memo,
    'subaccount': [] | [SubAccount],
    'amount': Balance,
};
export type TransferResponse = { 'ok': Balance } |
    {
        'err': { 'CannotNotify': AccountIdentifier } |
            { 'InsufficientBalance': null } |
            { 'InvalidToken': TokenIdentifier } |
            { 'Rejected': null } |
            { 'Unauthorized': AccountIdentifier } |
            { 'Other': string }
    };
export type User = { 'principal': Principal } |
    { 'address': AccountIdentifier };

export interface _SERVICE {
    'acceptCycles': () => Promise<undefined>,
    'allMetadata': () => Promise<Array<[TokenIndex, [Metadata, Balance__1]]>>,
    'allRegistry': () => Promise<Array<[TokenIndex, Array<[AccountIdentifier__1, Balance__1]>]>>,
    'availableCycles': () => Promise<bigint>,
    'balance': (arg_0: BalanceRequest) => Promise<BalanceResponse>,
    'bytestonat32': (arg_0: Array<number>) => Promise<number>,
    'changeAdmin': (arg_0: Principal) => Promise<undefined>,
    'decode': (arg_0: TokenIdentifier__1) => Promise<TokenObj>,
    'extensions': () => Promise<Array<Extension>>,
    'getTokenIdentifier': (arg_0: string, arg_1: TokenIndex) => Promise<TokenIdentifier__1>,
    'metadata': (arg_0: TokenIdentifier__1) => Promise<Result_4>,
    'nat32tobytes': (arg_0: number) => Promise<Array<number>>,
    'numberOfTokenHolders': (arg_0: TokenIdentifier__1) => Promise<Result_3>,
    'numberOfTokens': () => Promise<bigint>,
    'registerToken': (arg_0: RegisterTokenRequest) => Promise<Result_2>,
    'registry': (arg_0: TokenIdentifier__1) => Promise<Result_1>,
    'supply': (arg_0: TokenIdentifier__1) => Promise<Result>,
    'transfer': (arg_0: TransferRequest) => Promise<TransferResponse>,
};
