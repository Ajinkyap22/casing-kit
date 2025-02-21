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

import { transformObjectCasing } from "../utils.js";

import {
  objectTestCasesKeys,
  objectTestCasesValues,
  objectTestCasesKeysAndValues,
} from "./testCases.js";

import { expect, test, describe } from "vitest";

// Object Keys
describe("toCamelCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toCamelCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.camelCase);
    }
  );
});
describe("toSnakeCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSnakeCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.snakeCase);
    }
  );
});
describe("toKebabCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toKebabCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.kebabCase);
    }
  );
});
describe("toPascalCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toPascalCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.pascalCase);
    }
  );
});
describe("toTrainCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toTrainCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.trainCase);
    }
  );
});
describe("toTitleCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toTitleCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.titleCase);
    }
  );
});
describe("toConstantCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toConstantCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.constantCase);
    }
  );
});
describe("toDotCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toDotCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.dotCase);
    }
  );
});
describe("toPathCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toPathCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.pathCase);
    }
  );
});
describe("toSentenceCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSentenceCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.sentenceCase);
    }
  );
});
describe("toMacroCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toMacroCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.macroCase);
    }
  );
});
describe("toFlatCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toFlatCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.flatCase);
    }
  );
});
describe("toSwapCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSwapCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.swapCase);
    }
  );
});
describe("toSpongeCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSpongeCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.spongeCase);
    }
  );
});
describe("toLowerCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toLowerCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.lowerCase);
    }
  );
});
describe("toUpperCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toUpperCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.upperCase);
    }
  );
});
describe("toCobolCase - Object Keys", () => {
  test.each(objectTestCasesKeys)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toCobolCase, {
          transformKeys: true,
          transformValues: false,
        })
      ).toEqual(testCase.cobolCase);
    }
  );
});

// Object Values
describe("toCamelCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toCamelCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.camelCase);
    }
  );
});
describe("toSnakeCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSnakeCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.snakeCase);
    }
  );
});
describe("toKebabCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toKebabCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.kebabCase);
    }
  );
});
describe("toPascalCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toPascalCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.pascalCase);
    }
  );
});
describe("toTrainCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toTrainCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.trainCase);
    }
  );
});
describe("toTitleCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toTitleCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.titleCase);
    }
  );
});
describe("toConstantCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toConstantCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.constantCase);
    }
  );
});
describe("toDotCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toDotCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.dotCase);
    }
  );
});
describe("toPathCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toPathCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.pathCase);
    }
  );
});
describe("toSentenceCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSentenceCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.sentenceCase);
    }
  );
});
describe("toMacroCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toMacroCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.macroCase);
    }
  );
});
describe("toFlatCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toFlatCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.flatCase);
    }
  );
});
describe("toSwapCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSwapCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.swapCase);
    }
  );
});
describe("toSpongeCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSpongeCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.spongeCase);
    }
  );
});
describe("toLowerCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toLowerCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.lowerCase);
    }
  );
});
describe("toUpperCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toUpperCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.upperCase);
    }
  );
});
describe("toCobolCase - Object Values", () => {
  test.each(objectTestCasesValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toCobolCase, {
          transformKeys: false,
          transformValues: true,
        })
      ).toEqual(testCase.cobolCase);
    }
  );
});

// Object Keys and Values
describe("toCamelCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toCamelCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.camelCase);
    }
  );
});
describe("toSnakeCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSnakeCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.snakeCase);
    }
  );
});
describe("toKebabCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toKebabCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.kebabCase);
    }
  );
});
describe("toPascalCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toPascalCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.pascalCase);
    }
  );
});
describe("toTrainCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toTrainCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.trainCase);
    }
  );
});
describe("toConstantCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toConstantCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.constantCase);
    }
  );
});
describe("toDotCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toDotCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.dotCase);
    }
  );
});
describe("toPathCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toPathCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.pathCase);
    }
  );
});
describe("toSentenceCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSentenceCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.sentenceCase);
    }
  );
});
describe("toMacroCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toMacroCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.macroCase);
    }
  );
});
describe("toFlatCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toFlatCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.flatCase);
    }
  );
});
describe("toSwapCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSwapCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.swapCase);
    }
  );
});
describe("toSpongeCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toSpongeCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.spongeCase);
    }
  );
});
describe("toLowerCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toLowerCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.lowerCase);
    }
  );
});
describe("toUpperCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toUpperCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.upperCase);
    }
  );
});
describe("toCobolCase - Object Keys and Values", () => {
  test.each(objectTestCasesKeysAndValues)(
    "transformObjectCasing(%s) = %s",
    (testCase) => {
      expect(
        transformObjectCasing(testCase.input, toCobolCase, {
          transformKeys: true,
          transformValues: true,
        })
      ).toEqual(testCase.cobolCase);
    }
  );
});
