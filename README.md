# CWMSjs

_CWMS Data API (CDA) client library created with OpenAPI generator in TypeScript for use with web browsers._


## Getting Started
* Install CWMSjs to your react project with:  
   `npm install cwmsjs --save`  
   (This will grab the latest)

* Import the API endpoint you wish to use:
  * Avaiable endpoints are here (Classes ending in API): [Endpoints](https://hydrologicengineeringcenter.github.io/cwms-data-api-client-javascript/modules.html)
  * At the top of your js/jsx/file type:  
    ```javascript
        import { TimeseriesAPI } from "cwmsjs"
    ```
  * Then initialize the TimeseriesAPI with:
    ```javascript
        const tsa = new TimeseriesAPI()
    ```
  * Fetch timeseries data with:
    ```javascript
        await ts_api.getCwmsDataTimeseries({
            "office": "SWT",
            "name": "KEYS.Elev.Inst.1Hour.0.Ccp-Rev",
        })
        .then((data) => {
            console.log(data)
        }).catch(e => { 
            console.log("My Error", e)
        })
    ```

Documentation is available for both developers and new users:
* New Users : [Examples](https://hydrologicengineeringcenter.github.io/cwms-data-api-client-javascript/examples/)
* Advanced users : [Type Documentation / Developer Docs](https://hydrologicengineeringcenter.github.io/cwms-data-api-client-javascript/)


## Building CWMSjs from Source
*CWMSjs dev docs*

### Building the client via OpenAPI Generator
To build CWMSjs you will need `openapi-generator-cli` which can be acquired with `nodejs` via the command:  

```bash  
npm install @openapitools/openapi-generator-cli -g
```  
Via [openapi-generator docs](https://openapi-generator.tech/docs/installation/)

Once you have it installed you can generate the client library for CWMSjs via the `package.json` script:

```bash
npm run openapi
```

Next create the distribution files and documentation with:
```bash
npm run build
```

### Docs Pages

The last step technically ran both of these commands below. You can read about it in the `package.json / "scripts": {}`

But if you have a need to generate the docs and/or the examples individually you can call those commands too!

You need to first create the distribution files
```bash
npm run docs
```

With the docs created, the example pages can created and injected into them with:
```bash
npm run examples
```

### Publishing the library

`npm link` publish's the repo (Update the version #!)  
__(Requires login and access to NPM repo)__

    