import FooterSpot from '../../modules/FooterSpot';
import LandingHeader from "../../modules/LandingHeader"
import AnnouncesSpot from '../../modules/AnnouncesSpot';

export default function LandingStructure() {
  return (
    <>
      <LandingHeader />
      <main>
        <div className="about">
          <AnnouncesSpot></AnnouncesSpot>
        </div>
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
