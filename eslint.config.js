import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
    globalIgnores(['dist']),

    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            prettier,
        ],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        ['^\\u0000'],

                        ['^node:'],

                        ['^@?\\w'],

                        ['^@/'],

                        ['^'],

                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

                        ['^\\u0000.*\\.(?:css|scss|sass|less)$'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'warn',
        },
    },
]);
