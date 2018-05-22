const config = require('./build');
var SshWebpackPlugin = require('ssh-webpack-plugin')

module.exports = {
    plugins: [
        new SshWebpackPlugin(config.build.deliverToTest)
    ]
}
