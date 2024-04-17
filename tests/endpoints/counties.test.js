// Example / test for fetching timeseries from CDA

import { CountiesApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

// TODO: Why does the query fail when you do not specify version 2 in the headers?
const c_config = new Configuration({
    "headers": {
        "accept": "application/json;version=2",
    }

})
test('Test Counties', async () => {
    // Initialize the Timeseries API with the default CDA server
    const c_api = new CountiesApi();
    // Attempt to fetch TS data
    await c_api.getCwmsDataCounties()
        .then((data) => {
            console.log(data)
            expect(data).toBeDefined()
            data.forEach((value) => {
                expect(value?.name).toBeDefined()
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

