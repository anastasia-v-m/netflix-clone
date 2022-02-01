import React from 'react';
import Button from '../../components/Button';
import data from './data';
import './page404Spot.scss';

export default function Page404Content(): JSX.Element {
  return (
    <div className="p404-main">
      <div className="message-precontainer">
        <div className="message-container">
          <h1 className="p404-message">{data.header}</h1>
          <h4 className="p404-message2">{data.explanation}</h4>
          <Button
            type="BTN_TYPE_SIMPLE"
            name="btn-to-home"
            href="/"
            content={data.buttonText}
          />
        </div>
        <p className="p404-error-code">
          {data.errorCodeTitle}
          <span className="main-info">{data.errorCode}</span>
        </p>
      </div>
      <div className="img-source">
        {data.srcWord}
        <span className="main-info">{data.imgSrcTitle}</span>
      </div>
    </div>
  );
}
