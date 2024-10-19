const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
                exclude: /node_modules[\\/](next)[\\/]/,
            });
        }
        return config;
    },
};
