import { useRouter } from 'next/router';

import { Main } from 'src/atoms/Main';

import { IBMPlexSansArabic } from 'src/fonts';

import { mainLayout } from './style.module.css';

//TODO: Remove if unused
export const MainLayout = ({ children }) => {
  const pathname = useRouter().asPath;

  const home = pathname === '/';

  return (
    <section className={`${mainLayout} ${IBMPlexSansArabic.className}`}>
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
