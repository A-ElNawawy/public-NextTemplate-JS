//TODO: Remove if unused
import { useRouter } from 'next/router';

import { IBMPlexSansArabic } from 'src/fonts';

import { Main } from 'src/atoms/Main';

import { RootLayoutS } from './style.module.css';

export const RootLayout = ({ children }) => {
  const pathname = useRouter().asPath;

  const home = pathname === '/';











  
  return (
    <section className={`${RootLayoutS} ${IBMPlexSansArabic.className}`}>
      {/* ===================== */}
      {/* fixed position elements */}
      {/* <Nav/> */}
      {/* <SideNav/> */}
      {/* <GoToTop/> */}

      {/* ===================== */}

      {/* Breadcrumb is NOT in the home page */}
      {home ? (
        children
      ) : (
        <Main>
          {/* <Breadcrumb /> */}

          {children}
        </Main>
      )}

      {/* <Footer /> */}
    </section>
  );
};
