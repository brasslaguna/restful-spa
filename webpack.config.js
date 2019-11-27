
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    context: __dirname,

    entry: {

        app: [
            `./app/client.js`
        ]

    },

    module: {

        rules: [

            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"],
                        plugins: [
                            require.resolve("babel-plugin-transform-decorators-legacy"),
                            require.resolve("babel-plugin-inline-import")
                        ]
                    }
                }
            },

            {

                test: /\.(css)$/,
                use: ExtractTextPlugin.extract({

                    use: [ "css-loader" ]

                })

            },

            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({

                    use: [

                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                importLoaders: 2,
                                localIdentName: "[hash:base64:5]"
                            }
                        },

                        {
                            loader: "sass-loader"
                        }

                    ]

                })

            }

        ]
    },

    resolve: {

        alias: {

            "common": path.resolve(__dirname, "./common")

        }

    },

    output: {

        path: `${__dirname}/app`,

        filename: `./static/[name].js`

    },

    plugins: [

        new ExtractTextPlugin({

            filename: `static/app.css`,
            allChunks: true

        })

    ]
    
};
