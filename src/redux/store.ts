import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import userInfoReducer from "./features/userInfo"
import collectionsInfoReducer from "./features/collectionsInfo";
import MarketInfoReducer from "./features/marketInfo"
import ProfileInfoReducer from "./features/profileInfo";
import SalesInfoReducer from './features/sales'
import drawerVisibleReducer from './features/drawerVisible'
const store: EnhancedStore = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        collectionsInfo: collectionsInfoReducer,
        marketInfo: MarketInfoReducer,
        profileInfo: ProfileInfoReducer,
        salesInfo: SalesInfoReducer,
        drawerVisible: drawerVisibleReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
      }),
});
export type RootState = ReturnType<(typeof store)|any>;
export type AppDispatch = typeof store.dispatch;
// @ts-ignore
export const getState = store.getState;
export default store;
