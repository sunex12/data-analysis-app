import { configureStore } from '@reduxjs/toolkit';
import uploadFileReducer from "./uploadFile.slice";

export const store = configureStore({
  reducer: {
    uploadFile: uploadFileReducer 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch