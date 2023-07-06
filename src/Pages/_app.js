import Avatar from '../Components/Mobile/Avatar/Avatar';
import Footer from '../Components/Mobile/Footer/Footer';
import '../app/globals.css';
import './index'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Avatar></Avatar> */}
      <Component {...pageProps} />
      {/* <Footer /> */}

    </>

  );
}