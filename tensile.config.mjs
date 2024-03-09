const config = {
  // Tree size to test.
  size: 'l',

  // Test to run
  test: 'mount',

  // Browsers to test against
  browsers: ['chrome'],

  // Number of test runs
  numRuns: 100,

  extends: "./tensile.base.mjs",

  // Stylesheets to load before running the test.
  cssSheets: ['./dist/style.css'],

};

// module.exports = config;
export default config;