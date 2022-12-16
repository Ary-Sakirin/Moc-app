import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import CustomNavbar from '../src/components/CustomNavbar';
import { Footer } from '../src/components/Footer';
import { Navigation } from '../src/components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      
      {/* Nav */}
      <Navigation home="ទំព័រដើម" about="អំពីខ្ញុំ" contact="ទំនាក់ទំនង" />
      {/* <CustomNavbar/> */}
      {/* Body */}
      <Component {...pageProps} />
      {/* Footer */}
      <Footer />
    </>
  );
}
