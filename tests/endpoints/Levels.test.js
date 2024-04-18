import { LevelsApi, Configuration } from "cwmsjs";

import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Levels', async () => {
    const l_api = new LevelsApi()

    await l_api.getCwmsDataLevels({
        levelIdMask: "*KEYS*",
        office: "SWT",
        format: "json"
    })
        .then((data) => {
            expect(data?.['location-levels']?.['location-levels']).toBeDefined()
            data?.['location-levels']?.['location-levels'].forEach((level) => {
                expect(level?.name).toBeDefined()
                expect(level?.office).toBeDefined()
                expect(level?.values).toBeDefined()
            })
        })
}, 10000)