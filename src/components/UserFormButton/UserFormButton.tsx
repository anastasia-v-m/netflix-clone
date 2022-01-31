import data from './data';

export default function UserFormButton() {
  return (
    <button className="user-form__button" type="submit">
      {data.title}
    </button>
  );
}
