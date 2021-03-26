import React from 'react';
import { Provider } from 'next-auth/client';
import '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
