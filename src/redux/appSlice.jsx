/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    products: [],
    userInfo: [],
}
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity;
            } else (
                state.products.push(action.payload)
            )
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload)
            item.quantity++
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload)
        },
        resetCart: (state) => {
            state.products = []
        }
    }
})
export const { addToCart, deleteItem, resetCart, decrementQuantity, incrementQuantity } = appSlice.actions;
export default appSlice.reducer;