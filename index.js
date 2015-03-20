var path = require('path');

module.exports = function (root) {
  root = root || process.cwd();
  if (!path.isAbsolute(root)) {
    root = path.join(__dirname, root);
  }

  return function (file) {
    return require(path.join(root, file));
  };
};