import { LocationsApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;


test('Test Locations', async () => {
    const MY_PROJECT_ALIAS = "KEYS"
    const v2_config =new Configuration({
        "headers": {
            "accept": "application/json;version=2",
        }
    })
    const loc_api = new LocationsApi(v2_config)
    await loc_api.getCwmsDataLocations({
        "office": "SWT",
        "names": `${MY_PROJECT_ALIAS}.*`,

    })
        .then((data) => {
            expect(data?.locations).toBeDefined()
            expect(data?.locations?.locations).toBeDefined()
            Object.entries(data?.locations?.locations).forEach(([key, value]) => {
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
}, 30000)