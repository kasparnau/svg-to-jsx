<h1 align="center">
  SVG to JSX converter
</h1>

<p align="center">
  <img alt="" src="https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge&labelColor=000"/>
  <img alt="" src="https://img.shields.io/github/languages/top/kasparnau/svg-to-jsx?style=for-the-badge&labelColor=000">
  <img alt="" src="https://img.shields.io/github/license/kasparnau/svg-to-jsx?style=for-the-badge&labelColor=000">
</p>

⚡Lightweight CLI utility tool for converting Adobe Illustrator's .svg export files into formatted React .jsx components.

Motivation: I rather spend an hour building a tool than spend 3 minutes per SVG file doing it manually.

> [!IMPORTANT]
> This project only supports Adobe Illustrator's svg exports.

## Usage

```
  Usage: svg-to-jsx [options] [command]
  
  ┌────── svg-to-jsx ──────┐
  │ Convert .svg --> .jsx  │
  └────────────────────────┘
  
  Options:
    -V, --version              output the version number
    -h, --help                 display help for command
  
  Commands:
    convert [options] <input>  Convert Illustrator .svg to React component
    help [command]             display help for command
```

## ✨ Features

-   ⚡️ Command line interface - Commander
-   🍿 Colored UI - Chalk
-   ✨ Unit testing - Vitest
-   💾 Save to Clipboard or File

## How It Works

1. Deconstruct the raw SVG file into individual objects using RegEx
2. Build a React component out of the deconstructed SVG objects
3. Format the new React component using Prettier
4. ✨ Your SVG is ready to be used within your React app
   
## ✍🏻 Author

Made with ❤️ by Kaspar
