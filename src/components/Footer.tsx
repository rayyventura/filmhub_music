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

export default function Footer() {
    return (
        <Flex
            as="footer"
            gap="20px"
            mt="80px"
            color="white"
            flexDirection="column"
        >
            <Divider />
            <Flex
                justifyContent="space-between"
                alignItems="center"
                fontSize="12px"
            >
                <Flex gap="9px" ml="20px">
                    <Text>© 2021 Filmhub, Inc.</Text>
                    <Link
                        _hover={{ color: '#8b8b8b' }}
                        href="https://filmhub.com/terms"
                        isExternal
                        cursor="pointer"
                    >
                        Terms
                    </Link>
                    <Link
                        _hover={{ color: '#8b8b8b' }}
                        href="https://filmhub.com/privacy"
                        isExternal
                    >
                        Privacy
                    </Link>
                </Flex>
                <Wrap pb="12px" mr="20px">
                    <Link href="https://www.facebook.com/filmhubhq" isExternal>
                        <WrapItem>
                            <Avatar
                                name="Dan Abrahmov"
                                src="/avatar-icons/facebook.png"
                                cursor="pointer"
                                _hover={{ opacity: 1 }}
                                opacity="0.6"
                                size="xs"
                            />
                        </WrapItem>
                    </Link>
                    <Link
                        href="https://www.instagram.com/filmhubhq/"
                        isExternal
                    >
                        <WrapItem>
                            <Avatar
                                name="Kent Dodds"
                                src="/avatar-icons/instagram.png"
                                cursor="pointer"
                                _hover={{ opacity: 1 }}
                                opacity="0.6"
                                size="xs"
                            />
                        </WrapItem>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/filmhub/"
                        isExternal
                    >
                        <WrapItem>
                            <Avatar
                                name="Kent Dodds"
                                src="/avatar-icons/linkedin.png"
                                cursor="pointer"
                                _hover={{ opacity: 1 }}
                                opacity="0.6"
                                size="xs"
                            />
                        </WrapItem>
                    </Link>
                    <Link href="https://twitter.com/filmhubhq" isExternal>
                        <WrapItem>
                            <Avatar
                                name="facebook"
                                src="/avatar-icons/twitter.png"
                                cursor="pointer"
                                _hover={{ opacity: 1 }}
                                opacity="0.6"
                                bgColor="white"
                                size="xs"
                            />
                        </WrapItem>
                    </Link>
                </Wrap>
            </Flex>
        </Flex>
    );
}
