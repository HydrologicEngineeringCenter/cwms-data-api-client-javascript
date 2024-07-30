import { TimeseriesGroupsApi , Configuration } from "../../src/dist/";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Groups', async () => {
    const config = new Configuration({
        "headers": {
            "accept": "application/json;version=2",
        }
    })
    const tsg_api = new TimeseriesGroupsApi()
    tsg_api.getCwmsDataTimeseriesGroup({
        // TODO: add params once we can test them
    })

}, 15000)
