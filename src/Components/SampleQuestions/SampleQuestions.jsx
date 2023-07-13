import React from 'react';
import './SampleQuestions.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { stateAccordion } from '../../redux/slices/chatWithAiSlice';
import { openAiDispatch } from '../../redux/actions/chatActions';

export default function SampleQuestions() {
  const canEnterMessage = useAppSelector(
    state => state.chatWithAi.canEnterMessage
  );
  const dispatch = useAppDispatch();

  const handleClick = e => {
    e.preventDefault();
    if (!canEnterMessage) return;
    dispatch(stateAccordion(false));
    const message = e.target.textContent;
    dispatch(openAiDispatch(message));
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
