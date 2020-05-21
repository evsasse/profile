module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  env: {
    node: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // temporarily warning only, until converting stuff to TS
    "react/prop-types": "warn",
    // temporarily warning only, eslint should support noopener as enough
    "react/jsx-no-target-blank": "warn",
    // allow usage of `"` and `'` outside JSX
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
  },
};
