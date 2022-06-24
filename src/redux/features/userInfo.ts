import { createSlice } from "@reduxjs/toolkit";
import type { Principal } from "@dfinity/principal";
import { UserInfoExt } from "@/types/global";
import store from "@/redux/store"
import {useAppSelector,getState } from '@/redux';
import type { RootState } from '@/redux/store';

interface Interface{
    favorites?: Array<any> | undefined,
    desc?: string,
    logo?: string,
    name?: string,
    cover?: string,
    id?: string,
    balance?: string | number,
    owner?: string,
    marketBalance?: string | number,
    loading?: boolean,
    tokenFee?: string | number
}
const initialState: Interface  = {
  favorites: undefined,
  marketBalance: "",
  desc: "",
  logo: "",
  name: "",
  cover: "",
  id: '',
  balance: "",
  owner: '',
  loading: false
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    update: (state, action: { type: string; payload: Interface }) => {
      return {...state,...action.payload} ;
    },
  },
});

export const { update } = userInfoSlice.actions;
export const userState = (state: RootState) => state.userInfo;
export const updateUserInfo=async (result:Interface)=>{
     const store = await (await import('@/redux/store')).default;
     store.dispatch(update(result))
};
export const useUserInfoStore=():Interface=>useAppSelector(userState);

export const getUserInfo = ():Interface=>getState()['userInfo'];
export default userInfoSlice.reducer;
