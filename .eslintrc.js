module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [
          1, {
            "extensions": [".js", ".jsx"]
          }
        ],
        "react/prefer-stateless-function": [
          0, { "ignorePureComponents": true}
        ],
        "no-console": [
          "error", { allow: ["log", "warn", "error"] }
        ],
        "react/no-array-index-key": [
          0
        ],
        "import/prefer-default-export": [
          0
        ],
        "no-constant-condition": [
          0
        ]
    }
};
