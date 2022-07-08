import { Heading, ScaleFade, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import styled from 'styled-components';

import MusicContainer from './MusicContainer';
import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

export default function Carousel({ songs, genre }) {
    const distplayAlbuns = songs.length <= 5 ? songs.length : 5;
    const ref = useRef(null);
    const { enterCount } = useInViewport(ref);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: distplayAlbuns,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: distplayAlbuns !== 1 ? 2 : distplayAlbuns,
                    infinite: true,
                    dots: true,
                },
                initialSlide: 0,
            },

            {
                breakpoint: 700,
                settings: {
                    slidesToShow: distplayAlbuns !== 1 ? 2 : distplayAlbuns,
                    infinite: true,
                    dots: true,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <>
            {distplayAlbuns ? (
                <ScaleFade
                    in={enterCount > 0}
                    whileHover={{ scale: 1.005 }}
                    reverse={true}
                    style={{ transitionDuration: '300ms' }}
                >
                    <Container ref={ref}>
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
                            {genre}
                        </Heading>
                        <Slider {...carouselSettings}>
                            {songs.map((song) => {
                                return (
                                    <MusicContainer
                                        key={song.id}
                                        albumName={song.name}
                                        artistName={song.artistName}
                                        url={song.url}
                                        image={song.artworkUrl100}
                                    />
                                );
                            })}
                        </Slider>
                    </Container>
                </ScaleFade>
            ) : (
                <Text>Nothing was found</Text>
            )}
        </>
    );
}

const Container = styled.section`
    div.slick-slide {
        width: 200px !important;
        margin: 9px;
    }
`;
