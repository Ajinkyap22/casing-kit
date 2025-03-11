import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["src/**/*.ts"],
  extends: [tseslint.configs.recommended],
  languageOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
  },
  ignores: ["dist/**", "node_modules/**"],
});
