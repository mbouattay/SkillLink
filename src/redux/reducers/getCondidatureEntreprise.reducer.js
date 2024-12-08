import { createSlice } from '@reduxjs/toolkit';
import { getCondidatureEntreprise } from '../../service/getCondidatureEntreprise';
const initialState = {
    condidatureEnt: null,
    msg: "",
};
export const getCondidatureEntrepriseR = createSlice({
  name: 'getCondidatureEntrepriseR',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(getCondidatureEntreprise.pending, (state) => {
        state.msg = ""; 
      })
      .addCase(getCondidatureEntreprise.fulfilled, (state, { payload }) => {
        state.condidatureEnt = payload.data
        ; 
        state.msg = ""; 
      })
      .addCase(getCondidatureEntreprise.rejected, (state, { payload }) => {
        state.msg = payload || "Une erreur "; 
      });
  },
});
export default getCondidatureEntrepriseR.reducer;
