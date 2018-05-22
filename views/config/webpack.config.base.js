const path = require('path');
const config = require('./build');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    output: {
        publicPath: process.env.NODE_ENV !== 'development'? config.build.assetsPublicPath: config.dev.assetsPublicPath
    },
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
};
