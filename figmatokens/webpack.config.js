module.exports = {
    entry: './src/index.jsx',
    output: {
      filename: 'main.js',
      path: __dirname + '/public'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    }
  };