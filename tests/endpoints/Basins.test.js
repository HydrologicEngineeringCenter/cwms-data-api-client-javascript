import { BasinsApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Basins', async () => {
    const b_api = new BasinsApi()
    await b_api.getCwmsDataBasinsRaw({
        "office": "LRH"
    }).then(r => r.raw.json())
        .then((data) => {
            console.log(data)
            // expect(data?.["primary-stream"]).toBeDefined()
        }).catch(async e => {
            if (e.response) {
                const error_msg = await e.response.json()
                e.message = `${e.response.url}\n${e.message}\n${JSON.stringify(error_msg, null, 2)}`;
                console.error(e);
            }
            throw e;
        })

}, 15000)