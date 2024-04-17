import { BasinsApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Basins', async () => {
    const b_api = new BasinsApi()
    // Attempt to fetch TS data
    await b_api.getCwmsDataBasinsRaw({
        "office": "LRH"
    }).then(r=>r.raw.json())
        .then((data) => {
            console.log(data)
            // expect(data?.["primary-stream"]).toBeDefined()
        })

}, 15000)