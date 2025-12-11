import fs from "fs";
import path from "path";

export function loadLocale(locale: string) {
  const messages = {};
  const localeDir = path.join(process.cwd(), "src/locales", locale);

  function readDirRecursive(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        readDirRecursive(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        const json = require(fullPath);
        Object.assign(messages, json);
      }
    });
  }

  readDirRecursive(localeDir);
  return messages;
}
