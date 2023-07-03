import Avatar from '../Components/Mobile/Avatar/Avatar';
import Footer from '../Components/Mobile/Footer/Footer';
import '../app/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Avatar></Avatar> */}
      <Component {...pageProps} />
      {/* <Footer /> */}

    </>

  );
}