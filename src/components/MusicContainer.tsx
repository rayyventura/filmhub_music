import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import image from '../assets/background.png';

export default function MusicContainer() {
    return (
        <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            as="section"
            width="300px"
            height="300px"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
        >
            <Image
                src={image}
                width="200px"
                height="200px"
                className="img"
            ></Image>
        </Flex>
    );
}
