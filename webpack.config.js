function render_config(mode)
{
    // noinspection EqualityComparisonWithCoercionJS
    const is_development = (mode == 'development');

    return {
        mode,
        entry: './src/browser.js',
        devtool: false,
        output: {
            filename: is_development ? 'vbtree.js' : 'vbtree.min.js',
            library: 'vbtree',
        },
        externals: {
            faker: 'faker',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                },
            ],
        },
    };
}

// noinspection WebpackConfigHighlighting
module.exports = [
    render_config('development'),
    render_config('production'),
];
