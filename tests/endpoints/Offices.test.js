import { OfficesApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Offices', async () => {
    const o_api = new OfficesApi()
    await o_api.getCwmsDataOffices()
        .then((data) => {
            expect(data?.offices).toBeDefined()
            expect(data?.offices?.offices).toBeDefined()
            Object.entries(data?.offices?.offices).forEach(([key, value]) => {
                expect(value?.name).toBeDefined()
                expect(value?.type).toBeDefined()
            });
        }).catch(async e => {
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