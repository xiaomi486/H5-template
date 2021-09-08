const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    plugins: {
      // 'autoprefixer': {
      //   browsers: ['Android >= 4.0', 'iOS >= 7']
      // },
      'autoprefixer': {},
      'postcss-pxtorem': {
        rootValue: 75,
        propList: ['*'],
        unitPrecision: 5,
        exclude: [
          resolve("node_modules/vant")
        ]
      }
    }
  }