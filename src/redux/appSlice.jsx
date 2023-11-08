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
            state.products = action.payload
        }
    }
})
export const { addToCart } = appSlice.actions