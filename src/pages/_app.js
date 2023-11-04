import { IBMPlexSansArabic } from 'src/fonts';

import 'src/globals.css';

const dir = 'rtl';

export default function App({ Component, pageProps }) {
  return (
    <div
      className={IBMPlexSansArabic.className}
      dir={dir}
    >
      <Component {...pageProps} />
    </div>
  );
}
