// Example / test for fetching timeseries from CDA
import { TimeZonesApi, Configuration } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test TimeZones', async () => {
    const tz_config = new Configuration({
        "headers": {
            "accept": "*/*",
        }
    })
    const tz_api = new TimeZonesApi(tz_config);
    await tz_api.getCwmsDataTimezones()
        .then((data) => {
            // TODO: Create ticket to correct json parsing issue - missing a { in the result
            console.log(data)
        })
}, 15000)

