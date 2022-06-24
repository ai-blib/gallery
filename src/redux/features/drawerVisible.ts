import {createSlice} from "@reduxjs/toolkit";
import type {Principal} from "@dfinity/principal";
import {UserInfoExt} from "@/types/global";
import store from "@/redux/store"
import {useAppSelector, getState} from '@/redux';
import type {RootState} from '@/redux/store';

interface Interface {
    open: boolean
}

const initialState: Interface = {
    open: false
};

export const drawerVisibleSlice = createSlice({
    name: "drawerVisible",
    initialState,
    reducers: {
        update: (state, action: { type: string; payload: Interface }) => {
            return {...state, ...action.payload};
        },
    },
});

const {update} = drawerVisibleSlice.actions;
const userState = (state: RootState) => state.drawerVisible;
export const updateDrawerVisible = async (result: Interface) => {
    const store = await (await import('@/redux/store')).default;
    store.dispatch(update(result))
};
export const useDrawerVisibleStore = (): Interface => useAppSelector(userState);

// export const getUserInfo = ():Interface=>getState()['drawerVisible'];
export default drawerVisibleSlice.reducer;
