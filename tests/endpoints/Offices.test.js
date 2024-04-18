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
        })
}, 10000)