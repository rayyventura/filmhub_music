import React, { useMemo, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../components/Carousel';
import styled from 'styled-components';
import Footer from '../components/Footer';

export default function Home({ albums }) {
    const albumsKeys = Object.keys(albums);
    const [searchData, setSearchData] = useState<string>('');
    const [filteredAlbums, setFilteredAlbums] = useState([]);

    function filter(albums) {
        const filteredData = albums.filter(
            (album) =>
                album.name.toLowerCase().includes(searchData.toLowerCase()) ||
                album.artistName
                    .toLowerCase()
                    .includes(searchData.toLowerCase())
        );
        return filteredData;
    }
    function filterAlbums() {
        let filtered = albumsKeys.map((key) => {
            return searchData && filter(albums[key]);
        });

        filtered = filtered.filter((album) => album.length > 0);
        setFilteredAlbums([...filtered]);
    }

    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
            minH="100vh"
            bgGradient="linear(to-r,#030a16d1 , #0b6364 50%,#003031e4 100%)"
        >
            <Flex flexDirection="column" justifyContent="flex-start">
                <Header
                    setSearchData={setSearchData}
                    filterAlbums={filterAlbums}
                />
                <Container>
                    <Flex
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        padding=" 0 10%"
                        flexDirection="column"
                        className="album-grid"
                    >
                        {searchData.length !== 0 &&
                            filteredAlbums.map((album, i) => {
                                return (
                                    <Box width="100%">
                                        <Carousel
                                            songs={album}
                                            key={album}
                                            genre={album[i]?.genres[0].name}
                                        />
                                    </Box>
                                );
                            })}
                    </Flex>
                    <Flex
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        padding=" 0 10%"
                        flexDirection="column"
                        className="album-grid"
                    >
                        {searchData.length === 0 &&
                            albumsKeys?.map((key, i) => {
                                return (
                                    <Box width="100%">
                                        <Carousel
                                            songs={albums[key]}
                                            genre={key}
                                            key={i}
                                        />
                                    </Box>
                                );
                            })}
                    </Flex>
                </Container>
            </Flex>
            <Footer />
        </Flex>
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
            albums: hashSongs,
        },
    };
}

const Container = styled.article`
    .album-grid {
        gap: 16px;
        @media (max-width: 800px) {
            gap: 30px;
        }
    }
`;
