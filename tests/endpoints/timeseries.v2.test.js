// Example / test for fetching timeseries from CDA

import { TimeSeriesApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

const v2_config = new Configuration({
    "headers": {
        "accept": "application/json;version=2",
    }
})

test('Test Timeseries V2', async () => {
    // Initialize the Timeseries API with the default CDA server
    const ts_api = new TimeSeriesApi(v2_config);
    // Attempt to fetch TS data
    await ts_api.getCwmsDataTimeseries({
        "office": "SWT",
        "name": "KEYS.Elev.Inst.1Hour.0.Ccp-Rev",
    })
        .then((data) => {
            expect(data?.values).toBeDefined()
        }).catch(async e => { // Wrap the catch block in an async function
            if (e.response) {
                const error_msg = await e.response.json()
                e.message = `${e.response.url}\n${e.message}\n${JSON.stringify(error_msg, null, 2)}`;
                console.error(e);
                throw e;
            } else {
                throw e;
            }
        })
}, 15000)

