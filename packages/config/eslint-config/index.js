// eslint.config.js
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'
import boundaries from 'eslint-plugin-boundaries'
import vueParser from 'vue-eslint-parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      import: importPlugin,
      boundaries,
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      }],
      'import/no-unresolved': 'error',
      'boundaries/element-types': [2, {
        default: 'disallow',
        rules: [
          { from: ['components'], allow: ['utils', 'types'] },
          { from: ['pages'], allow: ['components'] },
        ],
      }],
      'boundaries/no-private': 'error',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsParser,
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      }],
      'import/no-unresolved': 'error',
    },
  },
  {
    settings: {
      'boundaries/elements': [
        { type: 'components', pattern: 'packages/ui/components/*' },
        { type: 'utils', pattern: 'packages/shared/utils/*' },
        { type: 'types', pattern: 'packages/shared/types/*' },
        { type: 'pages', pattern: 'apps/web/pages/*' },
      ],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        },
      },
    },
  },
]
