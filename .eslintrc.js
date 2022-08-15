module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recomended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
  },
  "settings": {
    "import/resolver": {
        "typescript": {
            "alwaysTryTypes": true,
            "project": "./tsconfig.json"
        }
    }
}
};
