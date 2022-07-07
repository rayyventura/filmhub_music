const withImages = require('next-images');

/** @type {import('next').NextConfig} */

module.exports = withImages({
    esModule: true,
    images: {
        disableStaticImages: true,
    },
});
