import { createSlice } from '@reduxjs/toolkit';
import { getOfferEmployer } from '../../service/getOfferEmployer';
const initialState = {
    offersEmployer: null,
    msg: "",
};
export const getOfferEmployeR = createSlice({
  name: 'getOfferEmployeR',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(getOfferEmployer.pending, (state) => {
        state.msg = ""; 
      })
      .addCase(getOfferEmployer.fulfilled, (state, { payload }) => {
        state.offersEmployer = payload.result
        ; 
        state.msg = ""; 
      })
      .addCase(getOfferEmployer.rejected, (state, { payload }) => {
        state.connected = false; 
        state.msg = payload || "Une erreur "; 
      });
  },
});
export default getOfferEmployeR.reducer;
