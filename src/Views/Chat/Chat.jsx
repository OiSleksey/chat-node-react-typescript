import React, { useEffect, useRef } from 'react';
import './Chat.scss';
import FieldInput from '../../Components/FieldInput/FieldInput';
import FieldСorrespondence from '../../Components/FieldСorrespondence/FieldСorrespondence';
import CustomizedAccordions from '../../Components/Accordion/Accordion';
import { chatHeight } from '../../redux/actions/heightComponents.actions';
import { connect } from 'react-redux';

const Chat = ({ getChatHeight }) => {
  const myRef = useRef(null);

  const changeHeight = () => {
    const clientHeight = myRef.current.clientHeight;
    getChatHeight(clientHeight);
  };

  useEffect(() => {
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
};

const mapDispatch = {
  getChatHeight: chatHeight,
};

export default connect(null, mapDispatch)(Chat);
