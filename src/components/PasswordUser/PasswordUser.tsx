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
          Пароль
        </label>
      </div>
      <div className="login-user__error">
        Пароль должен содержать от 4 до 60 символов.
      </div>
    </>
  );
}
