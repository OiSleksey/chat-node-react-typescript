import { AppStore } from '../store';

interface DescriptionDate {
  month: number;
  year: number;
  day: number;
  hour: number;
  minute: number;
}

const setDateObj = (valueDate: Date): DescriptionDate => {
  const minute = valueDate.getMinutes();
  const hour = valueDate.getHours();
  const day = valueDate.getDate();
  const month = valueDate.getMonth() + 1;
  const year = valueDate.getFullYear();
  const dateObj = {
    month,
    year,
    day,
    hour,
    minute,
  };
  return dateObj;
};

const getDateMessage = (date: Date): DescriptionDate => {
  const dateMessage = new Date(date);
  const dataDateMessage = setDateObj(dateMessage);
  return dataDateMessage;
};

const getDataDateNow = (): DescriptionDate => {
  const dateNow = new Date();
  // const dateNow = new Date('2023-06-07T20:26:43.517Z');
  const dataDateNow = setDateObj(dateNow);
  return dataDateNow;
};

const printDate = (
  dateMessage: DescriptionDate,
  value: string | null
): string => {
  const hour = dateMessage.hour.toString().padStart(2, '0');
  const minute = dateMessage.minute.toString().padStart(2, '0');
  const day = dateMessage.day.toString().padStart(2, '0');
  const month = dateMessage.month.toString().padStart(2, '0');
  const year = dateMessage.year.toString().padStart(2, '0');
  if (value === 'Today') {
    const textDate = `${hour}:${minute} ${'Today'}`;
    return textDate;
  }
  if (value === 'Yesterday') {
    const textDate = `${hour}:${minute} ${'Yesterday'}`;
    return textDate;
  }
  const date = `${day}.${month}.${year}`;
  const textDate = `${hour}:${minute} ${date}`;
  return textDate;
};

const setDate = (value: Date): string => {
  const dateMessage = getDateMessage(value);
  const dataDateNow = getDataDateNow();
  if (dateMessage.year === dataDateNow.year) {
    if (dateMessage.day === dataDateNow.day) {
      const textDate = printDate(dateMessage, 'Today');
      return textDate;
    }
    if (dateMessage.day - dataDateNow.day === 1) {
      const textDate = printDate(dateMessage, 'Yesterday');
      return textDate;
    }
    const textDate = printDate(dateMessage, null);
    return textDate;
  }
  return '';
};

const arrIteration = (arr: Date[]): string[] => {
  const readyArr = arr.map((date: Date) => setDate(date));
  return readyArr;
};

interface PostGetMessage {
  question: string;
  questionData: string;
  reply: string;
  replyData: string;
}

export const arrPostGetMessage = (state: AppStore): PostGetMessage[] | [] => {
  if (state.chatWithAi.questions < 1 || state.chatWithAi.dateQuestions < 1)
    return [];

  const arrQuestions = state.chatWithAi.questions;
  const arrReplies = state.chatWithAi.replies;
  const arrDateQuestios = arrIteration(state.chatWithAi.dateQuestions);
  const arrDateReplies = arrIteration(state.chatWithAi.dateReplies);
  const allArr = arrQuestions.map(
    (question: string, index: number): PostGetMessage => ({
      question,
      questionData: arrDateQuestios[index],
      reply: arrReplies[index],
      replyData: arrDateReplies[index],
    })
  );
  return allArr;
};
