// Example / test for fetching timeseries from CDA

import { TimeSeriesApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Timeseries V1', async () => {
    const ts_api = new TimeSeriesApi();
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
