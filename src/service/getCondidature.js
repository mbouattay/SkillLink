import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCondidature = createAsyncThunk(
  "getCondidature",
  async (token,{ rejectWithValue }) => {
    try {
      const response = await axios.get("http://127.0.0.1:3500/GetListeCondidature", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching  data"
      );
    }
  }
);

