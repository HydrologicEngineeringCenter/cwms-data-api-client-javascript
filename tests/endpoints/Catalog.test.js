
import { CatalogApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Catalog', async () => {

    const catalog_api = new CatalogApi()
    await catalog_api.getCwmsDataCatalogWithDataset({
        office: "SWT",
        like: "KEYS\..*.Inst.1Hour.0.Ccp-Rev",
        dataset: "TIMESERIES"
    }).then((data) => {
        expect(data?.entries).toBeDefined()
        Object.entries(data?.entries).forEach(([key, value]) => {
            console.log(value?.name)
        });
        console.log(`Returned ${data?.entries?.length} timeseries IDs`)
    })
}, 20000)