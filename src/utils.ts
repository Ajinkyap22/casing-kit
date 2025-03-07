import type {
  CasingFunction,
  CustomTransformOptions,
  TransformOptions,
} from "./types.js";

/**
 * Transforms the keys and values of an object using a casing function
 * @param input The object to transform
 * @param casingFunction The function to use for casing
 * @param options The options for the transformation
 * @returns The transformed object
 */
export function transformObjectCasing<T>(
  input: T,
  casingFunction: CasingFunction,
  options: TransformOptions = { transformKeys: true, transformValues: false }
): T {
  if (Array.isArray(input)) {
    return input.map((item) =>
      typeof item === "string" && options.transformValues
        ? casingFunction(item)
        : transformObjectCasing(item, casingFunction, options)
    ) as T;
  }

  if (input instanceof Date) return input;

  if (typeof input === "object" && input !== null) {
    return Object.entries(input).reduce((acc, [key, value]) => {
      const newKey = options.transformKeys ? casingFunction(key) : key;

      const newValue =
        value instanceof Date
          ? value
          : typeof value === "object" && value !== null
          ? transformObjectCasing(value, casingFunction, options)
          : options.transformValues && typeof value === "string"
          ? casingFunction(value)
          : value;

      return { ...acc, [newKey]: newValue };
    }, {} as T);
  }

  return input;
}

/**
 * Applies a custom transformation function to each word in a given string
 * @param input The string to be transformed
 * @param transformer A function that takes a word and its index, then returns the transformed word
 * @param options Configuration options for transformation
 * @returns The transformed string
 */
export function customTransform(
  input: string,
  transformer: (word: string, index: number) => string,
  options?: CustomTransformOptions
): string {
  if (!input) return "";

  const {
    separator = /[\s\-_]/,
    preserveSpecialCharacters = false,
    preserveWhitespace = false,
    outputSeparator = "",
  } = options || {};

  if (preserveSpecialCharacters) {
    if (preserveWhitespace) {
      const parts = [];
      let currentPart = "";
      let inWhitespace = false;

      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const isWhitespace = /\s/.test(char);

        if (isWhitespace !== inWhitespace) {
          if (currentPart) {
            parts.push({ text: currentPart, isWhitespace: inWhitespace });
            currentPart = "";
          }
          inWhitespace = isWhitespace;
        }

        currentPart += char;
      }

      if (currentPart) {
        parts.push({ text: currentPart, isWhitespace: inWhitespace });
      }

      let wordIndex = 0;

      return parts
        .map((part) => {
          if (part.isWhitespace) return part.text;

          const separatorRegex =
            separator instanceof RegExp
              ? new RegExp(`(${separator.source})`, separator.flags)
              : new RegExp(
                  `(${separator.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
                  "g"
                );

          const tokens = part.text
            .split(separatorRegex)
            .filter((t) => t !== "");

          return tokens
            .map((token) => {
              const isSeparator =
                separator instanceof RegExp
                  ? separator.test(token) &&
                    token.match(separator)?.[0] === token
                  : token === separator;

              return isSeparator ? token : transformer(token, wordIndex++);
            })
            .join("");
        })
        .join("");
    } else {
      const separatorRegex =
        separator instanceof RegExp
          ? new RegExp(`(${separator.source})`, separator.flags)
          : new RegExp(
              `(${separator.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
              "g"
            );

      const tokens = input.split(separatorRegex).filter((t) => t !== "");

      let wordIndex = 0;

      return tokens
        .map((token) => {
          const isSeparator =
            separator instanceof RegExp
              ? separator.test(token) && token.match(separator)?.[0] === token
              : token === separator;

          if (isSeparator) return token;

          return transformer(token, wordIndex++);
        })
        .join("");
    }
  } else {
    const words = input.split(separator).filter((word) => word.trim() !== "");
    const transformedWords = words.map(transformer);

    if (preserveWhitespace) {
      const wordPositions = [];
      let match;
      const wordRegex = /\S+/g;

      while ((match = wordRegex.exec(input)) !== null) {
        wordPositions.push({
          start: match.index,
          end: match.index + match[0].length,
          original: match[0],
        });
      }

      let result = "";
      let lastEnd = 0;

      for (let i = 0; i < wordPositions.length; i++) {
        const { start, end } = wordPositions[i];

        result += input.substring(lastEnd, start);
        result += transformedWords[i] || "";
        lastEnd = end;
      }

      result += input.substring(lastEnd);

      return result;
    } else {
      return transformedWords.join(outputSeparator);
    }
  }
}
