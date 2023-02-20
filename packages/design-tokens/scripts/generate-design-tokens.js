const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const prettier = require('prettier');
const rcfile = require('rcfile');

const prettierConfig = rcfile('prettier');

const definitions = yaml.parse(fs.readFileSync(path.join(__dirname, '../src/definition.yaml'), 'utf8'));

const endProgram = (message) => {
  console.error(`Building tokens Error: ${message}`);
  process.exit(1);
};

const designTokens = {};

Object.keys(definitions.tokens).forEach((themeName) => {
  if (!designTokens[themeName]) {
    designTokens[themeName] = {};
  }

  Object.values(definitions.tokens[themeName]).forEach((themeChoiceGroup) => {
    Object.entries(themeChoiceGroup.choices).forEach(([key, value]) => {
      if (designTokens[themeName][key]) endProgram(`Token "${key} already exists!"`);

      if (key !== key.toLowerCase()) endProgram(`Tokens "${key}" must be lower case`);

      if (!key.startsWith(themeChoiceGroup.prefix))
        endProgram(
          `Expected token "${key}" to start with "${themeChoiceGroup.prefix}" as it is an "${themeChoiceGroup.label}" attribute.`,
        );
      designTokens[themeName][key] = value;
    });
  });
});

const printCss = (data) => `
:root {
  ${Object.entries(data.default)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n')}
}`;

fs.writeFileSync(
  path.join(__dirname, '../dist/custom-properties.css'),
  prettier.format(printCss(designTokens), {
    ...prettierConfig,
    parser: 'css',
  }),
);

console.log('\nDesign tokens built!\n');
