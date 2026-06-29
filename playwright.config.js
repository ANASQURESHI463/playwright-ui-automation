const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries: 0,

  workers: 1,

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'https://automationintesting.online',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    actionTimeout: 10000,
    navigationTimeout: 20000
  }
});