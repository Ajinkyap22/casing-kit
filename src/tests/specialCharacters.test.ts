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
import { toSpongeCase } from "../cases/spongeCase.js";
import { toCobolCase } from "../cases/cobolCase.js";

import { specialCharacterTestCases } from "./testCases.js";

import { describe, test, expect } from "vitest";

describe("toCamelCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toCamelCase(%s) = %s",
    ({ input, camelCase }) => {
      expect(
        toCamelCase(input, {
          preserveSpecialCharacters: camelCase.preserveSpecialCharacters,
        })
      ).toEqual(camelCase.result);
    }
  );
});

describe("toSnakeCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toSnakeCase(%s) = %s",
    ({ input, snakeCase }) => {
      expect(
        toSnakeCase(input, {
          preserveSpecialCharacters: snakeCase.preserveSpecialCharacters,
        })
      ).toEqual(snakeCase.result);
    }
  );
});

describe("toKebabCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toKebabCase(%s) = %s",
    ({ input, kebabCase }) => {
      expect(
        toKebabCase(input, {
          preserveSpecialCharacters: kebabCase.preserveSpecialCharacters,
        })
      ).toEqual(kebabCase.result);
    }
  );
});

describe("toPascalCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toPascalCase(%s) = %s",
    ({ input, pascalCase }) => {
      expect(
        toPascalCase(input, {
          preserveSpecialCharacters: pascalCase.preserveSpecialCharacters,
        })
      ).toEqual(pascalCase.result);
    }
  );
});

describe("toTrainCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toTrainCase(%s) = %s",
    ({ input, trainCase }) => {
      expect(
        toTrainCase(input, {
          preserveSpecialCharacters: trainCase.preserveSpecialCharacters,
        })
      ).toEqual(trainCase.result);
    }
  );
});

describe("toTitleCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toTitleCase(%s) = %s",
    ({ input, titleCase }) => {
      expect(
        toTitleCase(input, {
          preserveSpecialCharacters: titleCase.preserveSpecialCharacters,
        })
      ).toEqual(titleCase.result);
    }
  );
});

describe("toConstantCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toConstantCase(%s) = %s",
    ({ input, constantCase }) => {
      expect(
        toConstantCase(input, {
          preserveSpecialCharacters: constantCase.preserveSpecialCharacters,
        })
      ).toEqual(constantCase.result);
    }
  );
});

describe("toDotCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toDotCase(%s) = %s",
    ({ input, dotCase }) => {
      expect(
        toDotCase(input, {
          preserveSpecialCharacters: dotCase.preserveSpecialCharacters,
        })
      ).toEqual(dotCase.result);
    }
  );
});

describe("toPathCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toPathCase(%s) = %s",
    ({ input, pathCase }) => {
      expect(
        toPathCase(input, {
          preserveSpecialCharacters: pathCase.preserveSpecialCharacters,
        })
      ).toEqual(pathCase.result);
    }
  );
});

describe("toSentenceCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toSentenceCase(%s) = %s",
    ({ input, sentenceCase }) => {
      expect(
        toSentenceCase(input, {
          preserveSpecialCharacters: sentenceCase.preserveSpecialCharacters,
        })
      ).toEqual(sentenceCase.result);
    }
  );
});

describe("toMacroCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toMacroCase(%s) = %s",
    ({ input, macroCase }) => {
      expect(
        toMacroCase(input, {
          preserveSpecialCharacters: macroCase.preserveSpecialCharacters,
        })
      ).toEqual(macroCase.result);
    }
  );
});

describe("toFlatCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toFlatCase(%s) = %s",
    ({ input, flatCase }) => {
      expect(
        toFlatCase(input, {
          preserveSpecialCharacters: flatCase.preserveSpecialCharacters,
        })
      ).toEqual(flatCase.result);
    }
  );
});

describe("toSpongeCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toSpongeCase(%s) = %s",
    ({ input, spongeCase }) => {
      expect(
        toSpongeCase(input, {
          preserveSpecialCharacters: spongeCase.preserveSpecialCharacters,
        })
      ).toEqual(spongeCase.result);
    }
  );
});

describe("toCobolCase - Special Characters", () => {
  test.each(specialCharacterTestCases)(
    "toCobolCase(%s) = %s",
    ({ input, cobolCase }) => {
      expect(
        toCobolCase(input, {
          preserveSpecialCharacters: cobolCase.preserveSpecialCharacters,
        })
      ).toEqual(cobolCase.result);
    }
  );
});
