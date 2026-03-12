const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const cwmsjsDir = path.join(rootDir, "cwmsjs");
const packageJson = JSON.parse(
  fs.readFileSync(path.join(cwmsjsDir, "package.json"), "utf8"),
);

if (fs.existsSync(path.join(cwmsjsDir, "docs"))) {
  if (process.platform === "win32") {
    const cleanup = spawnSync("cmd.exe", ["/d", "/s", "/c", "rmdir /s /q docs"], {
      cwd: cwmsjsDir,
      stdio: "inherit",
    });
    if (cleanup.status !== 0) {
      process.exit(cleanup.status ?? 1);
    }
  } else {
    fs.rmSync(path.join(cwmsjsDir, "docs"), { recursive: true, force: true });
  }
}

const result = spawnSync(
  `npx typedoc src/index.ts --name "cwmsjs v${packageJson.version}"`,
  {
    cwd: cwmsjsDir,
    stdio: "inherit",
    shell: true,
  },
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
