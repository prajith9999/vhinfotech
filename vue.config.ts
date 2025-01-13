import { defineConfig } from "@vue/cli-service";


export default defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      },
    },
  },

  devServer: {
    client: {
      overlay: true, // Enable dev server overlay for errors
    },
  },

  chainWebpack: (config) => {
    // Add Vue Devtools Plugin manually
    config
      .plugin('vue-devtools')
      .use(require('webpack').DefinePlugin, [
        { 'process.env.VUE_DEVTOOLS': true },
      ]);
  },
});
