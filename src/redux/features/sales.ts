import {createSlice} from "@reduxjs/toolkit";
import {useAppSelector, getState} from '@/redux';
import type {RootState} from '@/redux/store';
import {SaleInfo} from "@/did/model/sales.did";

interface Interface {
    allSales: Array<SaleInfo | []> | undefined
}

const initialState: Interface = {
    allSales: undefined
};

export const SalesInfoSlice = createSlice({
    name: "salesInfo",
    initialState,
    reducers: {
        update: (state, action: { type: string; payload: Interface }) => {
            return {...state, ...action.payload};
        },
    },
});

const {update} = SalesInfoSlice.actions;
const userState = (state: RootState) => state.salesInfo;
export const updateSalesInfo = async (result: Interface) => {
    const store = await (await import('@/redux/store')).default;
    store.dispatch(update(result));
};
export const useSalesInfoStore = (): Interface => useAppSelector(userState);
export const getSalesInfoSlice = (): Interface => getState()['salesInfo'];
export default SalesInfoSlice.reducer;
