import boxen from "boxen";
import chalk from "chalk";
import { program } from "commander";
import data from "./data.js";
import convertSvgToJsx from "./converter.js";

// Set up CLI commands with commander, chalk and boxen

const usage = boxen(data.description, {
  title: chalk.green(data.title),
  titleAlignment: "center",
  padding: 0.5,
});

program.name(data.title).description(usage).version(data.version);

program
  .command("convert")
  .description("Convert Illustrator .svg to React-compatible .jsx")
  .argument("<input>", "path to input .svg file")
  .option("-o, --output <path>", "export to output path")
  .option("-c, --copy", "copy to clipboard instead of output")
  .action(async (input, options) => {
    if (!options.output && !options.copy) {
      return program.error(
        boxen(
          `${chalk.red("Error:")} You must specify ${chalk.blue(
            "--output"
          )} for a file path or ${chalk.blue("--copy")} for clipboard"`
        )
      );
    }

    convertSvgToJsx(input, options);
  });

program.parse();
