import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';

const WTApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
)

export default WTApp;
