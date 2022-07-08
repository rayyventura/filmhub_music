import React, { useState } from 'react';
import { Box, Flex, Heading, Slide } from '@chakra-ui/react';
import Header from '../components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../components/Carousel';

export default function Home({ songs }) {
    const keys = Object.keys(songs);

    return (
        <Box
            width="100%"
            minH="100vh"
            bgGradient="linear(to-r,#030a16da , #018e91 50%,#003031 100%)"
            overflow="scroll"
        >
            <Header />
            <Flex
                justifyContent="center"
                alignItems="space-evenly"
                flexDirection="column-reverse"
                padding=" 0 10%"
                gap="20px"
            >
                {keys.map((key) => {
                    return (
                        <Box width="100%">
                            <Heading
                                as="h1"
                                fontSize="30px"
                                fontFamily="Plus Jakarta Sans"
                                color="white"
                                textShadow="1px 1px 3px black"
                                letterSpacing="tighter"
                                alignSelf="flex-start"
                                mb="12px"
                            >
                                {key}
                            </Heading>

                            <Carousel songs={songs[key]} key={songs[key].id} />
                        </Box>
                    );
                })}
            </Flex>
        </Box>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'
    );
    const data = await res.json();
    const songs = data.feed.results;
    const hashSongs = new Object();
    await songs.map((song) => {
        let genreName = song.genres[0].name;
        if (genreName === 'Music' && song.genres[1]?.name) {
            genreName = song.genres[1].name;
        }
        if (hashSongs[genreName]) {
            hashSongs[genreName].push(song);
        } else {
            hashSongs[genreName] = [song];
        }
    });

    return {
        props: {
            songs: hashSongs,
        },
    };
}
