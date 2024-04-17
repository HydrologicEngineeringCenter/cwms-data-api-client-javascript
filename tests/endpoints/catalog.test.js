
import { CatalogApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Catalog', async () => {
    const catalog_api = new CatalogApi()
    await catalog_api.getCwmsDataCatalogWithDataset({
        office: "SWT",
        like: "*Elev.Inst.1Hour.0.Ccp-Rev",
        dataset: "TIMESERIES"
    }).then((data) => {
        expect(data?.entries).toBeDefined()
        if (!data?.entries || data?.entries == 0) {
            throw Error(`No catalog timeseries returned`);
        }
        Object.entries(data?.entries).forEach(([key, value]) => {
            expect(value?.name).toBeDefined()
        });
    })


})