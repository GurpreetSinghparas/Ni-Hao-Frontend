/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      //   '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@commonElements': path.resolve(__dirname, 'src/components/common/elements'),
    },
  },
};
