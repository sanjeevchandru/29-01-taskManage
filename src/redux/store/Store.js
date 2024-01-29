import {configureStore} from '@reduxjs/toolkit';
import dt from './Slice';
export const Store=configureStore({
    reducer:{
        data:dt
    }
})