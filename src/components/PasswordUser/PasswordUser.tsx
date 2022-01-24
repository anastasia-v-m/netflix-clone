import data from './data';

export default function PasswordUser() {
  return (
    <>
      <div className="password-user__wrapper">
        <input
          className="password-user__input"
          type="text"
          name="password-user__id"
          id="id-password-user"
        />
        <label htmlFor="id-password-user" className="password-user__label">
          {data.label}
        </label>
      </div>
      <div className="login-user__error">{data.error}</div>
    </>
  );
}
