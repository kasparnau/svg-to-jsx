# SVG to JSX converter

Simple & lightweight CLI utility tool for converting Adobe Illustrator's .svg export files into fully formatted React .jsx files.

⚡ Save up to 3 minutes of repetitive work per .svg file.


> [!WARNING]  
> This is only intended to be used with Adobe Illustrator's svg exports.
> There are no guarantees for it to work on any random .svg 

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

This tool is also available in my website: http://kasparnau.com/blog/svg-to-jsx

## Example
left: input.svg, right: export.jsx
<p align="center">
  <img src="./img/image.png" alt="Statoscope example" width="100%">
</p>

## How It Works

SVG to JSX converter works by RegEx:ing all the styles from the svg's <style> tag, splitting them into individual properties, and then reconstructing the styling into inline props.

Once the hard part is done, it creates a React component function with a className prop and formats it using Prettier.

Now your .jsx icon is ready for you to slap into your codebase. 

# To-Do:

* TypeScript support
* Mass converting
* Utilize SVGO for optimization  
