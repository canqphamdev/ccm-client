module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        ecmaFeatures: {
            "jsx": true
        }
    },
    "rules": {
        "no-console": ['off'],
        "no-unused-vars": ['off']
    },
    "parser": "babel-eslint",
    "root": true,
};