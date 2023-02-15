module.exports = {
  '*.md': ['prettier --write --parser markdown'],
  '*.yaml': ['prettier --write --parser yaml'],
  '*.json': ['prettier --write --parser json'],
  '*.{js,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '*.css': ['stylelint'],
};
