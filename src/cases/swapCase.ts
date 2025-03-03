/**
 * Converts a string to swap case.
 *
 * Examples:
 * "HelloWorld" -> "hELLOworld"
 * "HELLO_WORLD" -> "hello_world"
 * "hello-world" -> "HELLO-WORLD"
 *
 * @param input - The input string to convert.
 * @param options.preserveWhitespace When true, preserves all whitespace (leading, trailing, and internal).
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The input string in swap case.
 */
export function toSwapCase(
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

    const processed = content.replace(/[a-zA-Z]/g, (c) =>
      c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
    );

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content
      .replace(/[^a-zA-Z0-9\s]+/g, " ")
      .replace(/[a-zA-Z]/g, (c) =>
        c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
      );

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
    return input.replace(/[a-zA-Z]/g, (c) =>
      c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
    );
  }

  return input
    .trim()
    .replace(/([a-zA-Z])/g, (c) =>
      c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
    )
    .replace(/[\s]+/g, " ");
}
