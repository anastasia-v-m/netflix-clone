import React from 'react';

import Page404Header from '../../modules/Page404Header';
import Page404Spot from '../../modules/Page404Spot';

export default function Page404(): JSX.Element {
  return (
    <>
      <header>
        <Page404Header />
      </header>
      <main>
        <Page404Spot />
      </main>
    </>
  );
}
