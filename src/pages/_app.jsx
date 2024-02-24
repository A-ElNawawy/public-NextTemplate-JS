import { MainLayout } from 'src/organisms/MainLayout';

import { ContextProviders } from 'src/context/ContextProviders';

import 'src/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    //TODO: Remove if unused
    <ContextProviders>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ContextProviders>
  );
};

export default App;
