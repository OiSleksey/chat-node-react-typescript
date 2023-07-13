import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface HeightComponentsState {
  accordion: number;
  chat: number;
  input: number;
}

const initialState: HeightComponentsState = {
  accordion: 0,
  chat: 0,
  input: 0,
  // correspodence: null,
};

export const heightComponentsSlice = createSlice({
  name: 'heightComponents',
  initialState,
  reducers: {
    accordionHeight(state, action: PayloadAction<number>) {
      state.accordion = action.payload;
    },
    chatHeight(state, action: PayloadAction<number>) {
      state.chat = action.payload;
    },
    inputHeight(state, action: PayloadAction<number>) {
      state.input = action.payload;
    },
  },
});

const { actions, reducer } = heightComponentsSlice;

export const { accordionHeight, chatHeight, inputHeight } = actions;

export default reducer;
