import { RatingsApi } from "cwmsjs";
import fetch from 'node-fetch';
global.fetch = fetch;

test('Test Ratings', async () => {
   const r_api = new RatingsApi()
   r_api.getCwmsDataRatings({
         "office": "SWT"
    }).then((data) => {
         console.log(data)
   })
   // Fetch the CWMS Rating specification for the SWT OFFICE given a rating mask for keystone lake
   r_api.getCwmsDataRatingsSpec({
            "office": "SWT",
            "ratingIdMask": "KEYS.*"
        }).then((data) => {
            expect(data?.specs).toBeDefined()
            console.log(data.specs)
        })
   // Fetch the CWMS Rating templates for the SPK OFFICE
   r_api.getCwmsDataRatingsTemplate({
    "office": "SPK"
   }).then((data) => {
       expect(data?.templates).toBeDefined()
       console.log(data.templates)
   })

   r_api.getCwmsDataRatingsTemplateWithTemplateId({
    "office": "SWT", 
     "templateId": "Elev-Alt;Stor-Alt.Linear"
   }).then(data=> {
        expect(data).toBeDefined()
        console.log(data)
   })

}, 15000)
