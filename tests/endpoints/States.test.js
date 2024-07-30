import { StatesApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test States', async () => {
    try {
        const config = new Configuration({
            "headers": {
                "accept": "application/json;version=2",
            }
        })
        const s_api = new StatesApi(config)
        const data = await s_api.getCwmsDataStates();
        console.log(data)
        expect(data?.name).toBeDefined()
    } catch (error) {
        expect(error).toBeNull(); // This will cause the test to fail if any error is thrown
    }
}, 15000)
