# 🇲🇩 moldovan-transliterator

> Latin ↔ Кириллица — конвертер молдавского языка (ISO 639-3: mol)

## Установка

```bash
npm install moldovan-transliterator
```

## Использование

```js
const mol = require("moldovan-transliterator");

mol.latinToCyrillic("Chișinău")  // → "Кишинэу"
mol.cyrillicToLatin("Молдова")   // → "Moldova"
mol.autoConvert("Bună ziua")     // → "Бунэ зиуа"
mol.detectScript("Moldova")      // → "latin"
```

## API

| Функция | Описание |
|---|---|
| `latinToCyrillic(text)` | Latin → Кириллица |
| `cyrillicToLatin(text)` | Кириллица → Latin |
| `autoConvert(text)` | Авто-определение и конвертация |
| `detectScript(text)` | Определить алфавит: `"latin"` / `"cyrillic"` / `"unknown"` |

## Стандарт

Конвертация основана на **Лумина Стандард** — советская молдавская кириллица (РССМ).

- ISO 639-3: `mol`
- Скрипт: Кириллица (Cyrillic)
- Примеры: `Chișinău` → `Кишинэу`, `Moldova` → `Молдова`

## Тесты

```bash
npm test
```

## License

MIT © [ivanm696](https://github.com/ivanm696)
