import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
   js.configs.recommended,
   tseslint.configs.strictTypeChecked,
   tseslint.configs.stylisticTypeChecked,
   {
      languageOptions: {
         parserOptions: {
            projectService: true,
         },
      },
   },
   {
      rules: {
         '@typescript-eslint/strict-boolean-expressions': 'error',
         'eqeqeq': 'error',
         'indent': ['error', 3],
         'linebreak-style': ['error', 'unix'],
         'quotes': ['error', 'single'],
         'semi': ['error', 'always']
      }
   },
   {
      files: ['**/*', '!src/**/*'],
      ...tseslint.configs.disableTypeChecked,
   }
);
