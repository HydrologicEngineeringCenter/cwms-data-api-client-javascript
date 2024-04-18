import { ParametersApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Parameters', async () => {
    const p_api = new ParametersApi()
    await p_api.getCwmsDataParametersRaw({
        "office": "SWT"
    })
        .then(r => r.raw.json())
        .then(data => {
            expect(data?.parameters).toBeDefined()
            expect(data?.parameters?.parameters).toBeDefined()
            Object.entries(data?.parameters?.parameters).forEach(([key, value]) => {
                expect(value?.["abstract-param"]).toBeDefined()
                expect(value?.["office"]).toBeDefined()
                expect(value?.["default-english-unit"]).toBeDefined()
                expect(value?.["default-si-unit"]).toBeDefined()
                expect(value?.["long-name"]).toBeDefined()
                expect(value?.["description"]).toBeDefined()
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
}
    , 60000)