export default {
  source: ['tokens/src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ds',
      buildPath: 'tokens/build/css/',
      files: [{ destination: 'variables.css', format: 'css/variables' }],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'tokens/build/js/',
      files: [{ destination: 'tokens.js', format: 'javascript/es6' }],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'tokens/build/js/',
      files: [
        { destination: 'tokens.d.ts', format: 'typescript/es6-declarations' },
      ],
    },
  },
}
