import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './FieldСorrespondence.scss';
import { arrPostGetMessage } from '../../utils/allMessages';
import PostMessage from '../PostMessage/PostMessage';
import GetMessage from '../GetMessage/GetMessage';
import { useAppSelector } from '../../hooks/redux';

export default function FieldСorrespondence(): JSX.Element {
  const allMesseges = useAppSelector(state => arrPostGetMessage(state));
  const correspodenceHeight = useAppSelector(state => {
    const accordion = state.heightComponents.accordion;
    const chat = state.heightComponents.chat;
    const input = state.heightComponents.input;
    const correspodence = chat - accordion - input - 10 - 16;

    return correspodence;
  });

  const myRef = React.useRef<HTMLDivElement>();

  const scrollToBottom = (): void => {
    scroll.scrollToBottom({
      duration: 500,
      delay: 100,
      smooth: 'easeInOutQuart',
      containerId: 'scroll-container',
    });
  };

  React.useEffect(() => {
    if (myRef.current) {
      myRef.current.style.maxHeight = `${correspodenceHeight}px`;
    }
  }, [correspodenceHeight]);

  React.useEffect(() => {
    scrollToBottom();
  }, [allMesseges]);

  const styleBody =
    allMesseges.length > 0 ? { padding: '10px' } : { padding: '0' };
  const items = allMesseges.map((element, index) => (
    <div key={index}>
      <PostMessage
        key={index}
        question={element.question}
        time={element.questionData}
      />
      <GetMessage
        key={index + 1}
        reply={element.reply}
        time={element.replyData}
      />
    </div>
  ));

  return (
    <div className="field-coresspodence">
      <div
        className="field-coresspodence__body msg-cotainer"
        style={styleBody}
        id="scroll-container"
        ref={myRef as React.RefObject<HTMLDivElement>}
      >
        {items}
      </div>
    </div>
  );
}
