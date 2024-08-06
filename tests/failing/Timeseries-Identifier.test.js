// Example / test for fetching timeseries from CDA
// !ignore

import { TimeSeriesIdentifierApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Units', async () => {
    const tsi_api = new TimeSeriesIdentifierApi({
        "office": "SWT"
    });
    await tsi_api.getCwmsDataTimeseriesIdentifierDescriptor()
        .then((data) => {
            expect(data).toBeDefined()
        })
}, 15000)

