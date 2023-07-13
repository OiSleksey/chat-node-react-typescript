import React from 'react';
import './Chat.scss';
import FieldInput from '../components/FieldInput/FieldInput';
import FieldСorrespondence from '../components/FieldСorrespondence/FieldСorrespondence';
import CustomizedAccordions from '../components/Accordion/Accordion';
import { useAppDispatch } from '../hooks/redux';
import { chatHeight } from '../redux/slices/heightComponentsSlice';

export default function Chat() {
  //
  const dispatch = useAppDispatch();
  const myRef = React.useRef(null);

  const changeHeight = () => {
    const clientHeight = myRef.current.clientHeight;
    dispatch(chatHeight(clientHeight));
  };
  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(changeHeight);
    if (myRef.current) {
      resizeObserver.observe(myRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
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
