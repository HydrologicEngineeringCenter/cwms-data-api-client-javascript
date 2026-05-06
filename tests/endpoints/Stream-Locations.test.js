import { Configuration, StreamLocationsApi } from "cwmsjs";
import fetch from "node-fetch";
global.fetch = fetch;

test("Test Stream Locations", async () => {
  const config = new Configuration({
    basePath: "https://cwms-data.usace.army.mil/cwms-data",
  });
  const stream_locations_api = new StreamLocationsApi(config);

  await stream_locations_api
    .getStreamLocations({
      officeMask: "SWT",
      nameMask: "KEYS*",
    })
    .then(async (data) => {
      expect(Array.isArray(data)).toBe(true);

      console.log(`Returned ${data.length} stream locations`);
    })
    .catch(async (e) => {
      if (e.response) {
        const error_msg = await e.response.json();
        e.message = `${e.response.url}\n${e.message}\n${JSON.stringify(
          error_msg,
          null,
          2
        )}`;
        console.error(e);
        throw e;
      } else {
        throw e;
      }
    });
}, 30000);
