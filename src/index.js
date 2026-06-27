const LATIN_TO_CYR = [
  ["Chi","Ки"],["Che","Ке"],["chi","ки"],["che","ке"],
  ["Ghi","Ги"],["Ghe","Ге"],["ghi","ги"],["ghe","ге"],
  ["Ce","Че"],["Ci","Чи"],["ce","че"],["ci","чи"],
  ["Ge","Дже"],["Gi","Джи"],["ge","дже"],["gi","джи"],
  ["ch","к"],["Ch","К"],["gh","г"],["Gh","Г"],
  ["sh","ш"],["Sh","Ш"],["zh","ж"],["Zh","Ж"],
  ["ă","э"],["Ă","Э"],["â","ы"],["Â","Ы"],
  ["î","ы"],["Î","Ы"],["ș","ш"],["Ș","Ш"],
  ["ş","ш"],["Ş","Ш"],["ț","ц"],["Ț","Ц"],
  ["ţ","ц"],["Ţ","Ц"],
  ["a","а"],["A","А"],["b","б"],["B","Б"],
  ["c","к"],["C","К"],["d","д"],["D","Д"],
  ["e","е"],["E","Е"],["f","ф"],["F","Ф"],
  ["g","г"],["G","Г"],["h","х"],["H","Х"],
  ["i","и"],["I","И"],["j","ж"],["J","Ж"],
  ["l","л"],["L","Л"],["m","м"],["M","М"],
  ["n","н"],["N","Н"],["o","о"],["O","О"],
  ["p","п"],["P","П"],["r","р"],["R","Р"],
  ["s","с"],["S","С"],["t","т"],["T","Т"],
  ["u","у"],["U","У"],["v","в"],["V","В"],
  ["x","кс"],["X","Кс"],["y","й"],["Y","Й"],
  ["z","з"],["Z","З"],
];

const CYR_TO_LATIN = [
  ["дже","ge"],["джи","gi"],["ке","che"],["ки","chi"],
  ["ге","ghe"],["ги","ghi"],
  ["ча","cia"],["че","ce"],["чи","ci"],["чо","cio"],["чу","ciu"],
  ["а","a"],["А","A"],["б","b"],["Б","B"],["в","v"],["В","V"],
  ["г","g"],["Г","G"],["д","d"],["Д","D"],["е","e"],["Е","E"],
  ["ж","j"],["Ж","J"],["з","z"],["З","Z"],["и","i"],["И","I"],
  ["й","i"],["Й","I"],["к","c"],["К","C"],["л","l"],["Л","L"],
  ["м","m"],["М","M"],["н","n"],["Н","N"],["о","o"],["О","O"],
  ["п","p"],["П","P"],["р","r"],["Р","R"],["с","s"],["С","S"],
  ["т","t"],["Т","T"],["у","u"],["У","U"],["ф","f"],["Ф","F"],
  ["х","h"],["Х","H"],["ц","ț"],["Ц","Ț"],["ч","c"],["Ч","C"],
  ["ш","ș"],["Ш","Ș"],["э","ă"],["Э","Ă"],["ы","î"],["Ы","Î"],
  ["ю","iu"],["Ю","Iu"],["я","ia"],["Я","Ia"],
];

function latinToCyrillic(text) {
  if (typeof text !== "string") throw new TypeError("Expected a string");
  let result = text;
  for (const [from, to] of LATIN_TO_CYR) result = result.split(from).join(to);
  return result;
}

function cyrillicToLatin(text) {
  if (typeof text !== "string") throw new TypeError("Expected a string");
  let result = text;
  for (const [from, to] of CYR_TO_LATIN) result = result.split(from).join(to);
  return result;
}

function detectScript(text) {
  const cyr = (text.match(/[а-яёА-ЯЁэыЭЫ]/g) || []).length;
  const lat = (text.match(/[a-zA-ZăâîșțĂÂÎȘȚ]/g) || []).length;
  if (cyr > lat) return "cyrillic";
  if (lat > cyr) return "latin";
  return "unknown";
}

function autoConvert(text) {
  const s = detectScript(text);
  if (s === "latin") return latinToCyrillic(text);
  if (s === "cyrillic") return cyrillicToLatin(text);
  return text;
}

module.exports = { latinToCyrillic, cyrillicToLatin, detectScript, autoConvert, version: "1.0.0", lang: "mol" };
