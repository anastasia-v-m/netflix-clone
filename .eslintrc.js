module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        path: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'warn', // fix problems 'React' must be in scope when using JSX
    'import/extensions': [
      // fix problems Missing file extension "tsx"
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      // fix JSX not allowed in files with extension '.tsx'
      'warn', // 'React' must be in scope when using JSX
      { extensions: ['.tsx'] },
    ],
    'react/destructuring-assignment': 'warn', // fix error - Must use destructuring props assignment
    'class-methods-use-this': 'warn', // Expected 'this' to be used by class method 'renderBlock'
    'jsx-a11y/click-events-have-key-events': 'warn', // Visible, non-interactive elements with click handlers must have at least one keyboard listener
    'jsx-a11y/no-noninteractive-element-interactions': 'warn', // Non-interactive elements should not be assigned mouse or keyboard event listeners
    'react/no-array-index-key': 'warn', // Do not use Array index in keys
    // Some extra rules from mentor
    'no-unused-vars': 'error', // TODO - need add comment
    'no-use-before-define': 'error', // TODO - need add comment
    '@typescript-eslint/no-use-before-define': ['error'], // TODO - need add comment
    semi: 'warn', // TODO - need add comment
    camelcase: 'error', // TODO - need add comment
    'import/order': 'error', // TODO - need add comment
    'import/prefer-default-export': 'error', // TODO - need add comment
    'array-bracket-spacing': 'error', // TODO - need add comment
    quotes: ['warn', 'single'], // TODO - need add comment
    'object-curly-spacing': 'warn', // TODO - need add comment
    '@typescript-eslint/explicit-function-return-type': 'warn', // TODO - need add comment
    '@typescript-eslint/explicit-module-boundary-types': 'warn', // TODO - need add comment
    '@typescript-eslint/ban-ts-comment': 'error', // TODO - need add comment
    '@typescript-eslint/no-var-requires': 'error', // TODO - need add comment
    'array-callback-return': 'error', // TODO - need add comment
    'react/jsx-props-no-spreading': 'error', // TODO - need add comment
    'no-unused-expressions': 'error', // TODO - need add comment
    'import/no-extraneous-dependencies': 'error', // TODO - need add comment
    'global-require': 'error', // TODO - need add comment
  },
  overrides: [
    // fix 'JSX' is not defined  no-undef
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'warn',
      },
    },
  ],
};
