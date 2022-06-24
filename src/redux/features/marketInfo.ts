import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector, getState } from "@/redux";
import type { RootState } from "@/redux/store";

interface Interface {
    nftList: Array<any>;
}
const initialState: Interface = {
    nftList: [],
};

export const MarketInfoSlice = createSlice({
    name: "marketInfo",
    initialState,
    reducers: {
        update: (state, action: { type: string; payload: Interface }) => {
            return { ...state, ...action.payload };
        },
    },
});

const { update } = MarketInfoSlice.actions;
const userState = (state: RootState) => state.userInfo;
export const updateMarketInfo = async (result: Interface) => {
    const store = await (await import("@/redux/store")).default;
    store.dispatch(update(result));
};
export const useMarketInfoStore = (): Interface => useAppSelector(userState);

export const getMarketInfo = (): Interface => getState()["marketInfo"];
export default MarketInfoSlice.reducer;
