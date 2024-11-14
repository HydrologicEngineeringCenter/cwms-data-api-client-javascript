# CWMSjs

_CWMS Data API (CDA) client library created with OpenAPI generator in TypeScript for use with web browsers._

## Getting Started

- Install CWMSjs to your react project with:  
   `npm install cwmsjs`  
   (This will grab the latest)

- Import the API endpoint you wish to use:
  - Avaiable endpoints are here (Classes ending in API): [Endpoints](https://hydrologicengineeringcenter.github.io/cwms-data-api-client-javascript/modules.html)
  - At the top of your js/jsx/file type:
    ```javascript
    import { TimeSeriesAPI } from "cwmsjs";
    ```
  - Then initialize the TimeSeriesAPI with:
    ```javascript
    const ts_api = new TimeSeriesAPI();
    ```
  - Fetch time series data with:
    ```javascript
    await ts_api
      .getTimeSeries({
        office: "SWT",
        name: "KEYS.Elev.Inst.1Hour.0.Ccp-Rev",
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log("My Error", e);
      });
    ```

Documentation is available for both developers and new users:

- New Users : [Examples](https://hydrologicengineeringcenter.github.io/cwms-data-api-client-javascript/examples/)
- Advanced users : [Type Documentation / Developer Docs](https://hydrologicengineeringcenter.github.io/cwms-data-api-client-javascript/)

## Developers
### Versioning
In order to accommodate changes both to the generator and to CDA itself, cwmsjs is versioned in the following format:
`[generator SemVer]-[generation date]`

CDA is expected to at some point expose a CalVer for the latest update.  When this is available, the generation date will be replaced with the current CDA CalVer.

## Building CWMSjs from source

- Clone this repository
- Install dependencies with: `npm install`
- Run the generator with:
  `npm run build`

All generated files (source, library, and docs) will be in `[repo]/cwmsjs`
