import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isOpen: false,
    totalItems: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
        addItem: (state, action) => {
            // Logic from useCart: just append and update count
            state.items.push(action.payload);
            state.totalItems = state.items.length;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            state.totalItems = state.items.length;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
        },
    },
});

export const { toggleCart, addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
