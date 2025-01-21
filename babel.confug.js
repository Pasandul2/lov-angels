module.exports = function(api) {
    api.cache(true);
    return {
      presets: [
        'babel-preset-expo',      // Include this for Expo-related configuration
        '@babel/preset-react',    // This is crucial for JSX support
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',   // Optional for modern JS
        '@babel/plugin-syntax-jsx',                  // Optional, if JSX parsing is still causing issues
      ],
    };
  };
  