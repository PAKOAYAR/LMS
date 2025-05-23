import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.js";
import { authApi } from "@/features/api/authApi.js";
import { CourceApi } from "@/features/api/courceApi.js";
import { purchaseApi } from "@/features/api/purchaseApi.js";
import { courceProgressApi } from "@/features/api/courceProgressApi.js";
export const appStore=configureStore({
    reducer:rootReducer,
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(authApi.middleware,CourceApi.middleware,purchaseApi.middleware,courceProgressApi.middleware)
});

const initializeApp=async()=>{
await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp(); 