import Avatar from '../Components/Avatar/Avatar';
import './../app/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Avatar></Avatar>
      <Component {...pageProps} />
      

    </>

  );
}