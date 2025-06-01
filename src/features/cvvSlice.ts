import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PersonalCvv {
    cardNumber: string | null,
    cvv: string | null,
    expiryDate: string | null,
    amount: string | null,
}

interface CvvState {
  cvv: PersonalCvv;
}

const initialState: CvvState = {
  cvv: {
    cardNumber: null,
    cvv: null,
    expiryDate: null,
    amount: null,
  },
};

export const cvvSlice = createSlice({
  name: "cvv",
  initialState,
  reducers: {
    addCvv: (state, action: PayloadAction<Partial<PersonalCvv>>) => {
      state.cvv = {
        ...state.cvv,
        ...action.payload,
      };
    },
  },
});

export const { addCvv } = cvvSlice.actions;
export default cvvSlice.reducer;
