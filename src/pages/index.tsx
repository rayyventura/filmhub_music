import React, { useState } from 'react';
import { Box, Flex, Heading, Slide } from '@chakra-ui/react';
import Header from '../components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../components/Carousel';

export default function Home({ songs }) {
    const keys = Object.keys(songs);
    const [searchData, setSearchData] = useState<string>();

    function filterSongs(songs) {
        return songs.filter(
            (song) =>
                song.name.toLowerCase().includes(searchData.toLowerCase()) ||
                song.artistName.toLowerCase().includes(searchData.toLowerCase())
        );
    }

    return (
        <Box
            width="100%"
            minH="100vh"
            bgGradient="linear(to-r,#030a16da , #018e91 50%,#003031 100%)"
            overflow="scroll"
        >
            <Header setSearchData={setSearchData} />
            <Flex
                justifyContent="center"
                alignItems="space-evenly"
                flexDirection="column-reverse"
                padding=" 0 10%"
                gap="20px"
            >
                {keys.map((key) => {
                    const filteredSongs = searchData && filterSongs(songs[key]);
                    return (
                        <Box width="100%">
                            {searchData ? (
                                <Carousel
                                    songs={filteredSongs}
                                    key={songs[key].id}
                                    genre={key}
                                />
                            ) : (
                                <Carousel
                                    songs={songs[key]}
                                    key={songs[key].id}
                                    genre={key}
                                />
                            )}
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

    async function generateHashtable() {
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
    }
    generateHashtable();

    return {
        props: {
            songs: hashSongs,
        },
    };
}
