import '../app/globals.css';
import './index';

export default function MyApp({ Component, pageProps }) {
  return (
   <>
      {/* <Avatar></Avatar> */}
      <Component {...pageProps} />
      {/* <Footer /> */}

    </>

  );
}