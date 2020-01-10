module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map"
  },
  publicPath: "/forutonamanagement/",
  devServer: {
    proxy: {
      "/forutonamanagementbackend": {
        target: "http://127.0.0.1:8443/forutonamanagementbackend/",
        changeOrigin: true,
        pathRewrite: {
          "^/forutonamanagementbackend": ""
        }
      }
    }
  }
};
