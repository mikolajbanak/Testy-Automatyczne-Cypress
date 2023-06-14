const { defineConfig } = require('cypress')

module.exports = defineConfig({
  includeShadowDom: true,
  chromeWebSecurity: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  experimentalWebKitSupport: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  projectId: 'i1wjgd',
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://automationpractice.pl',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
