// Example / test for fetching timeseries from CDA

import { TimeSeriesApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Timeseries V2', async () => {

    const v2_config = new Configuration({
        "headers": {
            "accept": "application/json;version=2",
        }
    })
    const ts_api = new TimeSeriesApi(v2_config);
    await ts_api.getCwmsDataTimeseries({
        "office": "SWT",
        "name": "KEYS.Elev.Inst.1Hour.0.Ccp-Rev",
    })
        .then((data) => {
            expect(data?.values).toBeDefined()
        })
}, 15000)

