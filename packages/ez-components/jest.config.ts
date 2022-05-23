module.exports = {
  displayName: 'ez-components',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+.vue$': '@vue/vue2-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/packages/ez-components',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'packages/ez-components/tsconfig.spec.json',
      babelConfig: 'packages/ez-components/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'packages/ez-components/tsconfig.spec.json',
      babelConfig: 'packages/ez-components/babel.config.js',
    },
  },
};
