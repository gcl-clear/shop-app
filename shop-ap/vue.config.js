module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'commons': '@/commons',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views',
            }
        }
    }
}
