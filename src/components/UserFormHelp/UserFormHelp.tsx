export default function UserFormHelp() {
  return (
    <div className="user-form__help">
      <div className="remember-me__wrapper">
        <input
          className="remember-me__input"
          type="checkbox"
          id="remember-me__id"
        />
        <label className="remember-me__label" htmlFor="remember-me__id">
          <span className="remember-me__span">Запомнить меня</span>
        </label>
      </div>
      <a className="help-link" href="/#">
        Нужна помощь?
      </a>
    </div>
  );
}
