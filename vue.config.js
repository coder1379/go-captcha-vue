module.exports = {
    publicPath: '/go_captcha_demo',
    // ...
    devServer: {
        port: 8001,
        proxy: {
            '/api': {
                target: 'http://192.168.111.10:49001',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        disableHostCheck: true,
    }
}