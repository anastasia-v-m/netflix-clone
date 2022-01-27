import Button from '../../components/CommonButton';
import data from './data.json';
import './page404Spot.css'

const toHomePage = () => {
  document.location.href = '/';
}

export default function Page404Content() {
  return (
    <div className='p404-main'>
      <div className="message-precontainer">
        <div className="message-container">
          <h1
            className='p404-message'
          >
            {data[0].header}
          </h1>
          <h4
            className='p404-message2'
          >
            {data[0].explanation}
          </h4>
          <Button
            className='btn-to-home'
            clickHandler={toHomePage}
            content={data[0]['button-text']}
          >
          </Button>
        </div>
        <p
          className='p404-error-code'
        >
          {data[0]['error-code-title']}
        </p>
      </div>
    </div>
  );
}
