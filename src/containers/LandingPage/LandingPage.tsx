import FooterSpot from '../../modules/FooterSpot';
import LandingHeader from '../../modules/LandingHeader';
import AnnouncesSpot from '../../modules/AnnouncesSpot';
import QuestionsSpot from '../../modules/QuestionSpot';
import EmailForm from '../../components/emailForm';

export default function LandingStructure() {
  return (
    <>
      <LandingHeader />
      <main>
        <div className="about">
          <AnnouncesSpot />
        </div>
        <div className="questions">
          <QuestionsSpot />
          <EmailForm />
        </div>
      </main>
      <FooterSpot />
    </>
  );
}
