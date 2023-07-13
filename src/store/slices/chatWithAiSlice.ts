import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ChatWithAiState {
  questions: string[];
  replies: string[];
  dateQuestions: string[];
  dateReplies: string[];
  canEnterMessage: boolean;
  openAccordion: boolean;
}

const initialState: ChatWithAiState = {
  questions: [],
  replies: [],
  dateQuestions: [],
  dateReplies: [],
  canEnterMessage: true,
  openAccordion: true,
};

// export const chatReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case QUESTION_FOR_CHAT: {
//       const newQuestion = state.questions.concat(action.payload.data);
//       return {
//         ...state,
//         questions: newQuestion,
//       };
//     }
//     case REPLY_FROM_CHAT: {
//       const newReply = state.replies.concat(action.payload.data);
//       return {
//         ...state,
//         replies: newReply,
//       };
//     }
//     case DATE_QUESTION_FOR_CHAT: {
//       const newQuestion = state.dateQuestions.concat(action.payload.data);
//       return {
//         ...state,
//         dateQuestions: newQuestion,
//       };
//     }
//     case DATE_REPLY_FROM_CHAT: {
//       const newReply = state.dateReplies.concat(action.payload.data);
//       return {
//         ...state,
//         dateReplies: newReply,
//       };
//     }
//     case CAN_ENTER_TEXT: {
//       return {
//         ...state,
//         canEnterMessage: action.payload.data,
//       };
//     }
//     case STATE_ACCORDION: {
//       return {
//         ...state,
//         openAccordion: action.payload.data,
//       };
//     }
//     default:
//       return state;
//   }
// };

export const chatWithAiSlice = createSlice({
  name: 'chatWithAi',
  initialState,
  reducers: {
    questionsForChat(state, action: PayloadAction<string>) {
      state.questions = state.questions.concat(action.payload);
    },
    replyFromChat(state, action: PayloadAction<string>) {
      state.replies = state.replies.concat(action.payload);
    },
    dateQuestionForChat(state, action: PayloadAction<string>) {
      state.dateQuestions = state.dateReplies.concat(action.payload);
    },
    dateReplyFromChat(state, action: PayloadAction<string>) {
      state.dateReplies = state.dateReplies.concat(action.payload);
    },
    canEnterMessage(state, action: PayloadAction<boolean>) {
      state.canEnterMessage = action.payload;
    },
    stateAccordion(state, action: PayloadAction<boolean>) {
      state.openAccordion = action.payload;
    },
  },
});

const { actions, reducer } = chatWithAiSlice;

export const {
  questionsForChat,
  replyFromChat,
  dateQuestionForChat,
  dateReplyFromChat,
  canEnterMessage,
  stateAccordion,
} = actions;

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
