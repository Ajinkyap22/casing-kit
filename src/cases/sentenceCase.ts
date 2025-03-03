/**
 * Converts a string to Sentence case.
 *
 * Examples:
 * "hello world" -> "Hello world"
 * "hello-world" -> "Hello world"
 * "HELLO_WORLD" -> "Hello world"
 *
 * @param input The input string.
 * @param options.preserveWhitespace When true, preserves all whitespace (leading, trailing, and internal).
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The Sentence case version of the string.
 */
export function toSentenceCase(
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

    const processed = content
      .toLowerCase()
      .replace(/^[a-z]/, (c) => c.toUpperCase());

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content
      .replace(/[^a-zA-Z0-9\s]+/g, " ")
      .toLowerCase()
      .replace(/^[a-z]/, (c) => c.toUpperCase());

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part, index) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part;

        const processed = part
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/[_\s]+/g, " ")
          .toLowerCase();

        return index === 0 || parts[index - 1].includes("\n")
          ? processed.charAt(0).toUpperCase() + processed.slice(1)
          : processed;
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
}
