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

        }
    }
})
export const { addToCart } = appSlice.actions;
export default appSlice.reducer;