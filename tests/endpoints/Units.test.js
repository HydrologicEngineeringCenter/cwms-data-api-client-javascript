// Example / test for fetching timeseries from CDA

import { UnitsApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Units', async () => {
    const config = new Configuration({
        "accept": "*/*"
    })
    const u_api = new UnitsApi(config);
    await u_api.getCwmsDataUnits()
        .then((data) => {
            expect(data).toBeDefined()
        })
}, 15000)

