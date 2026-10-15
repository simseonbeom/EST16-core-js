import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

const customGlobals = {
  // lib/dom/type.js
  typeOf: 'readonly',
  isObject: 'readonly',
  isArray: 'readonly',
  isBoolean: 'readonly',
  isNull: 'readonly',
  isUndefined: 'readonly',
  isFunction: 'readonly',
  isSymbol: 'readonly',
  isString: 'readonly',
  isNumber: 'readonly',
  isMath: 'readonly',
  isBigInt: 'readonly',
  isNumericString: 'readonly',
  // lib/dom/getNode.js
  getNode: 'readonly',
  getNodes: 'readonly',
  // lib/dom/attr.js
  getAttr: 'readonly',
  setAttr: 'readonly',
  attr: 'readonly',
  // lib/dom/css.js
  normalizeClass: 'readonly',
  addClass: 'readonly',
  removeClass: 'readonly',
  toggleClass: 'readonly',
  // lib/dom/insert.js
  insertBefore: 'readonly',
  insertFirst: 'readonly',
  insertLast: 'readonly',
  insertAfter: 'readonly',
  // lib/dom/bindEvent.js
  bindEvent: 'readonly',
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
