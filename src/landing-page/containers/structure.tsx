import '../reset.css';

export default function LandingStructure() {
  return (
    <>
      <header>
        <div className="header-top-container">svg, langSelector, authBtn</div>
        <div className="header-text-container">
          title, subTitle
          <form className="email-form" method="GET">
            formTitle, input, btn
          </form>
        </div>
      </header>
      <main>
        <div className="about">reusable description x4</div>
        <div className="questions">
          <div className="questions-container"></div>
          <form className="questions-email-form" method="GET">
            formTitle, input, btn
          </form>
        </div>
      </main>
      <footer>
        <div className="footer-links"></div>
        langSelector developers-info
      </footer>
    </>
  );
}
