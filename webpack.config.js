const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },

    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
        open: true // сайт будет открываться сам при запуске npm run dev
    },

    module: {
        rules: [
            {
                test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                use: {
                    loader: 'babel-loader', // весь JS обрабатывается пакетом babel-loader
                    options: {
                        presets: ['@babel/preset-env'] // используется пресет последней версии
                    }
                },
                exclude: /node_modules/ // исключает папку node_modules
            },
            {
                // регулярное выражение, которое ищет все файлы с такими расширениями
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader'
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // путь к файлу index.html
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // new StylelintWebpackPlugin({
        //     files: ['src/**/*.css', 'src/**/*.scss', 'src/**/*.html'], // Укажите пути к файлам
        //   }),
    ]
}
