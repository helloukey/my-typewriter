module.exports = {
    mode: "development",
    entry: "./src/myTypewriter.js",
    output: {
        path: __dirname + "/public",
        filename: "myTypewriter.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/, 
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
        ],
      },
    mode: "none",
}