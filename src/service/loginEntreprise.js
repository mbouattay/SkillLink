import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const LoginEntreprise = createAsyncThunk(
  'LoginEntreprise',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://127.0.0.1:3500/entreprise", data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || "Une erreur s'est produite.");
      }
      return rejectWithValue("Erreur réseau ou serveur.");
    }
  }
);
