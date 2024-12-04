import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProfilData = createAsyncThunk(
  "profile/getProfilData",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://127.0.0.1:3500/GetDataEm", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching profile data"
      );
    }
  }
);

