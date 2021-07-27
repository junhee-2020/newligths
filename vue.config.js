module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "광명 새빛교회";
                return args;
            })
    }
}