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

import {
  whitespaceTestCases,
  whitespaceAndSpecialCharacterTestCases,
} from "./testCases.js";

import { expect, test, describe } from "vitest";

describe("toCamelCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toCamelCase(%s) = %s",
    ({ input, camelCase }) => {
      expect(
        toCamelCase(input, {
          preserveWhitespace: camelCase.preserveWhitespace,
        })
      ).toEqual(camelCase.result);
    }
  );
});

describe("toCamelCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toCamelCase(%s) = %s",
    ({ input, camelCase }) => {
      expect(
        toCamelCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(camelCase.result);
    }
  );
});

describe("toSnakeCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toSnakeCase(%s) = %s",
    ({ input, snakeCase }) => {
      expect(
        toSnakeCase(input, {
          preserveWhitespace: snakeCase.preserveWhitespace,
        })
      ).toEqual(snakeCase.result);
    }
  );
});

describe("toSnakeCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toSnakeCase(%s) = %s",
    ({ input, snakeCase }) => {
      expect(
        toSnakeCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(snakeCase.result);
    }
  );
});

describe("toKebabCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toKebabCase(%s) = %s",
    ({ input, kebabCase }) => {
      expect(
        toKebabCase(input, {
          preserveWhitespace: kebabCase.preserveWhitespace,
        })
      ).toEqual(kebabCase.result);
    }
  );
});

describe("toKebabCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toKebabCase(%s) = %s",
    ({ input, kebabCase }) => {
      expect(
        toKebabCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(kebabCase.result);
    }
  );
});

describe("toPascalCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toPascalCase(%s) = %s",
    ({ input, pascalCase }) => {
      expect(
        toPascalCase(input, {
          preserveWhitespace: pascalCase.preserveWhitespace,
        })
      ).toEqual(pascalCase.result);
    }
  );
});

describe("toPascalCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toPascalCase(%s) = %s",
    ({ input, pascalCase }) => {
      expect(
        toPascalCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(pascalCase.result);
    }
  );
});

describe("toTrainCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toTrainCase(%s) = %s",
    ({ input, trainCase }) => {
      expect(
        toTrainCase(input, {
          preserveWhitespace: trainCase.preserveWhitespace,
        })
      ).toEqual(trainCase.result);
    }
  );
});

describe("toTrainCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toTrainCase(%s) = %s",
    ({ input, trainCase }) => {
      expect(
        toTrainCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(trainCase.result);
    }
  );
});

describe("toTitleCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toTitleCase(%s) = %s",
    ({ input, titleCase }) => {
      expect(
        toTitleCase(input, {
          preserveWhitespace: titleCase.preserveWhitespace,
        })
      ).toEqual(titleCase.result);
    }
  );
});

describe("toTitleCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toTitleCase(%s) = %s",
    ({ input, titleCase }) => {
      expect(
        toTitleCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(titleCase.result);
    }
  );
});

describe("toConstantCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toConstantCase(%s) = %s",
    ({ input, constantCase }) => {
      expect(
        toConstantCase(input, {
          preserveWhitespace: constantCase.preserveWhitespace,
        })
      ).toEqual(constantCase.result);
    }
  );
});

describe("toConstantCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toConstantCase(%s) = %s",
    ({ input, constantCase }) => {
      expect(
        toConstantCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(constantCase.result);
    }
  );
});

describe("toDotCase - Whitespaces", () => {
  test.each(whitespaceTestCases)("toDotCase(%s) = %s", ({ input, dotCase }) => {
    expect(
      toDotCase(input, {
        preserveWhitespace: dotCase.preserveWhitespace,
      })
    ).toEqual(dotCase.result);
  });
});

describe("toDotCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toDotCase(%s) = %s",
    ({ input, dotCase }) => {
      expect(
        toDotCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(dotCase.result);
    }
  );
});

describe("toPathCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toPathCase(%s) = %s",
    ({ input, pathCase }) => {
      expect(
        toPathCase(input, {
          preserveWhitespace: pathCase.preserveWhitespace,
        })
      ).toEqual(pathCase.result);
    }
  );
});

