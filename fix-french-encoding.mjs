import fs from "node:fs";

const filePath = "messages/fr.json";

function repairText(value) {
  if (typeof value === "string") {
    if (/[ÃÂâ]/.test(value)) {
      return Buffer.from(value, "latin1").toString("utf8");
    }

    return value;
  }

  if (Array.isArray(value)) {
    return value.map(repairText);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, repairText(item)])
    );
  }

  return value;
}

try {
  const raw = fs.readFileSync(filePath, "utf8");
  const json = JSON.parse(raw);
  const repaired = repairText(json);

  fs.writeFileSync(
    filePath,
    JSON.stringify(repaired, null, 2) + "\n",
    "utf8"
  );

  console.log("French encoding repaired successfully.");
} catch (error) {
  console.error("Encoding repair failed:");
  console.error(error);
  process.exit(1);
}