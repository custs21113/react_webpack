const path = require('path');
const { override,
    fixBabelImports,
    adjustStyleLoaders,
    addPostcssPlugins,
    overrideDevServer,
    addWebpackAlias } = require("customize-cra");
const resolve = _path => path.resolve(__dirname, _path);
console.log(resolve('@/components/button'))
module.exports = {
    webpack: override(
        //antd-mobile分包
        fixBabelImports("import", {
            libraryName: 'antd-mobile',
            style: 'css',
        }),
        //lodash分包
        fixBabelImports("lodash", {
            libraryDirectory: '',
            camel2DashComponentName: false
        }),
        //路径别名
        addWebpackAlias({
            ['@']: resolve("./src")
        }),
        //添加loader 全局css
        adjustStyleLoaders(rule => {
            if (rule.test.toString().includes('scss')) {
                rule.use.push({
                    loader: require.resolve('sass-resources-loader'),
                    options: {
                        resources: [resolve("./src/style/theme.scss")]
                    }
                })
            }
        }),
        //px转vw
        addPostcssPlugins([
            require("postcss-px-to-viewport")({
                unitToConvert: 'px',  // 需要转换的单位，默认‘px’
                viewportWidth: 750,   // 设计稿的视口宽度
                unitPrecision: 6,     // px转vw之后保留的精度(保留几位小数)
                propList: ['*'],      // 那些属性可以被转换成vw * 代表全部
                viewportUnit: 'vw',   // 希望使用的视口单位 // vw
                fontViewportUnit: 'vw', //字体使用的视口单位
                selectorBlackList: [],  // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
                minPixelValue: 1,       // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
                mediaQuery: false,      // 媒体查询里的单位是否需要转换单位
                replace: true,          // 是否直接更换属性值，而不添加备用属性
                exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                landscape: false,       // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
                landscapeUnit: 'vw'     // 横屏时使用的单位
            })
        ]),
    ),
    //本地跨域
    // devServer: overrideDevServer([
    //     config => ({
    //         ...config,
    //         proxy: {
    //             "api": {
    //                 target: "http://localhost:3003",
    //                 pathRewrite: { "^/api": "" }
    //             }
    //         }
    //     })
    // ])
}
