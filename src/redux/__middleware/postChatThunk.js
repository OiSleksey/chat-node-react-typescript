import { postRequest } from '../../api/postOpenAi';
import { getDateCurrency } from '../../api/getTime';
import * as actions from '../actions/chatWithOpenAi.actions';
import axios from '../../axios';
import { Dispatch } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

// export const fetchAirports = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const response = await axios.get('airports');
//       console.log(response);
//     } catch (e) {}
//   };
// };

export const openAiDispatch = message => {
  return function (dispatch) {
    dispatch(actions.canEnterRequest(false));
    dispatch(actions.questionForChat(message));
    dispatch(actions.dateQuestionForChat(getDateCurrency()));
    postRequest(message)
      .then(data => {
        dispatch(actions.replyFromChat(data));
        dispatch(actions.canEnterRequest(true));
        dispatch(actions.dateReplyFromChat(getDateCurrency()));
      })
      .catch(data => {
        dispatch(actions.replyFromChat(data));
        dispatch(actions.canEnterRequest(true));
        dispatch(actions.dateReplyFromChat(getDateCurrency()));
      });
  };
};
