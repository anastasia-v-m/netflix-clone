import data from './data';

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
          <span className="remember-me__span">{data.span}</span>
        </label>
      </div>
      <a className="help-link" href="/#">
        {data.linkTitle}
      </a>
    </div>
  );
}
