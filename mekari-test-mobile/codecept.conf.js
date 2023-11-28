const { setHeadlessWhen } = require('@codeceptjs/configure');
const { devices } = require('playwright');
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      // browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true,
      restart: 'keep',
      emulate: devices['iPhone 6']
    }
  },
  multiple:{
    basic:{
      browser:['chromium','firefox','webkit']
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js",
    checkoutPage: "./pages/checkout.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    allure:{
      enabled: true,
      outputDir:"allure-results"
    },
    coverage: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'mekari-test-web'
}