module.exports = {
    root: true,
    extends: ["custom"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json", "./tsconfig.eslint.json"],
    },
};
// './tsconfig.eslint.json', 