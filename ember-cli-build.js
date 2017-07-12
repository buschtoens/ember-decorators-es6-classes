/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    babel: {
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties'
      ]
    }
  });

  return app.toTree();
};
