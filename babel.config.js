function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

module.exports = api => {
  const web = api.caller(isWebTarget);

  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          targets: !web ? { node: 'current' } : undefined,
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: ['@loadable/babel-plugin'],
  };
};
