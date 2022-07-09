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
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
        color="#cacaca"
        padding="3px"
        width="200px"
      >
        <Image src={`${image}`}></Image>
        <Text fontWeight="bold" as="p" data-cy="album-name">
          {albumName}
        </Text>
        <Text fontSize="12px" as="p" color="#82c2e7" data-cy="artist-name">
          {artistName}
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
