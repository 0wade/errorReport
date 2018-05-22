// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/error-report/',
        deliverToTest: {
            port: '22',
            host: '10.40.2.186',
            username: 'root',
            password: 'PkKgX8bA',
            from: 'build',
            to: '/data/deploy/baoko/error-report'
        },
        deliverToProd: {
            port: '22',
            host: '120.25.58.202',
            username: 'web',
            password: 'HEpc068DAHw',
            from: 'dist',
            to: '/data/app/baobei/car-insurance'
        },
        deliverToReady: {
            port: '22',
            host: '120.25.58.202',
            username: 'web',
            password: 'HEpc068DAHw',
            from: 'dist',
            to: '/data/app/baobei-test/car-insurance'
        }
    },
    dev: {
        port: 8080,
        autoOpenBrowser: false,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/insure-agent': {
                target: 'http://10.40.2.186:8088'    // 186
            },
            '/report': {
                target: 'http://10.40.2.6:30085'    // 186
            }
        },
        cssSourceMap: false
    }
}
