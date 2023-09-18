

/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3m1mwk',
  pageLoadTimeout: 60000, // Aumenta el tiempo de carga de página a 120 segundos (2 minutos)
  
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false
  },
});



/*const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
 
async function setupNodeEvents(on, config) {
  // Esto es necesario para que el preprocesador pueda generar informes JSON después de cada ejecución y más,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
 
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);
 
  return config;
}*/
 
/*module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout: 70000,
  },
});*/


/*const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
//const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  //allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
});*/