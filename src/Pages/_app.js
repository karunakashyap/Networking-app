import '../app/globals.css';
import './index';
export default function MyApp({ Component, pageProps }) {
  return (
   <div>
      <Component {...pageProps} />
      
    

    </div>

  );
}