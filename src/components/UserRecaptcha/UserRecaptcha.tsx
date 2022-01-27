import data from './data';

export default function UserRecaptcha() {
  return (
    <>
      <div className="user-recaptcha__wrapper">
        <p className="user-recaptcha__title">
          <span className="user-recaptcha__span">{data.spanTitle}</span>
          &nbsp;
          <button className="user-recaptcha__link_button" type='button'>
            {data.buttonTitle}
          </button>
        </p>
      </div>
      <div className="user-recaptcha__description_wrapper">
        <span className="user-recaptcha__description">
          {data.description}&nbsp;
          <a
            className="user-recaptcha__privacy"
            href={data.privacyLink}
            target="_blank" rel="noreferrer"
          >
            {data.privacyTitle}
          </a>
          &nbsp;и&nbsp;
          <a
            className="user-recaptcha__terms"
            href={data.termsLink}
            target="_blank" rel="noreferrer"
          >
            {data.termsTitle}
          </a>
          &nbsp;
          {data.terms}
        </span>
      </div>
    </>
  );
}
