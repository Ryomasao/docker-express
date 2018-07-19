var publidDir = __dirname + '/public';

module.exports = {
  // コンパイル対象のエントリーポイント
  entry: [
    './src/index.jsx'
  ],
  //出力先
  output: {
    path: publidDir,
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
};
