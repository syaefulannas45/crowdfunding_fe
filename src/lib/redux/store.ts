import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";
import registerSlice from "./features/RegisterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counter,
      register: registerSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
