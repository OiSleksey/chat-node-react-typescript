import React from 'react';
import './Footer.scss';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer-cont">
        <h5 className="footer-cont__description">
          This project implements chat between ChatGPT and the user. Do you have
          questions or suggestions?
        </h5>
        <h5 className="footer-cont__about">
          Write to the e-mail address of{' '}
          <a className="footer-cont__link" href="mailto:schokk8193@gmail.com">
            Oleksii
          </a>
        </h5>
      </div>
    </footer>
  );
}
