import { toCamelCase } from "../cases/camelCase.js";
import { toSnakeCase } from "../cases/snakeCase.js";
import { toKebabCase } from "../cases/kebabCase.js";
import { toPascalCase } from "../cases/pascalCase.js";
import { toTrainCase } from "../cases/trainCase.js";
import { toTitleCase } from "../cases/titleCase.js";
import { toConstantCase } from "../cases/constantCase.js";
import { toDotCase } from "../cases/dotCase.js";
import { toPathCase } from "../cases/pathCase.js";
import { toSentenceCase } from "../cases/sentenceCase.js";
import { toMacroCase } from "../cases/macroCase.js";
import { toFlatCase } from "../cases/flatCase.js";
import { toSwapCase } from "../cases/swapCase.js";
import { toSpongeCase } from "../cases/spongeCase.js";
import { toLowerCase } from "../cases/lowerCase.js";
import { toUpperCase } from "../cases/upperCase.js";
import { toCobolCase } from "../cases/cobolCase.js";

import { testCases } from "./testCases.js";

import { expect, test, describe } from "vitest";

describe("toCamelCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, camelCase }) => {
    expect(toCamelCase(input)).toBe(camelCase);
  });
});

describe("toSnakeCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, snakeCase }) => {
    expect(toSnakeCase(input)).toBe(snakeCase);
  });
});

describe("toKebabCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, kebabCase }) => {
    expect(toKebabCase(input)).toBe(kebabCase);
  });
});

describe("toPascalCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, pascalCase }) => {
    expect(toPascalCase(input)).toBe(pascalCase);
  });
});

describe("toTrainCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, trainCase }) => {
    expect(toTrainCase(input)).toBe(trainCase);
  });
});

describe("toTitleCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, titleCase }) => {
    expect(toTitleCase(input)).toBe(titleCase);
  });
});

describe("toConstantCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, constantCase }) => {
    expect(toConstantCase(input)).toBe(constantCase);
  });
});

describe("toDotCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, dotCase }) => {
    expect(toDotCase(input)).toBe(dotCase);
  });
});

describe("toPathCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, pathCase }) => {
    expect(toPathCase(input)).toBe(pathCase);
  });
});

describe("toSentenceCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, sentenceCase }) => {
    expect(toSentenceCase(input)).toBe(sentenceCase);
  });
});

describe("toMacroCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, macroCase }) => {
    expect(toMacroCase(input)).toBe(macroCase);
  });
});

describe("toFlatCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, flatCase }) => {
    expect(toFlatCase(input)).toBe(flatCase);
  });
});

describe("toSwapCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, swapCase }) => {
    expect(toSwapCase(input)).toBe(swapCase);
  });
});

describe("toSpongeCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, spongeCase }) => {
    expect(toSpongeCase(input)).toBe(spongeCase);
  });
});

describe("toLowerCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, lowerCase }) => {
    expect(toLowerCase(input)).toBe(lowerCase);
  });
});

describe("toUpperCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, upperCase }) => {
    expect(toUpperCase(input)).toBe(upperCase);
  });
});

describe("toCobolCase", () => {
  test.each(testCases)('converts "%s" to "%s"', ({ input, cobolCase }) => {
    expect(toCobolCase(input)).toBe(cobolCase);
  });
});
