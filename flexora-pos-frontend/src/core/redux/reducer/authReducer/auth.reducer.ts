import { createSlice } from "@reduxjs/toolkit";
import { AuthType } from "./auth.authType";

// ================================================================================================================================================ //
// ==========================================================|| REDUX - AUTH REDUCER ||============================================================ //
// ================================================================================================================================================ //

const initialState = {} as AuthType;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: { payload: AuthType }) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removeAuth: (state) => {
      return {
        ...state,
        AccessToken: undefined,
        Authenticated: undefined,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
export const authReducerActions = authSlice.actions;
