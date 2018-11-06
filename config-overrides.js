const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {

    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1890ff" },
        javascriptEnabled: true
    })(config, env);

    config.resolve.alias = {
        'Api':resolve('src/api'),
        'Components':resolve('src/components'),
        'Reducers':resolve('src/reducers'),
        'Pages':resolve('src/pages'),
        'Utils':resolve('src/utils')
    }
    return config;

}