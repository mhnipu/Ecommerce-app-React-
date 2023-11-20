/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        products: [], // This will store the cart items
        viewedProduct: null, // To store the currently viewed product
        userInfo: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        resetCart: (state) => {
            state.products = [];
        },
        // New action to set the viewed product
        setViewedProduct: (state, action) => {
            state.viewedProduct = action.payload;
        },
        clearViewedProduct: (state) => {
            state.viewedProduct = null;
        },

    }
})
export const {
    addToCart,
    deleteItem,
    resetCart,
    decrementQuantity,
    incrementQuantity,
    setViewedProduct,
    clearViewedProduct,
} = appSlice.actions;

export default appSlice.reducer;