const { latinToCyrillic, cyrillicToLatin, detectScript, autoConvert } = require("../src/index");

const tests = [
  { fn: latinToCyrillic, input: "Moldova",    expected: "Молдова" },
  { fn: latinToCyrillic, input: "Bună ziua",  expected: "Бунэ зиуа" },
  { fn: latinToCyrillic, input: "Mulțumesc",  expected: "Мулцумеск" },
  { fn: latinToCyrillic, input: "Chișinău",   expected: "Кишинэу" },
  { fn: cyrillicToLatin, input: "Молдова",    expected: "Moldova" },
  { fn: detectScript,    input: "Moldova",    expected: "latin" },
  { fn: detectScript,    input: "Молдова",    expected: "cyrillic" },
  { fn: autoConvert,     input: "Chișinău",   expected: "Кишинэу" },
];

let passed = 0, failed = 0;
tests.forEach(({ fn, input, expected }) => {
  const result = fn(input);
  const ok = result === expected;
  ok ? passed++ : failed++;
  console.log(`${ok ? "✅" : "❌"} "${input}" → "${result}"${!ok ? ` (expected: "${expected}")` : ""}`);
});

console.log(`\n📊 ${passed} ✅ / ${failed} ❌ из ${tests.length} тестов`);
if (failed > 0) process.exit(1);
