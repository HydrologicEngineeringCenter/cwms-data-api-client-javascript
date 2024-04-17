// Example / test for fetching timeseries from CDA

import { TimeSeriesApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Timeseries', async () => {
    // Initialize the Timeseries API with the default CDA server
    const ts_api = new TimeSeriesApi();
    // Attempt to fetch TS data
    await ts_api.getCwmsDataTimeseries({
        "office": "SWT",
        "name": "WEBB.Elev.Inst.1Hour.0.Ccp-Rev",
        "unit": "EN",
        "timezone": "America/Chicago",
        // format?: string;
        // page?: string;
    })
        .then((data) => {
            expect(data?.values).toBeDefined()
        })
}, 10000)

