import { RatingsApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Ratings', async () => {
    const r_api = new RatingsApi();

    try {
        const data1 = await r_api.getCwmsDataRatings({
            "office": "SWT"
        });
        console.log(data1);

        const data2 = await r_api.getCwmsDataRatingsSpec({
            "office": "SWT",
            "ratingIdMask": "KEYS.*"
        });
        expect(data2?.specs).toBeDefined();
        console.log(data2.specs);

        const data3 = await r_api.getCwmsDataRatingsTemplate({
            "office": "SPK"
        });
        expect(data3?.templates).toBeDefined();
        console.log(data3.templates);

        const data4 = await r_api.getCwmsDataRatingsTemplateWithTemplateId({
            "office": "SWT",
            "templateId": "Elev-Alt;Stor-Alt.Linear"
        });
        expect(data4).toBeDefined();
        console.log(data4);
    } catch (error) {
        if (error.response && error.response.status === 403) {
            throw new Error('Received a 403 Forbidden error');
        }
        throw error;
    }
}, 15000)
