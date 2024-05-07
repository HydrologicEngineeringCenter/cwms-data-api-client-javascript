import { BasinsApi, OfficesApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Basins', async () => {
    const o_api = new OfficesApi()
    let offices = await o_api.getCwmsDataOffices().then((d) => {
        let _all_o = d?.offices.offices.map((o) => {
            if (o.type == "DIS") return o.name
        })
        // Keep only defined offices that are districts
        return _all_o.filter((o) => o)
    })
    console.log(offices.length + " Offices")
    const b_api = new BasinsApi()
    for (const office of offices.slice(0, 2)) {
        let o_raw = await b_api.getCwmsDataBasinsRaw({
            "office": office
        })
        o_raw.raw.json().then((d) => {
            console.log(d)
        })
    }

}, 15000)
