import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import './FieldInput.scss';
import { openAiDispatch } from '../../redux/middleware/postChatThunk';
import { inputHeight } from '../../redux/actions/heightComponents.actions';

const FieldInput = ({ postMessage, canEnterMessage, getInputHeight }) => {
  const myRef = useRef();

  const changeHeight = () => {
    const clientHeight = myRef.current.clientHeight;
    getInputHeight(clientHeight);
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
  const [message, setMessage] = useState('');

  const minTextereaHeight = e => {
    const form = e.target;
    const textarea = form.querySelector('textarea');
    textarea.style.height = '3.24rem';
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimMessage = message.trim();
    if (trimMessage === '' || !canEnterMessage) return;
    minTextereaHeight(e);
    postMessage(trimMessage);
    setMessage('');
  };

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    setMessage(value);
  };

  const adjuctTextareaHeight = e => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const classBtn = canEnterMessage
    ? 'btn field-input__btn-submit'
    : 'btn field-input__btn-submit field-input__btn-submit_active';

  return (
    <div className="field-input " ref={myRef}>
      <form onSubmit={handleSubmit}>
        <div className="field-input__form-box d-flex justify-content-end">
          <div className="field-input__textarea ">
            <textarea
              value={message}
              onChange={handleChange}
              className="me-1  py-2  px-3 form-control"
              onInput={adjuctTextareaHeight}
              rows="1"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="field-input__submit">
            <button className={classBtn} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapState = state => {
  return {
    canEnterMessage: state.chatWithAi.canEnterMessage,
  };
};
const mapDispatch = {
  postMessage: openAiDispatch,
  getInputHeight: inputHeight,
};

export default connect(mapState, mapDispatch)(FieldInput);

{
  /* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates id impedit facere, fugit assumenda neque maxime repellat nesciunt asperiores rerum minus, itaque accusamus porro error distinctio accusantium possimus natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea veritatis perspiciatis ab assumenda voluptatibus ex vero ullam temporibus, ratione laboriosam, ipsam tempora soluta, exercitationem sequi rerum culpa quisquam nisi.
          </p> */
}
