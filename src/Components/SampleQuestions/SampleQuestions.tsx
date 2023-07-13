import React, { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { stateAccordion } from '../../store/slices/chatWithAiSlice';
import { openAiDispatch } from '../../store/actions/chatActions';
import './SampleQuestions.scss';

export default function SampleQuestions(): JSX.Element {
  const canEnterMessage = useAppSelector(
    state => state.chatWithAi.canEnterMessage
  );

  const dispatch = useAppDispatch();

  // const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (!canEnterMessage) return;
    dispatch(stateAccordion(false));
    const target = e.target as HTMLLIElement;
    const message = target.textContent;
    if (message !== null) {
      dispatch(openAiDispatch(message));
    }
  };

  return (
    <div className="sample-qiestion">
      <ul className="sample-qiestion__list">
        <li className="sample-qiestion__item" onClick={handleClick}>
          How to start running training?
        </li>
        <li className="sample-qiestion__item" onClick={handleClick}>
          What is cadence?
        </li>
        <li className="sample-qiestion__item" onClick={handleClick}>
          What warm-up should be done before running?
        </li>
      </ul>
    </div>
  );
}
