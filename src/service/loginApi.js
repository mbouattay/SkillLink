import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginApi = createAsyncThunk(
  'loginApi',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://127.0.0.1:3500/employe", data);
      return response.data;
    } catch (error) {
      // Vérifie si l'erreur est liée à la réponse de l'API
      if (error.response) {
        // Retourne un message d'erreur personnalisé
        return rejectWithValue(error.response.data.message || "Une erreur s'est produite.");
      }
      // Retourne une erreur générique pour d'autres types d'erreurs
      return rejectWithValue("Erreur réseau ou serveur.");
    }
  }
);
