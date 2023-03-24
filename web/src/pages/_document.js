import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html>
      <Head />
      <body className='overflow-auto w-100 bg-black text-white mt-0'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}