describe("toPathCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toPathCase(%s) = %s",
    ({ input, pathCase }) => {
      expect(
        toPathCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(pathCase.result);
    }
  );
});

describe("toSentenceCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toSentenceCase(%s) = %s",
    ({ input, sentenceCase }) => {
      expect(
        toSentenceCase(input, {
          preserveWhitespace: sentenceCase.preserveWhitespace,
        })
      ).toEqual(sentenceCase.result);
    }
  );
});

describe("toSentenceCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toSentenceCase(%s) = %s",
    ({ input, sentenceCase }) => {
      expect(
        toSentenceCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(sentenceCase.result);
    }
  );
});

describe("toMacroCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toMacroCase(%s) = %s",
    ({ input, macroCase }) => {
      expect(
        toMacroCase(input, {
          preserveWhitespace: macroCase.preserveWhitespace,
        })
      ).toEqual(macroCase.result);
    }
  );
});

describe("toMacroCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toMacroCase(%s) = %s",
    ({ input, macroCase }) => {
      expect(
        toMacroCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(macroCase.result);
    }
  );
});

describe("toFlatCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toFlatCase(%s) = %s",
    ({ input, flatCase }) => {
      expect(
        toFlatCase(input, {
          preserveWhitespace: flatCase.preserveWhitespace,
        })
      ).toEqual(flatCase.result);
    }
  );
});

describe("toFlatCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toFlatCase(%s) = %s",
    ({ input, flatCase }) => {
      expect(
        toFlatCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(flatCase.result);
    }
  );
});

describe("toSwapCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toSwapCase(%s) = %s",
    ({ input, swapCase }) => {
      expect(
        toSwapCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: false,
        })
      ).toEqual(swapCase.result);
    }
  );
});

describe("toSwapCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toSwapCase(%s) = %s",
    ({ input, swapCase }) => {
      expect(
        toSwapCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(swapCase.result);
    }
  );
});

describe("toSpongeCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toSpongeCase(%s) = %s",
    ({ input, spongeCase }) => {
      expect(
        toSpongeCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: false,
        })
      ).toEqual(spongeCase.result);
    }
  );
});

describe("toSpongeCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toSpongeCase(%s) = %s",
    ({ input, spongeCase }) => {
      expect(
        toSpongeCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(spongeCase.result);
    }
  );
});

describe("toLowerCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toLowerCase(%s) = %s",
    ({ input, lowerCase }) => {
      expect(
        toLowerCase(input, {
          preserveWhitespace: lowerCase.preserveWhitespace,
        })
      ).toEqual(lowerCase.result);
    }
  );
});

describe("toLowerCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toLowerCase(%s) = %s",
    ({ input, lowerCase }) => {
      expect(
        toLowerCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(lowerCase.result);
    }
  );
});

describe("toUpperCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toUpperCase(%s) = %s",
    ({ input, upperCase }) => {
      expect(
        toUpperCase(input, {
          preserveWhitespace: upperCase.preserveWhitespace,
        })
      ).toEqual(upperCase.result);
    }
  );
});

describe("toUpperCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toUpperCase(%s) = %s",
    ({ input, upperCase }) => {
      expect(
        toUpperCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(upperCase.result);
    }
  );
});

describe("toCobolCase - Whitespaces", () => {
  test.each(whitespaceTestCases)(
    "toCobolCase(%s) = %s",
    ({ input, cobolCase }) => {
      expect(
        toCobolCase(input, {
          preserveWhitespace: cobolCase.preserveWhitespace,
        })
      ).toEqual(cobolCase.result);
    }
  );
});

describe("toCobolCase - Whitespaces & Special Characters", () => {
  test.each(whitespaceAndSpecialCharacterTestCases)(
    "toCobolCase(%s) = %s",
    ({ input, cobolCase }) => {
      expect(
        toCobolCase(input, {
          preserveWhitespace: true,
          preserveSpecialCharacters: true,
        })
      ).toEqual(cobolCase.result);
    }
  );
});
