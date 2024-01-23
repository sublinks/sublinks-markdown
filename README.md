<div align="center">
  
![GitHub tag (latest SemVer)](https://img.shields.io/github/release/sublinks/sublinks-markdown.svg?style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues-raw/sublinks/sublinks-markdown.svg?style=for-the-badge)](https://github.com/sublinks/sublinks-markdown/issues)
[![License](https://img.shields.io/github/license/sublinks/sublinks-markdown.svg?style=for-the-badge)](LICENSE)
![GitHub stars](https://img.shields.io/github/stars/sublinks/sublinks-markdown.svg?style=for-the-badge)

</div>
<div align="center">
  <img src="https://avatars.githubusercontent.com/u/153321235?s=200&v=4" width=200px height=200px></img>
  <h3 align="center"><a href="">Sublinks Markdown</a></h3>
  <p align="center">
    A markdown parser with rules for frontends of sublinks. Used to easily add markdown support compatible with the standard sublink frontend.
  </p>
</div>

## About

Sublinks markdown is a package that can be imported into your frontend and then used to add markdown support through one function call. All of the markdown rules used in the standard sublinks frontend are supported meaning your users will see the same things as users using the standard frontend without you needing to implement every single rule yourself.

## Install

This package is ESM only. To install with npm use:

```
npm i sublinks-markdown
```

## Features
- Headings (h1, h2, h3, h4, h5, h6)
- Bold
- Italic
- Strikethrough
- Relative user links (@user@example.com or https://example.com/u/user turns into a link relative to the user's instance. https://example.org/u/user@example.com)
- Relative community links (same as user but with !community@example.com and https://example.com/c/community)
- Links
- Image embedding
- Blockquote
- Unordered list
- Ordered list
- Horizontal rule
- Code blocks
and more coming in the future
