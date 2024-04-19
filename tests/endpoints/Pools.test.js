import { PoolsApi, Configuration} from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Pools', async () => {
    const config = new Configuration({
        "headers": {
            "accept": "application/json;version=2",
        }
    })
    const p_api = new PoolsApi(config)
    await p_api.getCwmsDataPools({
        "office": "SWT"
    }).then((data) => {
            console.log(data)
            // data.forEach((category) => {
            //     expect(category).toBeDefined()
            //     expect(category["id"]).toBeDefined()
            // })
        }).catch(async e => {
            if (e.response) {
                const error_msg = await e.response.json()
                e.message = `${e.response.url}\n${e.message}\n${JSON.stringify(error_msg, null, 2)}`;
                console.error(e);
            }
            throw e;
        })

}, 15000)