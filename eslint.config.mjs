import globals from "globals";
import pluginJs from "@eslint/js";
import pluginTs from "@typescript-eslint/eslint-plugin"; // TypeScriptプラグインのインポート
import tsParser from "@typescript-eslint/parser"; // TypeScriptパーサーのインポート

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  // TypeScriptファイル用の設定
  {
    files: ["*.ts", "*.tsx"], // TypeScriptファイルを指定
    languageOptions: {
      parser: tsParser, // TypeScript用のパーサーを指定
      ecmaVersion: 2020, // ECMAScriptのバージョンを指定
      sourceType: "module", // モジュールタイプを指定
      ecmaFeatures: {
        jsx: true, // JSXのサポートを有効にする
      },
    },
    plugins: [pluginTs], // TypeScriptプラグインを使用
    extends: [
      pluginTs.configs.recommended, // TypeScript推奨設定を適用
    ],
    rules: {
      // TypeScript固有のルール設定
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
