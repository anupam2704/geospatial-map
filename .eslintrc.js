module.exports = {
    env: {
      browser: true,
      es2020: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 11,
      sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-console': [1],
      'no-with': 2,
      'max-len': [1, 160, 4],
      'no-debugger': 2,
      'no-use-before-define': [2, {functions: false}],
      'no-multiple-empty-lines': [2, {max: 1, maxEOF: 0, maxBOF: 0}],    
      camelcase: [
        1,
        {
          properties: 'never'
        }
      ],
      'no-extra-semi': 1,
      'no-unreachable': 1,
      'no-case-declarations': [1],
      'no-trailing-spaces': 2,
      'no-return-assign': [1],
      'guard-for-in': 2,
      'spaced-comment': [1, 'always'],
      'valid-typeof': 2,
      '@typescript-eslint/no-shadow': [1],
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-unused-vars': [2, {args: 'none'}],
      '@typescript-eslint/explicit-module-boundary-types': [
        1,
        {allowArgumentsExplicitlyTypedAsAny: true}
      ],
      'react/no-unsafe': 2,
      'react/self-closing-comp': [1, {component: true, html: true}],
      'react/prop-types': [0],
      'react/display-name': 0,
      'react/no-this-in-sfc': 2,
      'react/no-children-prop': 2,
      'react/no-deprecated': 2,
      'react/no-direct-mutation-state': 1,
      'react/no-is-mounted': 1,
      'react/boolean-prop-naming': [
        2,
        {rule: '^(is|has|show)[A-Z]([A-Za-z0-9]?)+'}
      ],
      'react/react-in-jsx-scope': 0,
      'react/require-render-return': 2,
      'react/jsx-closing-tag-location': 1,
      'react/jsx-equals-spacing': 1,
      'react/jsx-wrap-multilines': 1,
      'react/jsx-no-comment-textnodes': 1,
      'react/jsx-no-undef': 2,
      'react/jsx-no-useless-fragment': 1,
      'react/jsx-pascal-case': 2,
      'react/jsx-tag-spacing': 1,
      'react/jsx-uses-react': 2,
      'react/jsx-no-duplicate-props': 1,
      'react-hooks/rules-of-hooks': 2,
      'react-hooks/exhaustive-deps': 1
    }
  };