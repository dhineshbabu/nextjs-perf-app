import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';
// import { ChakraProvider } from '@chakra-ui/react';
Head

export default function App({ Component, pageProps }) {
  return (
    
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}
