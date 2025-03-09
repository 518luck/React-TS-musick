import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier' // 引入 prettier 插件
import prettierConfig from 'eslint-config-prettier' // 引入 prettier 配置
import { off } from 'process'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: prettier // 插件应以对象形式出现
    },
    rules: {
      'prettier/prettier': ['error'], // 开启 prettier 检查
      // '@typescript-eslint/no-explicit-any': off
    }
  },
  prettierConfig // 直接包含 prettier 配置
]
