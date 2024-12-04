import { createSlice } from '@reduxjs/toolkit';
import { loginApi } from '../../service/loginApi';

const initialState = {
  connected: false,
  user: null,
  msg: "",
};
export const loginReducer = createSlice({
  name: 'loginReducer',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.msg = ""; 
      })
      .addCase(loginApi.fulfilled, (state, { payload }) => {
        state.user = payload.result; 
        state.connected = true;
        state.loading = false;
        state.msg = ""; 
      })
      .addCase(loginApi.rejected, (state, { payload }) => {
        state.connected = false; 
        state.msg = payload || "Une erreur s'est produite. Veuillez réessayer."; // Utilise le message d'erreur retourné
      });
  },
});

export default loginReducer.reducer;
