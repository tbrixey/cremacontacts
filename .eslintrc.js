module.exports = {
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true,
        "mocha":   true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
      "strict":             [ 2, "safe" ],
        "no-debugger":        2,
        "brace-style": [
            2,
            "1tbs",
            { "allowSingleLine": true }
        ],
        "no-trailing-spaces": 2,
        "keyword-spacing":    2,
        "space-before-function-paren": [
            2,
            "never"
        ],
        "spaced-comment":     [2, "always" ],
        "no-undef":           2,
        "no-undefined":       2,
        "comma-dangle":       [ 2, "always-multiline" ],
        "quotes":             [ 2, "single" ],
        "semi":               [ 2, "always" ],
        "guard-for-in":       2,
        "no-eval":            2,
        "no-with":            2,
        "valid-typeof":       2,
        "no-unused-vars":     2,
        "no-continue":        1,
        "no-extra-semi":      1,
        "no-unreachable":     1,
        "no-unused-expressions": 1,
        "max-len":            [1, 140, 4],
        "react/prefer-es6-class": 1,
        "react/prefer-stateless-function": 1,
        "no-console": ["error", { allow: ["warn", "error", "log"] }],
    }
};
