import { createSlice } from "@reduxjs/toolkit";
import type { Principal } from "@dfinity/principal";
import { CollectionExt } from "@/did/model/market";
import { useAppSelector, getState } from "@/redux";
import type { RootState } from "@/redux/store";

type collections = {
    list?: undefined | any
    artCollectionsList?: Array<CollectionExt> | [] | undefined;
    musicCollectionsList?: Array<CollectionExt> | [] | undefined;

};
const initialState: collections = {
    list: undefined,
    artCollectionsList: undefined,
    musicCollectionsList: undefined
};
export const collectionsInfoSlice = createSlice({
    name: "collectionsInfo",
    initialState,
    reducers: {
        update: (state: any, action: { type: string; payload: any }) => {
            return {...state, ...action.payload};
        },
    },
});

const { update } = collectionsInfoSlice.actions;
const userState = (state: RootState) => state.collectionsInfo;
export const updateCollectionsInfo = async (result: any) => {
    const store = await (await import("@/redux/store")).default;
    store.dispatch(update(result));
};
export const useCollectionsInfoStore = (): collections => useAppSelector(userState);
export const getCollectionsInfo = (): any => getState()["collectionsInfo"];
export default collectionsInfoSlice.reducer;
