import { RegisterForm } from "@/components/organism/RegisterForm";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RegisterForm = {
  name: "",
  email: "",
  occupation: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerForm: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { registerForm } = registerSlice.actions;
export default registerSlice.reducer;
