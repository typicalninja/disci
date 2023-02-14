module.exports = {
    root: true,
    extends: [
        "turbo", 
        "prettier",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./packages/*/tsconfig.json'],
        parser: "@typescript-eslint/parser"
    },
    rules: {
       "turbo/no-undeclared-env-vars": "off"
    },
};