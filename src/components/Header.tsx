import {
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import styled from 'styled-components';

export default function Header({ setSearchData, filterAlbums }) {
    const [inputColor, setInputcolor] = useState<string>('white');

    return (
        <Container>
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                as="header"
                padding="40px 0 30px 0"
            >
                <Flex alignItems="center">
                    <Image src="/logo.png" alt="logo" />
                    <Heading
                        as="h1"
                        fontSize="2rem"
                        noOfLines={1}
                        padding="20px"
                        fontFamily="Plus Jakarta Sans"
                        color="white"
                        textShadow="1px 1px 12px black"
                        letterSpacing="tighter"
                    >
                        Filmhub Music
                    </Heading>
                </Flex>

                <Flex
                    alignItems="center"
                    width="50%"
                    justifyContent="center"
                    className="input"
                >
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<Search2Icon color="gray.300" />}
                        />
                        <Input
                            data-cy="search-input"
                            size="lg"
                            variant="filled"
                            color={inputColor}
                            fontFamily="Signika"
                            onBlur={() => setInputcolor('black')}
                            onFocus={() => setInputcolor('white')}
                            placeholder="Search"
                            onChange={(e) => {
                                setSearchData(e.target.value);
                                filterAlbums();
                            }}
                        ></Input>
                    </InputGroup>
                </Flex>
            </Flex>
        </Container>
    );
}

const Image = styled.img`
    height: 30px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
`;

const Container = styled.div`
    .input {
        @media (max-width: 700px) {
            width: 90%;
        }
    }
`;
