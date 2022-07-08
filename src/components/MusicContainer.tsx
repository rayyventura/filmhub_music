import { Box, Flex, Slide } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from '@chakra-ui/react';
import styled from 'styled-components';

export default function MusicContainer({ albumName, artistName, url, image }) {
    return (
        <Link href={url} isExternal>
            <Flex
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                as="section"
                width="200px"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
                color="#cacaca"
            >
                <Image src={`${image}`} className="img"></Image>
                <Text fontWeight="bold">{albumName}</Text>
                <Text fontSize="12px" color="#82c2e7">
                    {artistName}{' '}
                </Text>
            </Flex>
        </Link>
    );
}

const Image = styled.img`
    border-radius: 10px;
    width: 100%;

    margin-bottom: 12px;
`;
