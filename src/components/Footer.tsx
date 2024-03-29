import {
  Avatar,
  Divider,
  Flex,
  Link,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Flex as="footer" gap="20px" mt="80px" color="white" flexDirection="column">
      <Divider />
      <Container
        justifyContent="space-between"
        alignItems="center"
        fontSize="12px"
      >
        <Flex gap="9px" ml="20px">
          <Text>© 2022 Filmhub, Inc.</Text>
          <Link
            _hover={{ color: '#8b8b8b' }}
            href="#"
            isExternal
            cursor="pointer"
          >
            Terms
          </Link>
          <Link _hover={{ color: '#8b8b8b' }} href="#" isExternal>
            Privacy
          </Link>
        </Flex>
        <Wrap pb="12px" mr="20px">
          <Link href="#" isExternal>
            <WrapItem>
              <Avatar
                name="Dan Abrahmov"
                src="/avatar-icons/facebook.png"
                cursor="pointer"
                _hover={{ opacity: 1 }}
                opacity="0.6"
                size="xs"
                className="avatar"
              />
            </WrapItem>
          </Link>
          <Link href="#" isExternal>
            <WrapItem>
              <Avatar
                name="Kent Dodds"
                src="/avatar-icons/instagram.png"
                cursor="pointer"
                _hover={{ opacity: 1 }}
                opacity="0.6"
                size="xs"
                className="avatar"
              />
            </WrapItem>
          </Link>
          <Link href="#" isExternal>
            <WrapItem>
              <Avatar
                name="Kent Dodds"
                src="/avatar-icons/linkedin.png"
                cursor="pointer"
                _hover={{ opacity: 1 }}
                opacity="0.6"
                size="xs"
                className="avatar"
              />
            </WrapItem>
          </Link>
          <Link href="#" isExternal>
            <WrapItem>
              <Avatar
                name="facebook"
                src="/avatar-icons/twitter.png"
                cursor="pointer"
                _hover={{ opacity: 1 }}
                opacity="0.6"
                bgColor="white"
                size="xs"
                className="avatar"
              />
            </WrapItem>
          </Link>
        </Wrap>
      </Container>
    </Flex>
  );
}

const Container = styled(Flex)`
  @media (max-width: 800px) {
    flex-direction: column;
    .avatar {
      opacity: 1;
    }
  }
`;
