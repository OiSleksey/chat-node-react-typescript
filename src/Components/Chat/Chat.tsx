import React from 'react';
import FieldInput from '../FieldInput/FieldInput';
import FieldСorrespondence from '../FieldСorrespondence/FieldСorrespondence';
import CustomizedAccordions from '../Accordion/Accordion';
import { useAppDispatch } from '../../hooks/redux';
import { chatHeight } from '../../store/slices/heightComponentsSlice';
import './Chat.scss';

export default function Chat() {
  const dispatch = useAppDispatch();
  const myRef = React.useRef<HTMLDivElement>(null);

  const changeHeight = () => {
    if (myRef.current) {
      const clientHeight = myRef.current.clientHeight;
      dispatch(chatHeight(clientHeight));
    }
  };

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(changeHeight);
    if (myRef.current) {
      resizeObserver.observe(myRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section className="chat" ref={myRef}>
      <div className="chat__accordion">
        <CustomizedAccordions />
      </div>
      <div className="chat__main">
        <FieldСorrespondence />
        <FieldInput />
      </div>
    </section>
  );
}
