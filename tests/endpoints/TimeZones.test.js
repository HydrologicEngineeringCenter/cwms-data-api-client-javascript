// Example / test for fetching timeseries from CDA
import { TimeZonesApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test TimeZones', async () => {
    const tz_config = new Configuration({
        "headers": {
            "accept": "application/json;version=2",
        }
    })
    const tz_api = new TimeZonesApi(tz_config);
    await tz_api.getCwmsDataTimezones()
        .then((data) => {
            console.log(data)
            expect(data).toBeDefined()
        })
}, 15000)

