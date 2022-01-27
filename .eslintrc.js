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
    "plugin:import/typescript",
    "prettier",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project:'./tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "import",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off", // fix problems 'React' must be in scope when using JSX
    "import/extensions": [             // fix problems Missing file extension "tsx"
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      },
    ],
    "react/jsx-filename-extension": [   // fix JSX not allowed in files with extension '.tsx'
      "warn", {"extensions": [".tsx"]} 
    ],
    "react/destructuring-assignment": 0, //fix error  Must use destructuring props assignment
    "class-methods-use-this": "warn",    // Expected 'this' to be used by class method 'renderBlock' 
    "jsx-a11y/click-events-have-key-events": "warn", // Visible, non-interactive elements with click handlers must have at least one keyboard listener
    "jsx-a11y/no-noninteractive-element-interactions": "warn", // Non-interactive elements should not be assigned mouse or keyboard event listeners
    "react/no-array-index-key": "warn", // Do not use Array index in keys 
  },
  overrides: [                           // fix 'JSX' is not defined  no-undef
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
