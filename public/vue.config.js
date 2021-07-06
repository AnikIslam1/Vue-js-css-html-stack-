// Must need for production
module.exports = {
    lintOnSave: true,
    runtimeCompiler: true,
    //Change name for target git repo name
    publicPath: process.env.NODE_ENV === 'production'?"/Vie-js-loginregisterUI.github.io/": "/", 

};