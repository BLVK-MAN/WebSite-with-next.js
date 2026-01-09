import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const exists = state.items.find((i) => i.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
    },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
