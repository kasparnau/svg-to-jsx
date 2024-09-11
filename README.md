# SVG to JSX converter

Lightweight CLI utility tool for converting Adobe Illustrator's .svg export files into formatted React .jsx components.

⚡ Motivation: I rather spend an hour building a tool than spend 3 minutes per SVG file doing it manually.

> [!WARNING]  
> This is intended for use with Adobe Illustrator's raw svg exports.

## Usage

```
    s2j convert [options] <input>

    Arguments:
        input         path to input .svg file

    Options:
        -o, --output <path>  export to output path
        -c, --copy           copy to clipboard instead of output
        -h, --help           display help for command
```

## Example Usage
Input: SVG export from Adobe Illustrator
Output: Formatted React component

<p align="center">
  <img src="./img/image.png" alt="Statoscope example" width="100%">
</p>

## How It Works

- Deconstruct the raw SVG file into individual objects using RegEx
- Build a React component out of the deconstructed SVG objects
- Format the new React component using Prettier
- ✨ Your SVG is ready to be used within your React app
