import { customTransform } from "../utils.js";

import { customTransformTestCases } from "./testCases.js";

import { describe, it, expect } from "vitest";

describe("customTransform", () => {
  customTransformTestCases.forEach(
    ({ name, input, transformer, options, expected }) => {
      it(`should handle ${name}`, () => {
        const result = customTransform(input, transformer, options);
        expect(result).toBe(expected);
      });
    }
  );
});
