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
        })
}, 15000)
