import {createSlice} from '@reduxjs/toolkit';
import appApi from '../services/appApi';

// appApi

const initialState = [];

export const product = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateProducts: (_, action) => {
            return action.payload;
        },
    },
        extraReducers: (builder) => {
            builder.addMatcher(appApi.endpoints.createProduct.matchFulfilled, (_, { payload }) => payload);
            builder.addMatcher(appApi.endpoints.updateProduct.matchFulfilled, (_, { payload }) => payload);
            builder.addMatcher(appApi.endpoints.deleteProduct.matchFulfilled, (_, { payload }) => payload);
        },
});

export const { updateProducts } = product.actions;
export default product.reducer;