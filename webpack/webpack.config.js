const ExtractTextPlugin = require('extract-text-webpack-plugin');
var publidDir = __dirname + '/public';

module.exports = 
[
  {
    // コンパイル対象のエントリーポイント
    entry: [
      './src/index.jsx'
    ],
    //出力先
    output: {
      path: publidDir + '/js',
      filename: 'bundle.js'
    },
    // ローダーの設定
    module: {
      rules: [
        {
          // コンパイル対象の拡張子を書けばいいみたい
          test: /\.(js|jsx)$/,
          // nodo_modules配下は対象外にしろってことなんだろうけど、対象にするとどうなるんだろう。
          // あー、entryのindex.js内で@importとかしてるからか。
          exclude: /node_modules/,
          loader: 'babel-loader',
          // ここに書いてもいいし、.babelrcに書いてもいいみたい
          options: {
            presets: ['react', 'env']
          }
        }
      ]
    },
    // @import するときに.jsとか.jsxとかつけなくていいのはこの子のおかげと思われる
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    //webpack-serverの設定
    devServer: {
      // 謎 react-routerを使うときに気にする必要があるかも
      historyApiFallback: true,
      port: 8080,
      //documentroot
      contentBase: publidDir,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  {
    entry: {
      style: './stylesheets/index.scss',
    },
    output: {
      path: publidDir + '/css',
      publicPath: '/',
      filename: 'bundle.css',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  }
]