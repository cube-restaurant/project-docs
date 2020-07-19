---
title: 'CSS/SCSS'
---
<br><br>

# Coding Guidelines - CSS/SCSS

Project follows specific coding guidelines for writing SCSS / CSS code of the project. We are using [StyleLint](https://stylelint.io/). Webpack starter kit has `.stylelintrc` file for rules of StyleLint. This page also list those rules. They will not throw error in development command, but it will while making production version of the project. So just try to solve these problems before making commits and before making production version.

<br>

::: tip Note

To get warning about these rules inside **VS-Code**, use [stylelint](https://marketplace.visualstudio.com/items?itemName=Daosro.stylelint) extension.
:::

<br>


```json
{
  "rules": {
    "at-rule-empty-line-before": [ "always", {
      except: ["after-same-name",
        "inside-block",
        "blockless-after-same-name-blockless",
        "blockless-after-blockless",
        "first-nested"
      ]
    }],
    "at-rule-name-case": "lower",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "comment-empty-line-before": "always",
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "color-no-invalid-hex": true,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-parentheses-space-inside": "never",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "indentation": 2,
    "length-zero-no-unit": true,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "never",
    "media-query-list-comma-newline-after": "always",
    "media-query-list-comma-newline-before": "never-multi-line",
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-unknown-animations": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "rule-empty-line-before": [ "always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    } ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "always",
    "selector-pseudo-element-no-unknown": true,
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "string-quotes": "single",
    "unit-case": "lower",
    "unit-no-unknown": true,
    "unit-whitelist": ["em", "rem", "%", "s", "px", "vw", "vh"],
    "value-keyword-case": "lower",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never"
  }
}
```