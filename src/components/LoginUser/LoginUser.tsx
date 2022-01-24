import data from './data';

export default function LoginUser() {
  return (
    <>
      <div className="login-user__wrapper">
        <input
          className="login-user__input"
          type="text"
          name="login-user__id"
          id="id-login-user"
        />
        <label htmlFor="id-login-user" className="login-user__label">
          {data.label}
        </label>
      </div>
      <div className="login-user__error">{data.error}</div>
    </>
  );
}
