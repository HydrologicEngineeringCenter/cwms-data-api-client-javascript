// Graham - 04/2024
// This file initializes all other tests and collects them

import chalk from 'chalk';
import {
    AuthorizationApi,
    BasinsApi,
    BlobApi,
    CatalogApi,
    ClobApi,
    CountiesApi,
    DefaultApi,
    LevelsApi,
    LocationCategoriesApi,
    LocationGroupsApi,
    LocationsApi,
    OfficesApi,
    ParametersApi,
    PoolsApi,
    RatingsApi,
    StatesApi,
    TimeSeriesApi,
    TimeSeriesCategoriesApi,
    TimeSeriesIdentifierApi,
    TimeZonesApi,
    TimeseriesGroupsApi,
    UnitsApi,
} from "cwmsjs";
// Install fetch for use with testing in the library (fetch is native on browsers)
import fetch from 'node-fetch';
global.fetch = fetch;

let error_count = 0

console.log("====================================");
console.log("Starting tests...");
console.log("====================================");

import "./endpoints/catalog.js";
// Import will call the test
import "./endpoints/timeseries.js";

// You can also compose styles
// console.log(chalk.blue.bgYellow.bold('INFO: ') + 'This is an informational message.');

// Use template literals for cleaner code
// console.log(`${chalk.green('PASS:')} This test case passed!`);
// console.log(`${chalk.red('FAIL:')} This test case failed.`);

