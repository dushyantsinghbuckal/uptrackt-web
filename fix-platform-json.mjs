import fs from "fs";

const files = ["./messages/en.json", "./messages/fr.json"];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");

  content = content.replace(
    /("uptime"\s*:\s*"[^"]*"\s*\n\s*}\s*\n\s*})\s*\n(\s*"ResourcesPage"\s*:)/,
    (match, platformEnd, resourcesStart) => {
      return `${platformEnd},\n${resourcesStart}`;
    }
  );

  fs.writeFileSync(file, content, "utf8");

  try {
    JSON.parse(content);
    console.log(`Valid JSON: ${file}`);
  } catch (error) {
    console.error(`Still invalid: ${file}`);
    console.error(error.message);
  }
}