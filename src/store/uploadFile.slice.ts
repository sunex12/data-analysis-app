import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IFile {
  name: string;
  size: number;
  type: string;
}

const initialState: IFile[] = [];

export const uploadFileSlice = createSlice({
  name: "uploadFile",
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<IFile>) => {
      state.push(action.payload);
    },
  },
});

export const { addFile } = uploadFileSlice.actions;

export default uploadFileSlice.reducer;
