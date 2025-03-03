/**
 * Converts a string to camelCase.
 *
 * Examples:
 * "hello world" -> "helloWorld"
 * "hello-world" -> "helloWorld"
 * "HELLO_WORLD" -> "helloWorld"
 *
 * @param input The input string.
 * @param options.preserveWhitespace When true, preserves leading/trailing whitespace.
 *                                  Internal whitespace is handled as per camelCase rules.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The camelCase version of the string.
 */
export function toCamelCase(
  input: string,
  options: {
    preserveWhitespace?: boolean;
    preserveSpecialCharacters?: boolean;
  } = {}
): string {
  if (!input.trim()) return input;

  const { preserveWhitespace, preserveSpecialCharacters } = options;

  if (preserveWhitespace && preserveSpecialCharacters) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content.replace(
      /(\s*)([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+)*)(\s*)([^a-zA-Z0-9]+)(\s*)/g,
      (_, startSpace, words, endSpace, specialChar, afterSpace) => {
        const camelCased = words
          .split(/\s+/)
          .map((word: string, index: number) =>
            index === 0
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join("");
        return `${startSpace}${camelCased}${endSpace}${specialChar}${afterSpace}`;
      }
    );

    const finalProcessed = processed.replace(
      /(\s*)([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+)*)(\s*)$/g,
      (_, startSpace, words, endSpace) => {
        const camelCased = words
          .split(/\s+/)
          .map((word: string, index: number) =>
            index === 0
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join("");
        return `${startSpace}${camelCased}${endSpace}`;
      }
    );

    return `${leadingSpace}${finalProcessed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content
      .replace(/\s+/g, " ")
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .trim()
      .split(/\s+/)
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("");

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part.replace(/\s+/g, "");

        return part
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/[_\s]+/g, " ")
          .trim()
          .split(/\s+/)
          .map((word, index) =>
            index === 0
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join("");
      })
      .join("");
  }

  return input
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+|(?=[A-Z][a-z])/)
    .map((part, index) =>
      index === 0
        ? part.toLowerCase()
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join("");
}
