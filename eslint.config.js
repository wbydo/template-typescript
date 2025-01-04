/**
 * 2024年9月 俺の eslint.config.js
 * https://zenn.dev/kazukix/articles/eslint-config-2024-09
 */

import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import eslint from '@eslint/js';

export default tseslint.config(
  {
    // このオブジェクトは ignores プロパティだけにする必要あり
    ignores: ['dist'], // ESLint のチェック対象外 (node_modules と .git はデフォルトで対象外)
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  prettierConfig,
);
