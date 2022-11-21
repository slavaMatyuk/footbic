module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.ios.js',
            '.android.js',
            '.json',
          ],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@config': './src/config',
            '@router': './src/router',
            '@screens': './src/screens',
            '@services': './src/services',
            '@store': './src/store',
            '@styles': './src/styles',
            '@models': './src/models',
            '@utils': './src/utils',
            '@src': './src',
          },
        },
      ],
    ],
  };
};
