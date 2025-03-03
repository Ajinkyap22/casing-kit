/**
 * Converts a string to COBOL case.
 *
 * Examples:
 * "HelloWorld" -> "HELLO-WORLD"
 * "HELLO_WORLD" -> "HELLO-WORLD"
 * "hello-world" -> "HELLO-WORLD"
 *
 * @param input - The string to convert.
 * @param options.preserveWhitespace When true, preserves leading/trailing whitespace.
 *                                  Internal whitespace is handled as per COBOL case rules.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The string in COBOL case.
 */
export function toCobolCase(
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
        const cobolCased = words.replace(/\s+/g, "-").toUpperCase();
        return `${startSpace}${cobolCased}${endSpace}${specialChar}${afterSpace}`;
      }
    );

    // Handle the last group of words
    const finalProcessed = processed.replace(
      /(\s*)([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+)*)(\s*)$/g,
      (_, startSpace, words, endSpace) => {
        const cobolCased = words.replace(/\s+/g, "-").toUpperCase();
        return `${startSpace}${cobolCased}${endSpace}`;
      }
    );

    return `${leadingSpace}${finalProcessed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content.replace(/[^a-zA-Z0-9]+/g, "-").toUpperCase();

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part.replace(/\s+/g, "");

        return part
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[_\s]+/g, "-")
          .toUpperCase();
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase();
}
