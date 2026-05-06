import { readFile } from "node:fs/promises";
import { Configuration, TimeSeriesApi } from "../cwmsjs/dist/index.js";

const DEFAULT_BASE_PATH = "https://cwms-data.usace.army.mil/cwms-data";

async function runStep(name, fn) {
  process.stdout.write(`${name}... `);
  const result = await fn();
  console.log("ok");
  return result;
}

async function readJson(path) {
  return JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));
}

function normalizeVersionSuffix(version) {
  return String(version)
    .split(".")
    .map((identifier) => (/^\d+$/.test(identifier) ? String(Number(identifier)) : identifier))
    .join(".");
}

async function main() {
  const packageJson = await readJson("../cwmsjs/package.json");
  const rootPackageJson = await readJson("../package.json");
  const rawSpec = await readJson("../cwms-swagger-raw.json");
  const expectedVersion = `${rootPackageJson.version}-${normalizeVersionSuffix(rawSpec?.info?.version)}`;

  await runStep("package version", async () => {
    if (packageJson.version !== expectedVersion) {
      throw new Error(
        `cwmsjs version mismatch. Expected ${expectedVersion}, found ${packageJson.version}.`,
      );
    }
  });

  const requests = [];
  const config = new Configuration({
    fetchApi: async (url, init) => {
      requests.push({ url, init });
      return new Response(JSON.stringify({ values: [] }), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });
    },
  });

  await runStep("default production base path", async () => {
    const api = new TimeSeriesApi(config);
    const response = await api.getTimeSeriesRaw({
      office: "SWT",
      name: "KEYS.Elev.Inst.1Hour.0.Ccp-Rev",
    });

    if (!response.raw.ok) {
      throw new Error(`Expected mocked response to be ok, got ${response.raw.status}.`);
    }

    const request = requests.at(-1);
    const expectedUrl =
      `${DEFAULT_BASE_PATH}/timeseries?name=KEYS.Elev.Inst.1Hour.0.Ccp-Rev&office=SWT`;

    if (request?.url !== expectedUrl) {
      throw new Error(`Expected ${expectedUrl}, got ${request?.url}.`);
    }
  });

  console.log(`cwmsjs version: ${packageJson.version}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
