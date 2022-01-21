export default function FacebookForm() {
  return (
    <form className="facebook-form" method="POST">
      <button className="facebook-form__button">
        <div className="facebook-form__button_wrapper">
          <img className="facebook-icon" src="/#" alt="" />
          <span className="facebook-title">Войдите через Facebook</span>
        </div>
      </button>
    </form>
  );
}
