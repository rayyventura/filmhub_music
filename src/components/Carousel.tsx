import { Flex } from '@chakra-ui/react';
import Slider from 'react-slick';

import MusicContainer from './MusicContainer';

export default function Carousel({ songs }) {
    const distplayAlbuns = songs.length <= 5 ? songs.length : 5;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: distplayAlbuns,
        slidesToScroll: distplayAlbuns,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:
                        distplayAlbuns !== 1
                            ? distplayAlbuns - 2
                            : distplayAlbuns,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
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
    );
}
