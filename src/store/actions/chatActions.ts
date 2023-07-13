import { postRequest } from '../../api/postOpenAi';
import { getDateCurrency } from '../../api/getTime';
// import * as actions from '../actions/chatWithOpenAi.actions';
// import axios from '../../axios';
import { Dispatch } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import * as actions from '../slices/chatWithAiSlice';

// export const fetchAirports = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const response = await axios.get('airports');
//       console.log(response);
//     } catch (e) {}
//   };
// };

export const openAiDispatch = (message: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(actions.canEnterMessage(false));
    dispatch(actions.questionsForChat(message));
    dispatch(actions.dateQuestionForChat(getDateCurrency()));
    postRequest(message)
      .then(data => {
        dispatch(actions.replyFromChat(data));
        dispatch(actions.canEnterMessage(true));
        dispatch(actions.dateReplyFromChat(getDateCurrency()));
      })
      .catch((data: string) => {
        dispatch(actions.replyFromChat(data));
        dispatch(actions.canEnterMessage(true));
        dispatch(actions.dateReplyFromChat(getDateCurrency()));
      });
  };
};
