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


