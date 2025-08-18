// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jest from 'eslint-plugin-jest'

export default [
  // Base JavaScript rules
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser
    },
    rules: {
      ...js.configs.recommended.rules,
      indent: ["error", 2], // ⬅️ 2 spaces

    }
  },
 jest.configs['flat/style'],

  // TypeScript rules
  ...tseslint.configs.recommended,

  // React rules
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: { version: "detect" }
    }
  }
];
