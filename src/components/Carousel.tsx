import { Heading, ScaleFade } from '@chakra-ui/react';
import Slider from 'react-slick';
import styled from 'styled-components';

import MusicContainer from './MusicContainer';
import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

export default function Carousel({ songs, genre }) {
    const distplayAlbuns = songs.length <= 5 ? songs.length : 5;
    const ref = useRef(null);
    const { enterCount } = useInViewport(ref);

    const settings = {
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
            },

            {
                breakpoint: 700,
                settings: {
                    slidesToShow: distplayAlbuns !== 1 ? 2 : distplayAlbuns,
                    infinite: true,
                    dots: true,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <>
            {distplayAlbuns !== 0 && (
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
                        <Slider {...settings}>
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
