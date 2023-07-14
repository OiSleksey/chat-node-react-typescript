import React from 'react';
import './PostMessage.scss';
import avatarUser from '../../assets/images/avatar-user.png';

interface PostMessageProps {
  question: string;
  time: string;
}

export default function PostMessage({ question, time }: PostMessageProps) {
  return (
    <div className="d-flex justify-content-end mb-5 msg-post">
      <div className="msg-post__content">
        {question ? question : 'Loading...'}
        <span className="msg-post__time">{time}</span>
      </div>
      <div className="user__img-cont">
        <img src={avatarUser} className="rounded-circle user__img" />
      </div>
    </div>
  );
}
