import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "dist/**",
    "public/**",
  ]),
  {
    files: ["./**/*.{ts,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      semi: ["error", "always"],
    },
  },
]);
