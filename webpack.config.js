 const path = require('path');
 const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
 const SRC = path.resolve(__dirname, 'src/assets/audio')

 module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   devtool: 'inline-source-map',
   module: {
     rules: [{
         test: /\.css$/i,
         use: ['style-loader', 'css-loader', ],
       },
       {
         test: /\.mp3$/,
         include: SRC,
         loader: 'file-loader'
       },
       {
         test: /\.s[ac]ss$/i,
         use: [
           // Creates `style` nodes from JS strings
           "style-loader",
           // Translates CSS into CommonJS
           "css-loader",
           "resolve-url-loader",
           // Compiles Sass to CSS
           {
             loader: "sass-loader",
             options: {
               sourceMap: true,
             }
           },
         ],
       },
       {
         test: /assets\/svg\.svg$/,
         use: [{
             loader: 'svg-sprite-loader',
             options: {
               extract: true,
               spriteFilename: path.resolve(__dirname, 'dist', 'final.svg'), // this is the destination of your sprite sheet
               runtimeCompat: true,
             }
           },
           'svg-transform-loader',
           'svgo-loader'
         ]
       },

       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
     ],
   },
 };