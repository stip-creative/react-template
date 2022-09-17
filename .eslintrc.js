module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "prettier",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: ["react-hooks", "@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
        "react/display-name": "off",
        "react/prop-types": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "class-methods-use-this": 0,
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: true,
                },
            },
        ],
        "@typescript-eslint/typedef": [
            "error",
            {
                arrowParameter: false,
                variableDeclaration: false,
            },
        ],
        "@typescript-eslint/dot-notation": 1,
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "comma-dangle": ["error", "only-multiline"],
        "eol-last": ["error", "always"],
        "brace-style": "error",
        "block-spacing": "error",
        "import/no-named-as-default": 0,
        "jsx-a11y/anchor-is-valid": ["error", { components: ["a"] }],
        "no-underscore-dangle": ["error", { allow: ["__typename"] }],
        "no-param-reassign": 0,
        "no-return-await": 0,
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-plusplus": 0,
        "no-shadow": 0,
        "jsx-a11y/no-static-element-interactions": [
            "warn",
            {
                handlers: ["onClick", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"],
            },
        ],
        "arrow-parens": ["error", "as-needed"],
        "jsx-a11y/label-has-associated-control": [
            2,
            {
                labelAttributes: ["label"],
                controlComponents: ["Field"],
                depth: 3,
            },
        ],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
        ],
        "newline-before-return": ["error"],
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
            },
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "no-debugger": "warn",
        "import/no-cycle": 0,
    },
};
