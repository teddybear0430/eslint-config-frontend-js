// Base rule: airbnb
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb"],
  rules: {
    // コンソールの使用を禁止: console.warnとconsole.errorの使用は許可する
    "no-console": ["error", { allow: ["warn", "error"] }],
    // 拡張子を設定しなくてもimportできるようにする
    "import/extensions": "off",
    // default exportを許可
    "import/prefer-default-export": "off",
    // アロー関数のブラケットの省略を許可
    "arrow-body-style": "off",
    // アロー関数の非ブロックの本体を改行するかしないかの設定
    "implicit-arrow-linebreak": "off",
    // オブジェクトの改行に関する設定
    "object-curly-newline": ["error", { "consistent": true }]
  }
}
