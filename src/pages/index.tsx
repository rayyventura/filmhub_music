import React from 'react';
import Head from 'next/head';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Header from '../components/Header';
import MusicContainer from '../components/MusicContainer';

export default function Home() {
    return (
        <Box
            w="100%"
            minH="100vh"
            bgGradient="linear(to-b, #021133, #7878c0,#021133)"
        >
            <Header />
            <Flex justifyContent="center" alignItems="cenetr">
                <MusicContainer />
                <MusicContainer />
                <MusicContainer />
                <MusicContainer />
            </Flex>

            <footer></footer>
        </Box>
    );
}
