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
        // указывает, какие параметры языка JS вы хотите поддерживать
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
        "react-hooks/exhaustive-deps": "warn", // Проверяем зависимости эффекта
        "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
        "react/display-name": "off",
        "react/prop-types": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
            // проверка на ReferenceError
            "error",
            { functions: false },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error", // Проверяем неиспользуемые переменные
        "class-methods-use-this": 0,
        "@typescript-eslint/no-shadow": "error", // Проверяем теневое копирование
        "@typescript-eslint/ban-ts-comment": "off", // Разрешаем TS комментарии
        "@typescript-eslint/naming-convention": [
            // Нейминг
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
            // Применяем анотации
            "error",
            {
                arrowParameter: false, // Для стрелочных функций убираем
                variableDeclaration: false, // Для переменных убираем
            },
        ],
        "@typescript-eslint/dot-notation": 1, // Заприщаем foo["bar"]
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "comma-dangle": ["error", "only-multiline"], // Запятые в конце
        "eol-last": ["error", "always"], // Новая строка в конце
        "brace-style": "error", // стиль скобок для блоков
        "block-spacing": "error", // Интервал внутри токена закрытого блока и предыдущего токена в той же строке
        "import/no-named-as-default": 0, // // експорт по умолчаниию
        "jsx-a11y/anchor-is-valid": ["error", { components: ["a"] }], // Настройка ссылки
        "no-underscore-dangle": ["error", { allow: ["__typename"] }], // Запет на __foo
        "no-param-reassign": 0,
        "no-return-await": 0,
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-plusplus": 0,
        "no-shadow": 0,
        "jsx-a11y/no-static-element-interactions": [
            // Требованиие указывания rule
            "warn",
            {
                handlers: ["onClick", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"],
            },
        ],
        "arrow-parens": ["error", "as-needed"], // скобки для аргументов
        "jsx-a11y/label-has-associated-control": [
            2,
            {
                labelAttributes: ["label"],
                controlComponents: ["Field"],
                depth: 3,
            },
        ],
        "padding-line-between-statements": [
            // Пустые строки
            "error",
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
        ],
        "newline-before-return": ["error"], // Пустая строка перед return
        "import/order": [
            // Порядок импорта
            "error",
            {
                "newlines-between": "always",
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
            },
        ],
        "import/extensions": [
            // Не использовать форматы в импорте
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
