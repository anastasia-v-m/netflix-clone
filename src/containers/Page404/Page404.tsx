import React from 'react';

import Header from '../../modules/Header';
import Page404Spot from '../../modules/Page404Spot';

export default function Page404(): JSX.Element {
  return (
    <>
      <Header type="HEADER_404_PAGE" name="header-container" />
      <main>
        <Page404Spot />
      </main>
    </>
  );
}
