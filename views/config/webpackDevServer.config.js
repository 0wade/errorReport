module.exports = {
    proxy: {
        '/api': {
            target: 'http://10.40.2.186:30085'
        }
    }
}
