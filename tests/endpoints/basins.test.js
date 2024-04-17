import { BasinsApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Basins', async () => {
    const b_api = new BasinsApi()
    // Attempt to fetch TS data
    await b_api.getCwmsDataBasins({
        "office": "SWT"
    })
        .then((data) => {
            expect(data?.["primary-stream"]).toBeDefined()
        })

}, 15000)