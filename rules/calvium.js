module.exports = {
  // Jest Tests: Prevent 'it' and 'describe' causing ESLint errors
  env: {
    jest: true
  },
  plugins: [
    'flowtype',
    'react-native',
    'promise'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    fetch: false,
    '__DEV__': false,
    requestIdleCallback: false,
    requestAnimationFrame: false
  },
  parser: 'babel-eslint',

  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    'global-require': 0,
    'no-underscore-dangle': 0,
    'new-cap': 0,
    'promise/catch-or-return': 'error',
    'flowtype/define-flow-type': 2,
    'flowtype/require-parameter-type': [
      2,
      {
        excludeArrowFunctions: true
      }
    ],
    'flowtype/require-return-type': [
      2,
      'always',
      {
        annotateUndefined: 'never',
        excludeArrowFunctions: true
      }
    ],
    'flowtype/space-before-type-colon': [
      1,
      'never'
    ],
    'flowtype/type-id-match': [
      2,
      '^([A-Z][a-z0-9]+)+Type$'
    ],
    'no-use-before-define': [
      0
    ],
    'no-return-assign': [0],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    'brace-style': [
      'warn',
      '1tbs'
    ],
    'object-curly-spacing': [
      'warn',
      'never'
    ],
    'no-unused-vars': [
      'warn'
    ],
    'arrow-body-style': [
      'warn',
      'as-needed'
    ],
    'react/sort-comp': [
      // sort-comp is not working well as it give false positives and doesn't pickup real errors
      // but would be nice to have this order working
      1,
      {
        order: [
          'static-methods',
          'constructor',
          'lifecycle',
          'everything-else',
          '/^on.+$/',
          'rendering'
        ],
        groups: {
          rendering: [
            '/^render.+$/',
            'render'
          ]
        }
      }
    ],
    'comma-dangle': [
      'warn',
      'always-multiline'
    ],
    'max-len': [
      1,
      120,
      4,
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'keyword-spacing': [
      'warn',
      {
        overrides: {
          if: {
            after: true
          },
          for: {
            after: true
          },
          while: {
            after: true
          },
          switch: {
            after: true
          }
        }
      }
    ],
    'no-trailing-spaces': [
      'warn'
    ],
    'react/jsx-indent-props': [
      0,
      4
    ],
    // disable the rule
    'react/jsx-indent': [
      0,
      4
    ],
    // disable the rule
    'react/jsx-no-undef': [
      2
    ],
    'react/jsx-space-before-closing': 0,
    // disable
    'react/jsx-boolean-value': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-spacing': 0,
    // Causes errors in React Native <Text> elements if you use a '
    'react/no-unescaped-entities': 0,
    // disable as WebStorm marks this as an error
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error'
        ]
      }
    ],
    // Disable as doesn't support flow types properly
    'no-duplicate-imports': 0,
    // This differentiates between `import type {FooType} from 'bar'` and `import {fish} from 'bar'
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 1,
    "react-native/no-unused-styles": 2,
    "react-native/no-color-literals": 2,
    // Don't force () around `foo` in `foo => { .. do something }`
    "arrow-parens": 0,
    // I think it's ok to have class methods that could be static not static sometimes. (e.g. a `renderEmpty` method on a component)
    "class-methods-use-this": 0,
    // Remove the require usage of ** rather than Math.Pow. Doesn't work on iOS! See D746
    "no-restricted-properties": [
      "error",
      {
        "object": "arguments",
        "property": "callee",
        "message": "arguments.callee is deprecated"
      },
      {
        "property": "__defineGetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "property": "__defineSetter__",
        "message": "Please use Object.defineProperty instead."
      }
    ],
    // Disabled due to conflict with Prettier (T6200)
    "react/jsx-closing-bracket-location": 0,
    "no-mixed-operators": 0,
    "no-confusing-arrow": 0,
    "react/jsx-wrap-multilines": 0,
    "indent": 0
    // .. end disabling for T6200
  },
  'settings': {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
