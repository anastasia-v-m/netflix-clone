export default function UserRecaptcha() {
  return (
    <>
      <div className="user-recaptcha__wrapper">
        <p className="user-recaptcha__title">
          <span className="user-recaptcha__span">
            Эта страница защищена Google reCAPTCHA, чтобы мы знали, что вы не
            бот.
          </span>
          &nbsp;
          <button className="user-recaptcha__link_button">Подробнее.</button>
        </p>
      </div>
      <div className="user-recaptcha__description_wrapper">
        <span className="user-recaptcha__description">
          На информацию, собираемую службой Google reCAPTCHA,
          распространяются&nbsp;
          <a
            className="user-recaptcha__privacy"
            href="https://policies.google.com/privacy"
            target={'_blank'}
          >
            Политика конфиденциальности
          </a>
          &nbsp;и&nbsp;
          <a
            className="user-recaptcha__terms"
            href="https://policies.google.com/terms"
            target={'_blank'}
          >
            Условия использования Google.
          </a>
          &nbsp; Эта информация используется для предоставления, обслуживания и
          совершенствования службы reCAPTCHA, а также в целях обеспечения
          безопасности (для показа персонализированной рекламы Google она не
          используется).
        </span>
      </div>
    </>
  );
}
