import { Html, Head, Main, NextScript } from 'next/document';
import { isCapacitor } from '../utils/capacitor';

export default function Document() {
  const capacitor = isCapacitor;

  return (
    <Html>
      <Head />
      <body className={`${!capacitor && 'overflow-auto w-100 bg-black text-white mt-0'}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}