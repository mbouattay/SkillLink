import { createSlice } from '@reduxjs/toolkit';
import { getCondidature } from '../../service/getCondidature';
const initialState = {
    condidature: null,
    msg: "",
};
export const getCondidatureR = createSlice({
  name: 'getCondidatureR',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(getCondidature.pending, (state) => {
        state.msg = ""; 
      })
      .addCase(getCondidature.fulfilled, (state, { payload }) => {
        state.condidature = payload.resultat
        ; 
        state.msg = ""; 
      })
      .addCase(getCondidature.rejected, (state, { payload }) => {
        state.msg = payload || "Une erreur "; 
      });
  },
});
export default getCondidatureR.reducer;
