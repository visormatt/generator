/**
 * @external https://goo.gl/Fn6wVN
 * @description New in Babel 7.x, Babel has as concept of a "root" directory, which
 * defaults to the current working directory. For project-wide configuration, Babel
 * will automatically search for a "babel.config.js" in this root directory.
 * Alternatively, users can use an explicit "configFile" value to override the
 * default config file search behavior.
 *
 *   https://goo.gl/ZXnsSD ~ "loose" option on proposal-class-properties plugin
 *
 */
module.exports = function(api) {
  if (api) api.cache(true);

  const plugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }], // eslint-disable-line
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-async-to-generator'
  ];

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];

  return {
    plugins,
    presets
  };
};
