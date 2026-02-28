import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["*", "!src", "src/__tests__"]), {
    extends: compat.extends("prettier"),

    plugins: {
        "@typescript-eslint": typescriptEslintEslintPlugin,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-use-before-define": "off",
    },
}, {
    files: ["./src/configs.ts", "./src/utils/Jagex.ts", "./src/lib/RuneScape.ts"],

    rules: {
        "@typescript-eslint/camelcase": "off",
    },
}]);