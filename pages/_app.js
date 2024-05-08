import Layout from "@/components/layout";
import "@/styles/globals.css";
import { useEffect } from 'react'; // Import useEffect hook
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset:300,
      duration:1200,
      // easing: 'ease-in',
      once: false,
    }); // Initialize AOS on the client-side
  }, []); // Run this effect only once, on component mount

  return (
     <Layout>
         <Component {...pageProps} />
     </Layout>
  );
}
