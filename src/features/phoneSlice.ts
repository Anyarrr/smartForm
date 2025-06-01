import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PhoneState {
    phone: string | null;
}

const initialState : PhoneState = {
 phone: null
}

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        addPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
    }
});

export const { addPhone } = phoneSlice.actions;
export default phoneSlice.reducer;