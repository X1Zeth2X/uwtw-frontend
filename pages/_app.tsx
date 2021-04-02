import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

const WTApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default WTApp;
