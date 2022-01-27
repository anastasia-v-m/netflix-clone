import Page404Header from '../../modules/Page404Header';
import Page404Spot from '../../modules/Page404Spot';

export default function Page404Structure() {
  return (
    <>
      <header>
        <Page404Header></Page404Header>
      </header>
      <main>
        <Page404Spot></Page404Spot>
      </main>
    </>
  );
}
