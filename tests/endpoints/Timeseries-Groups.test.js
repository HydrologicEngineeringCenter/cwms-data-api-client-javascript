import { TimeSeriesGroup , Configuration } from "../../src/dist/";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Groups', async () => {
    const config = new Configuration({
        "headers": {
            "accept": "application/json;version=2",
        }
    })
    const s_api = new StatesApi(config)
    s_api.getCwmsDataStates().then((data) => {
        expect(data).toBeDefined()
        console.log(data)
    })

}, 15000)
