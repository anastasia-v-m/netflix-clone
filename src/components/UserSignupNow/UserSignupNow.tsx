import data from './data';

export default function UserSignupNow() {
  return (
    <div className="user-signup-now">
      {data.signUpTitle} &nbsp;
      <a className="user-signup-now__link" href={data.link}>
        {data.linkTitle}
      </a>
    </div>
  );
}
