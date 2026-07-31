import fs from "fs";

const files = [
  "./messages/en.json",
  "./messages/fr.json"
];

const replacements = {
  "â€™": "’",
  "â€œ": "“",
  "â€": "”",
  "â€”": "—",
  "â€“": "–",
  "â€¦": "…",
  "â†’": "→",
  "â€¢": "•",
  "âœ“": "✓",
  "âœ”": "✔",
  "Â©": "©",
  "Â®": "®",
  "Â": "",
  "Ã©": "é",
  "Ã¨": "è",
  "Ã ": "à",
  "Ã¢": "â",
  "Ãª": "ê",
  "Ã®": "î",
  "Ã´": "ô",
  "Ã»": "û",
  "Ã§": "ç",
  "Ã‰": "É",
  "Ã€": "À",
  "Ã¹": "ù",
  "Ã¼": "ü",
  "Ã«": "ë",
  "FranÃ§ais": "Français"
};

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");

  text = text.replace(/^\uFEFF/, "");

  for (const [bad, good] of Object.entries(replacements)) {
    text = text.split(bad).join(good);
  }

  const parsed = JSON.parse(text);

  fs.writeFileSync(
    file,
    JSON.stringify(parsed, null, 2) + "\n",
    "utf8"
  );

  console.log(`Fixed ${file}`);
}

console.log("Translation repair completed.");