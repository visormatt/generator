module.exports = {
  extends: ['airbnb', 'prettier'],

  env: {
    node: true
  },

  globals: {
    // Jest / Enzyme
    jest: true,
    mount: true,
    render: true,
    shallow: true,

    // Jest ~ functions
    afterAll: false,
    afterEach: false,
    beforeAll: false,
    beforeEach: false,
    describe: false,
    expect: false,
    it: false
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },

  plugins: ['react', 'import', 'prettier'],

  rules: {
    'array-callback-return': 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'consistent-return': [
      'warn',
      {
        treatUndefinedAsUnspecified: false
      }
    ],
    'function-paren-newline': ['warn', 'consistent'],
    'implicit-arrow-linebreak': 0,
    'import/prefer-default-export': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'no-restricted-globals': ['error', 'event'],
    'prettier/prettier': 2,
    quotes: ['warn', 'single', { avoidEscape: true }],
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        json: 'always'
      }
    ],
    'import/order': 0,
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptions: ['Schema', 'React'],
        newIsCapExceptions: ['events']
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: []
      }
    ],
    'object-curly-newline': [
      'warn',
      {
        ExportDeclaration: {
          consistent: true,
          multiline: true
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true
        },
        ObjectExpression: {
          consistent: true,
          multiline: false
        },
        ObjectPattern: {
          consistent: true,
          multiline: false
        }
      }
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true
      }
    ],
    'react/jsx-filename-extension': ['js', 'jsx', 'ts', 'tsx'],
    'space-before-function-paren': 0,
    'space-in-parens': ['error', 'never'],
    'template-curly-spacing': ['error', 'never']
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [],
        extensions: ['.js', '.json', '.ts', '.tsx']
      }
    },
    react: {
      pragma: 'React',
      version: '16.0'
    }
  }
};
