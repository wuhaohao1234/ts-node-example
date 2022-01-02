module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": 1,
        "comma-spacing": 1,
        "semi": 1
    }
};
