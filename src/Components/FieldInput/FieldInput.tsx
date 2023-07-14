import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { inputHeight } from '../../store/slices/heightComponentsSlice';
import { openAiDispatch } from '../../store/actions/chatActions';
import { useAppSelector } from '../../hooks/redux';
import './FieldInput.scss';

export default function FieldInput(): JSX.Element {
  const canEnterMessage = useAppSelector(
    state => state.chatWithAi.canEnterMessage
  );
  const myRef = React.useRef<HTMLDivElement>();
  const dispatch = useAppDispatch();

  const changeHeight = (): void => {
    const clientHeight = myRef.current ? myRef.current.clientHeight : 0;
    dispatch(inputHeight(clientHeight));
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
  const [message, setMessage] = React.useState('');

  const minTextereaHeight = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const textarea = form.querySelector('textarea');
    if (textarea) {
      (textarea as HTMLTextAreaElement).style.height = '3.24rem';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimMessage = message.trim();
    if (trimMessage === '' || !canEnterMessage) return;
    minTextereaHeight(e);
    dispatch(openAiDispatch(trimMessage));
    setMessage('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
  };

  const adjuctTextareaHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const classBtn = canEnterMessage
    ? 'btn field-input__btn-submit'
    : 'btn field-input__btn-submit field-input__btn-submit_active';

  return (
    <div
      className="field-input "
      ref={myRef as React.RefObject<HTMLDivElement>}
    >
      <form onSubmit={handleSubmit}>
        <div className="field-input__form-box d-flex justify-content-end">
          <div className="field-input__textarea ">
            <textarea
              value={message}
              onChange={handleChange}
              className="me-1  py-2  px-3 form-control"
              onInput={adjuctTextareaHeight}
              rows={1}
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
}
