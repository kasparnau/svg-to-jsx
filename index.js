import fs from "fs";

// 9/6/2023 COPYRIGHT @ KASPAR

const RegEx = {
  MATCH_STYLE: /st[0-9]{(.*?)\}/g,
  BETWEEN_BRACKETS: /\{(.*?)\}/,
  SELECT_BRACKETS: /{|;}/g,
  MATCH_FULL_STYLE: /.st[0-9]\{(.*?)\}/g,
  MATCH_STYLE_TAG: /<style type="text\/css">|<\/style>/g,
  REMAINING_STYLE: /style="(.*?)"/g,
};

const ReplacePropNamesList = [
  ["xmlns:xlink", "xmlnsXlink"],
  ["xml:space", "xmlSpace"],
];

const constructFinal = (data) => {
  // add className to beginning of svg
  data = data.replace("<svg", "<svg className={className}");

  // encapsulate the svg in a JSX component
  return `export default ({ className }) => {return (
  ${data})}`;
};

const convertSvgToJsx = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // GET RID OF THE THE AUTO-GENERATED ILLUSTRATOR COMMENT
    data = data.split(")  -->")[1];

    // GRAB ALL STYLES FROM <style> ELEMENT
    const stylesRaw = data.match(RegEx.MATCH_STYLE);

    // SEPARATE CLASS NAME FROM STYLING
    const styles = stylesRaw.map((styleStr) => {
      // SELECT STYLE BY REGEXING ANYTHING THAT'S BETWEEN BRACKETS
      let style = styleStr.match(RegEx.BETWEEN_BRACKETS)[0];
      // REMOVE BRACKETS TO GET LIST OF STYLES SEPARATED BY SEMICOLON
      style = style.replace(RegEx.SELECT_BRACKETS, "");
      // TURN STYLE STRING INTO OBJECT
      style = style.split(";");

      return {
        name: styleStr.split("{")[0],
        style,
      };
    });

    // GET RID OF THE <style> ELEMENT NOW THAT WE PARSED THEM INTO AN ARRAY
    data = data.replace(RegEx.MATCH_FULL_STYLE, "");
    data = data.replace(RegEx.MATCH_STYLE_TAG, "");

    // REMOVE ALL EMPTY LINES BECAUSE THE FORMATTING IS ALREADY GONE ANYWAYS
    // stackoverflow.com/a/31413269
    data = data.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");

    // REPLACE ALL CLASSES WITH JSX SUPPORTED STYLE PROP
    // IF YOU WANNA DEBUG THIS HAVE FUN, JUST KNOW IT SPITS OUT THIS: style={{opacity: 0.08, fill: "#E4ECF8"}}
    styles.map((style) => {
      let newStyles = style.style.map((s) => {
        let formattedStyle = s.split(":");
        // CONVERT TO ARRAY
        if (isNaN(formattedStyle[1])) {
          formattedStyle[1] = `"${formattedStyle[1].toString()}"`;
        } else {
          formattedStyle[1] = Number(formattedStyle[1]);
        }
        return formattedStyle;
      });

      let formattedStyleString = "style={{";
      newStyles.map((s, i) => {
        if (i > 0) formattedStyleString += ", ";
        formattedStyleString += `${s[0]}: ${s[1]}`;
      });
      formattedStyleString += "}}";

      data = data.replaceAll(`class="${style.name}"`, formattedStyleString);
    });

    for (let i = 0; i < ReplacePropNamesList.length; i++) {
      let str = ReplacePropNamesList[i];
      data = data.replaceAll(str[0], str[1]);
    }

    data = data.replaceAll(RegEx.REMAINING_STYLE, "");

    console.log(constructFinal(data));
  });
};

convertSvgToJsx("./test/sample.svg");
