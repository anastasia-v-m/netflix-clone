import data from './data';

export default function FacebookForm() {
  return (
    <form className="facebook-form" method="POST">
      <button className="facebook-form__button">
        <div className="facebook-form__button_wrapper">
          <img className="facebook-icon" src={data.logo} alt="facebookLogo" />
          <span className="facebook-title">{data.title}</span>
        </div>
      </button>
    </form>
  );
}
