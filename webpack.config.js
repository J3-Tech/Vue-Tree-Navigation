const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './dev/main.js',
  output: {
    path: path.resolve(__dirname, 'dev/', 'dist/'),
    publicPath: '/dev/dist/',
    filename: 'build.js',
  },
  devtool: "source-map",
  // resolve: {
  //   // Add '.ts' and '.tsx' as resolvable extensions.
  //   extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  // },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.js$/, loader: "source-map-loader" },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
            sass: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax',
            ],
          },
          // other vue-loader options go here
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json', "", ".webpack.js", ".web.js", ".ts", ".tsx"],

  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dev'),
    },
  },
  performance: {
    hints: false,
  },
  devtool: 'eval-cheap-source-map',
};

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production';

  module.exports.entry = './src/index.js';

  module.exports.output = {
    path: path.resolve(__dirname, './dist'),
    filename: 'vue-tree-navigation.js',
    library: 'VueTreeNavigation',
    libraryTarget: 'umd',
  };

  module.exports.devtool = 'eval-cheap-source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}
