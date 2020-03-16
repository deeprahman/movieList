/**
 * This file contains configuration for webpack, so that it can work with React and others
 */
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                },
            }
        ],
    },
};