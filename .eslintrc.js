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
};
