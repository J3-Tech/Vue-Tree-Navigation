const shell = require('shelljs');

const tests = ['with-router', 'without-router'];

const runTest = test => {
  shell.cp(`./dist/vue-tree-navigation.js`, `./e2e/apps/${test}`);

  shell.exec(
    `concurrently --kill-others "http-server -p 8000 ./e2e/apps/${test}" "cypress run --spec ./e2e/specs/${test}.spec.js"`
  );
};

shell.exec('yarn build');
tests.forEach(test => runTest(test));
