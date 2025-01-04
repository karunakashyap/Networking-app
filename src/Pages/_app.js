import '../app/globals.css';
import './index'; // Import the index file here

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
