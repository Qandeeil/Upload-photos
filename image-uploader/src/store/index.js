import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from './imagesStore/imagesStore'

const store = configureStore({reducer:{
    imageStore: imagesSlice
}})
export default store