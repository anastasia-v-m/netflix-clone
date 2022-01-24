import FooterSpot from '../../modules/FooterSpot';
import LandingHeader from "../../modules/LandingHeader"

export default function LandingStructure() {
  return (
    <>
      <LandingHeader />
      <main>
        <div className="about">reusable description x4</div>
        <div className="questions">
          <div className="questions-container"></div>
          <form className="questions-email-form" method="GET">
            formTitle, input, btn
          </form>
        </div>
      </main>
      <FooterSpot />
    </>
  );
}
