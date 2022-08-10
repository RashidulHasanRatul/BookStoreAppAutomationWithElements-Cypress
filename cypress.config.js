const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // `on` is used to hook into various events Cypress emits
      on("task", {
        parseXlsx( filePath ) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    baseUrl: "https://demoqa.com",
    watchForFileChanges: false,
    chromeWebSecurity: false,
  },
});
