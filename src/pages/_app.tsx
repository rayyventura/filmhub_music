import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
            <GlobalStyle />
        </ChakraProvider>
    );
}

export default MyApp;
