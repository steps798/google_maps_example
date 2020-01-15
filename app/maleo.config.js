const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const whitelistEntries = /(webpack|react-hot-loader|_server|_client)/

const replaceJStoTS = (entries = {}) =>
  Object.keys(entries).reduce((p, c) => {
    let entry = entries[c]

    if (typeof entry === 'string') {
      if (whitelistEntries.test(entry)) {
        return {
          ...p,
          [c]: entry,
        }
      }

      return {
        ...p,
        [c]: entry.replace(/\.js/, '.ts') && entry.replace(/\.jsx/, '.tsx'),
      }
    }

    return {
      ...p,
      [c]: Object.values(replaceJStoTS(entry)),
    }
  }, {})

module.exports = {
  customDocument: './_document.tsx',
  customWrap: './_wrap.tsx',
  publicPath: '/public/',
  cache: false,
  webpack(config, context, next) {
    const { env } = context

    config.entry = replaceJStoTS(config.entry)

    config.devtool = 'inline-source-map'

    config.module.rules.push(
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(ico|svg|jpg|png|eot|ttf|woff|woff2|otf?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      },
    )

    config.resolve.extensions.push('.ts', '.tsx')

    config.resolve.alias = {
      '~components': path.resolve('.', 'src', 'components'),
      '~assets': path.resolve('.', 'src', 'assets'),
      '~configs': path.resolve('.', 'src', 'configs'),
      '~services': path.resolve('.', 'src', 'services'),
      '~data': path.resolve('.', 'src', 'data'),
      "~static": path.resolve(".", "src", "static")
    }

    if (env === 'development') {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          tslint: true,
          checkSyntacticErrors: true,
          watch: ['./src'], // optional but improves performance (fewer stat calls)
        }),
      )
    }

    config.plugins.push(new CopyPlugin([{ from: "src/static", to: "" }]));


    return next()
  },
}
