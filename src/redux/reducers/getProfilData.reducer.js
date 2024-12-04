import { createSlice } from '@reduxjs/toolkit';
import { getProfilData } from '../../service/getProfilData';

const initialState = {
    profilData: null,
    msg: "",
};
export const getProfilDataR = createSlice({
  name: 'getProfilDataR',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(getProfilData.pending, (state) => {
        state.msg = ""; 
      })
      .addCase(getProfilData.fulfilled, (state, { payload }) => {
        state.profilData = payload; 
        state.msg = ""; 
      })
      .addCase(getProfilData.rejected, (state, { payload }) => {
        state.connected = false; 
        state.msg = payload || "Une erreur "; 
      });
  },
});

export default getProfilDataR.reducer;
