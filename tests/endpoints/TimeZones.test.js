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
}, 15000)

