// Example / test for fetching timeseries from CDA

import { CountiesApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Counties', async () => {
    // Initialize the Timeseries API with the default CDA server
    const c_api = new CountiesApi();
    // Attempt to fetch TS data
    await c_api.getCwmsDataCountiesRaw()
        .then((data) => {
            expect(data).toBeDefined()
            data.forEach((value) => {
                expect(value?.name).toBeDefined()
                expect(value?.["county-id"]).toBeDefined()
                expect(value?.["state-initial"]).toBeDefined()
            });
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
}, 10000)

