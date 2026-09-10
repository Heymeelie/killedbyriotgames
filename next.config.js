/** @type {import('next').NextConfig} */
const nextConfig = {
    // Pin the Turbopack workspace root; without it Next walks up past the repo
    // and picks up unrelated lockfiles in the parent directory.
    turbopack: {
        root: __dirname,
    },
    env: {
        mode: process.env.NODE_ENV,
    },
    compiler: {
        // Replaces the old .babelrc (@emotion/babel-preset-css-prop) with
        // Next's built-in SWC transform for Emotion's css prop.
        emotion: true,
    },
    async redirects() {
        return [{
            source: '/graveyard.json',
            destination: '/api/graveyard',
            permanent: true,
        }, ];
    },
    async rewrites() {
        return [{
                source: '/umami.js',
                destination: 'https://a.challenges.gg/umami.js'
            },
            {
                source: '/api/collect',
                destination: 'https://a.challenges.gg/api/collect',
            }
        ]
    },
};

module.exports = nextConfig;
