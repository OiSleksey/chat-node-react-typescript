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

// interface ChaWithAiPayload {

// }

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
