// Re-applies fork identity after merging an upstream release. Usage: node fork-fixup.cjs <upstream-version>
const fs = require("fs");
const upstream = process.argv[2];
const edit = (f, fn) => { const j = JSON.parse(fs.readFileSync(f, "utf8")); fn(j); fs.writeFileSync(f, JSON.stringify(j, null, 2) + "\n"); };
const version = `${upstream}-plus.1`;
edit("package.json", (j) => {
  j.name = "pi-usage-plus"; j.version = version;
  j.repository.url = "https://github.com/aic0d3r/pi-usage-plus.git";
  j.homepage = "https://github.com/aic0d3r/pi-usage-plus";
  j.bugs.url = "https://github.com/aic0d3r/pi-usage-plus/issues";
});
edit("package-lock.json", (j) => {
  j.name = "pi-usage-plus"; j.version = version;
  if (j.packages?.[""]) { j.packages[""].name = "pi-usage-plus"; j.packages[""].version = version; }
});
