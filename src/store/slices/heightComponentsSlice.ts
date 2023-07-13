import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import {
//   CHAT_HEIGHT,
//   ACCORDION_HEIGHT,
//   INPUT_HEIGHT,
// } from '../actions/heightComponents.actions';

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

//    }
//  }

//     name: 'a'
// )
// (state = initialState, action) => {
//   switch (action.type) {
//     case CHAT_HEIGHT: {
//       return {
//         ...state,
//         chat: action.payload.data,
//       };
//     }
//     case ACCORDION_HEIGHT: {
//       return {
//         ...state,
//         accordion: action.payload.data,
//       };
//     }
//     case INPUT_HEIGHT: {
//       return {
//         ...state,
//         input: action.payload.data,
//       };
//     }
//     default:
//       return state;
//   }
// };
