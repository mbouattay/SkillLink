import { createSlice } from '@reduxjs/toolkit';
import { LoginEntreprise } from '../../service/loginEntreprise';


const initialState = {
  connected: false,
  entreprise: null,
  msg: "",
};
export const loginEntrepriseReducer = createSlice({
  name: 'loginEntrepriseReducer',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(LoginEntreprise.pending, (state) => {
        state.msg = ""; 
      })
      .addCase(LoginEntreprise.fulfilled, (state, { payload }) => {
        state.entreprise = payload.result; 
        state.connected = true;
        state.loading = false;
        state.msg = ""; 
      })
      .addCase(LoginEntreprise.rejected, (state, { payload }) => {
        state.connected = false; 
        state.msg = payload || "Une erreur s'est produite. Veuillez réessayer."; // Utilise le message d'erreur retourné
      });
  },
});

export default loginEntrepriseReducer.reducer;
