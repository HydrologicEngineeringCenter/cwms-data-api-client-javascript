# CWMSjs ![GitHub](https://img.shields.io/github/license/HydrologicEngineeringCenter/cwms-data-api-client-javascript)

 
![GitHub package.json version](https://img.shields.io/github/package-json/v/HydrologicEngineeringCenter/cwms-data-api-client-javascript)  
![GitHub all releases](https://img.shields.io/github/downloads/HydrologicEngineeringCenter/cwms-data-api-client-javascript/total)

*A fully featured JavaScript wrapper for the CWMS Data API.* ([documentation](https://github.com/HydrologicEngineeringCenter/cwms-data-api-client-javascript/wiki))


The CWMSjs is a JavaScript (TS) package for accessing the CWMS Data API (CDA), a RESTful web service for managing water data. With this SDK, you can easily retrieve and manage water data using the CDA's REST API client-side javascript applications.

## Features

Simple and intuitive API for accessing the CDA's RESTful web service
Supports all HTTP methods (GET, POST, PUT, DELETE, etc.) for data retrieval and management.  

* Provides helpers for handling common tasks such as authentication and pagination
* Allows call chaining which removes the need for excessive callbacks


## Examples
Here's an example of how to use the CDA SDK to retrieve water data:

```
const { CdaClient } = require('cwms-js');

const cdaClient = new CdaClient({
  apiUrl: 'https://cda.example.com/api',
  apiKey: 'mykey',
  apiSecret: 'mysecret'
});

const waterData = await cdaClient.getData({
  parameter: 'elev',
  location: 'project',
  startDate: '2022-01-01',
  endDate: '2022-01-31',
});

console.log(waterData);
```
For more examples -> [documentation](https://github.com/HydrologicEngineeringCenter/cwms-data-api-client-javascript/wiki)

For more information on how to use the CDA SDK, please refer to the [documentation](https://github.com/HydrologicEngineeringCenter/cwms-data-api-client-javascript/wiki).


## Installation 
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/HydrologicEngineeringCenter/cwms-data-api-client-javascript?logo=CWMSjs)  

### Browsers:  
To use the CDA SDK in your project, simply install it via npm:  
    
`npm install cda-js --save`  

`let cda = require('cdajs')`

Prebuilt versions:  
    * Placeholder 1  
    * Placeholder 2  

*These files will occasionally be updated as new versions of cdajs are released*

## License
This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).