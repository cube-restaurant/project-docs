---
title: 'HTML'
---
<br><br>

# Coding Guidelines - HTML

Project follows specific coding guidelines for writing HTML code of the project. We are using [HTMLHint](https://github.com/htmlhint/HTMLHint). Webpack starter kit has `.htmlhintrc` file for rules of HTMLHint. This page also list those rules. They will not throw error in development command, but it will while making production version of the project. So just try to solve these problems before making commits and before making production version.

<br>

::: tip Note
To get warning about these rules inside **VS-Code**, use [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) extension. Do not change the order of the rules. It is not working if it is in not this order. Yeah it's wired 😑!
:::

<br>

```json
{
  "tagname-lowercase": true,
  "attr-lowercase": [
    "viewBox"
  ],
  "attr-value-double-quotes": true,
  "attr-value-not-empty": true,
  "attr-no-duplication": true,
  "doctype-first": true,
  "tag-pair": true,
  "empty-tag-not-self-closed": true,
  "spec-char-escape": false,
  "id-unique": true,
  "src-not-empty": true,
  "title-require": true,
  "alt-require": true,
  "doctype-html5": true,
  "style-disabled": false,
  "inline-style-disabled": true,
  "inline-script-disabled": true,
  "space-tab-mixed-disabled": "space",
  "id-class-ad-disabled": true,
  "href-abs-or-rel": false,
  "attr-unsafe-chars": true,
  "head-script-disabled": true
}
```