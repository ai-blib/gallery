import {createSlice} from "@reduxjs/toolkit";
import {useAppSelector, getState} from '@/redux';
import type {RootState} from '@/redux/store';

interface Interface {
    loading?: boolean | undefined;
    owned?: { art?: Array<any> | undefined, music?: Array<any> | undefined, movie?: Array<any> | undefined }
    myOrders?: Array<any>
}

const initialState: Interface = {
    owned: {art: undefined, music: undefined, movie: undefined},
    myOrders: undefined,
    loading: false
};

export const profileInfoSlice = createSlice({
    name: "profileInfo",
    initialState,
    reducers: {
        update: (state, action: { type: string; payload: Interface }) => {
            return Object.assign({}, {...state, ...action.payload});
        },
    },
});

const {update} = profileInfoSlice.actions;
const userState = (state: RootState) => state.profileInfo;
export const updateProfileInfo = async (result: Interface) => {
    const store = await (await import('@/redux/store')).default;
    store.dispatch(update(result));
};
export const useProfileInfoStore = (): Interface => useAppSelector(userState);
export const getProfileInfo = (): Interface => getState()['profileInfo'];
export default profileInfoSlice.reducer;
