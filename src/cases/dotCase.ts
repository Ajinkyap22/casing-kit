/**
 * Converts a string to dot.case.
 *
 * Examples:
 * "hello world" -> "hello.world"
 * "hello-world" -> "hello.world"
 * "HELLO_WORLD" -> "hello.world"
 *
 * @param input The input string.
 * @param options.preserveWhitespace When true, preserves leading/trailing whitespace.
 *                                  Internal whitespace is handled as per dot.case rules.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The dot.case version of the string.
 */
export function toDotCase(
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
        const dotCased = words.replace(/\s+/g, ".").toLowerCase();
        return `${startSpace}${dotCased}${endSpace}${specialChar}${afterSpace}`;
      }
    );

    const finalProcessed = processed.replace(
      /(\s*)([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+)*)(\s*)$/g,
      (_, startSpace, words, endSpace) => {
        const dotCased = words.replace(/\s+/g, ".").toLowerCase();
        return `${startSpace}${dotCased}${endSpace}`;
      }
    );

    return `${leadingSpace}${finalProcessed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content.replace(/[^a-zA-Z0-9]+/g, ".").toLowerCase();

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part;

        return part
          .replace(/([a-z])([A-Z])/g, "$1.$2")
          .replace(/[_\s]+/g, ".")
          .toLowerCase();
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1.$2")
    .replace(/[^a-zA-Z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "")
    .toLowerCase();
}
