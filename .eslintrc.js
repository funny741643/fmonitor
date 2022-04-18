module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    rules: {
        /**
         * MemberExpression 多行属性链的缩进级别
         * SwitchCase switch-case语句缩进级别
         */
        indent: ['error', 4, { MemberExpression: 0, SwitchCase: 1 }],
        // allowTemplateLiterals 允许模板字符串
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        // 语句后不允许加分号
        semi: ['error', 'never'],
        eqeqeq: 'off',
        radix: 'off',
        // 允许new
        'no-new': 'off',
        // 允许console对象
        'no-console': 'off',
        // 对未使用的变量进行警告
        'no-unused-vars': 'warn',
        'no-param-reassign': 'off',
        'no-use-before-define': 'off',
        'no-continue': 'off',
        'no-plusplus': 'off',
        'no-prototype-builtins': 'off',
        'no-trailing-spaces': 'off',
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off',
        'no-bitwise': 'off',
        'no-path-concat': 'off',
        'no-restricted-syntax': 'off',
        'no-shadow': 'off',

        'func-names': 'off',
        'default-case': 'off',
        // consistem 数组元素之间保持一致的换行符
        'array-element-newline': ['error', 'consistent'],
        // 每行最大字符数
        'max-len': ['error', 120],
        // 尾随逗号，多行允许，单行不允许
        'comma-dangle': ['error', 'always-multiline'],
        // 需要对象大括号内空格
        'object-curly-spacing': ['error', 'always'],
        'object-curly-newline': 'off',
        // 强制统一的行结尾
        'linebreak-style': 'off',
        // 强制文件以单一的换行符结束
        'eol-last': ['error', 'always'],
        // 当只有一个参数时允许省略箭头函数的小括号
        'arrow-parens': ['error', 'as-needed'],
        'one-var-declaration-per-line': 'off',
        'one-var': 'off',
        'prefer-destructuring': 'off',
        'prefer-template': 'off',
        'prefer-const': 'off',
        'consistent-return': 'off',
        'class-methods-use-this': 'off',

        'global-require': 'off',
        'import/named': 'off',
        'import/order': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-unresolved': 'off',
        'import/no-self-import': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-useless-path-segments': 'off',
        'import/newline-after-import': 'off',
    },
}
