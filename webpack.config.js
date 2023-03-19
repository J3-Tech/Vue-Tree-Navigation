const path = require('path');
const webpack = require('webpack');
//const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
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
  //plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue: '@vue/compat'
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
  let entry = './src/index.js'
  let filename = 'vue-tree-navigation.js'
  let outputPath = './dist'
  if (process.env.TYPE == 'docs') {
    entry = './dev/main.js'
    filename = 'build.js'
    outputPath = './docs'
  }
  module.exports.mode = 'production';

  module.exports.entry = entry;

  module.exports.output = {
    path: path.resolve(__dirname, outputPath),
    filename: filename,
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
