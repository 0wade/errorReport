const webpackConfigBase = require('./config/webpack.config.base');
const webpackConfigProd = require('./config/webpack.config.prod');
const webpackDevServerConfig = require('./config/webpackDevServer.config');
const {injectBabelPlugin, compose} = require('react-app-rewired');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireLess = require('react-app-rewire-less');
const merge = require('lodash.merge');

module.exports = {
    webpack(config, env) {
        //rewires
        const rewires = compose(rewireReactHotLoader, rewireLess);//热重载//less
        //do stuff with the webpack config...
        let prod = env === 'production' ? webpackConfigProd : {};
        config = merge({}, config, webpackConfigBase, webpackConfigProd);
        console.log(config);
        config = injectBabelPlugin([
            'import', {
                libraryName: 'antd',
                style: 'css'
            }
        ], config); //分片加载模块
        return rewires(config, env);
    },
    jest(config) { //单元测试
        return config;
    },
    devServer(configFun) { //本地服务器配置
        return(proxy, allowedHost) => {
            proxy = webpackDevServerConfig.proxy;
            const config = configFun(proxy, allowedHost);
            return config;
        }
    }

}
