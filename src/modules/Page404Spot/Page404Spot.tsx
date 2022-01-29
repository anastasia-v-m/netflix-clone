import Button from '../../components/CommonButton';
import data from './data';
import './page404Spot.scss';

const toHomePage = () => {
  document.location.href = '/';
};

export default function Page404Content() {
  return (
    <div className="p404-main">
      <div className="message-precontainer">
        <div className="message-container">
          <h1 className="p404-message">{data.header}</h1>
          <h4 className="p404-message2">{data.explanation}</h4>
          <Button className="btn-to-home" clickHandler={toHomePage} content={data.buttonText} />
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
