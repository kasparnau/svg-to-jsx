// sum.test.js

import convertSvgToJsx from "../src/transform";
import fs from "fs";

const options = {
  pathToInputFile: "test/sample.svg",
  pathToOutputFile: "test/expected-output.jsx",
};

describe("SVG to JSX Conversion", () => {
  it("sample input file should exist", async () => {
    const exists = fs.existsSync(options.pathToInputFile);
    expect(exists).toBe(true);
  });

  it("sample output file should exist", async () => {
    const exists = fs.existsSync(options.pathToOutputFile);
    expect(exists).toBe(true);
  });

  it("run conversion, output should be valid ", async () => {
    // Perform the conversion
    const output = await convertSvgToJsx(options.pathToInputFile);

    // Read the expected output
    const expectedOutput = fs.readFileSync(options.pathToOutputFile, "utf8");

    // Compare the output to the expected output
    expect(output).toBe(expectedOutput);
  });
});
