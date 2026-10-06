import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

const customGlobals = {
  typeOf: 'readonly',
  isObject: 'readonly',
  isArray: 'readonly',
  isBoolean: 'readonly',
  isString: 'readonly',
  isNumber: 'readonly',
  isBigInt: 'readonly',
  isNull: 'readonly',
  isUndefined: 'readonly',
  isFunction: 'readonly',
  isMath: 'readonly',
};

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...customGlobals,
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-unassigned-vars': 'off',
    },
  },
]);
