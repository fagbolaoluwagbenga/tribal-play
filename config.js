// Configuration Enviroments
const dotenv = require('dotenv');
dotenv.config();
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_ID
} = process.env;


const environments = {};

environments.development = {
  port: 3000,
  databaseName: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_ID}`,
  envName: 'Development environments',
};


environments.production = {
  port: 8080,
  databaseName:
    "mongodb+srv://holard:pDBteIhQz13wJlaH@tribalplay-hukv6.gcp.mongodb.net/test?retryWrites=true&w=majority",
  envName: 'Production enviroment',
};


const currentEnvironments =
  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : '';
const environmentsToExport =
  typeof environments[currentEnvironments] === 'object'
    ? environments[currentEnvironments]
    : environments.production;

// Export Module
module.exports = environmentsToExport;