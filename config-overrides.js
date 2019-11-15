// const {overrids, fixBabelImports,addLessLoader} = require('customize-cra')

// module.exports = overrids(
//     fixBabelImports('import',{
//         libraryName: 'antd',
//         libraryDireactory: 'es',
//         style: 'css',
//         // style: true,
//     }),
//     //  配置antd 主题颜色
//     addLessLoader({
//         javascriptEnabled: true,
//         modifyVars: {'@primary-color': '#1da57a'}
//     }),
// )
const {override,fixBabelImports} = require("customize-cra");
 
 module.exports = override(
   fixBabelImports("babel-plugin-import", {
     libraryName: "antd",
     style: "css"
   })
 );