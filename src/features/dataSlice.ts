import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PersonalData {
  name: string | null;
  surname: string | null;
  address: string | null;
  city: string | null;
  code: string | null;
  company?: string | null;
  information?: string | null;
  comment?: string | null;
}

interface DataState {
  data: PersonalData;
}

const initialState: DataState = {
  data: {
    name: null,
    surname: null,
    address: null,
    city: null,
    code: null,
    company: null,
    information: null,
    comment: null,
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Partial<PersonalData>>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
