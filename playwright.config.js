// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter : 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { headless : false, screenshot : 'on', trace : 'on', ...devices['Desktop Chrome'] },
    },
    /* {
      name: 'firefox',
      use: { headless : false, screenshot : 'on', trace : 'on',...devices['Desktop Firefox'] },
    }, */
   /* {
      name: 'webkit',
      use: { headless : false, screenshot : 'on', trace : 'on',...devices['Desktop Safari'] },
    }, */
  ],
};

module.exports = config;