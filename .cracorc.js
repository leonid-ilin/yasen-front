module.exports = {
    plugins: [
        {
            plugin: require('craco-less'),
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
                noIeCompat: true
            },
        },
    ],
};
