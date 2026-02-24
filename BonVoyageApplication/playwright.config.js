// @ts-check
import { defineConfig, devices } from "@playwright/test";
import "./src/config/env/env-loader";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// @ts-ignore
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 30_000,
  globalTimeout: 10 * 60 * 1000,
  testDir: "./tests",

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers: 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.APP_BASE_URL,

    // 1. Tell Playwright NOT to force a specific width/height
    // viewport: null,

    // // 2. Additional browser launch options
    // launchOptions: {
    //   // Required for Chromium (Chrome/Edge) to start maximized
    //   args: ["--start-maximized"],
    // },

    viewport: { width: 1920, height: 1080 },
    launchOptions: {
      // This tells the actual browser window to start maximized
      args: ["--start-maximized"],
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
    actionTimeout: 15000, // Individual actions shouldn't take 30s
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "API_Tests",
      use: { baseURL: process.env.API_BASE_URL },
      testMatch: /tests\/api\/.*\.spec\.js/,
    },
    {
      name: "UI_Tests",
      use: {
        ...devices["Desktop Chrome"],
        permissions: ["clipboard-read", "geolocation"],
        baseURL: process.env.APP_BASE_URL,
      },
      // Add this to prevent UI projects from running API tests
      testIgnore: /tests\/api\/.*\.spec\.js/,
    },
    {
      name: "setup",
      testMatch: /.*\.setup\.js/,
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
