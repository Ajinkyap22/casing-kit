/**
 * Converts a string to upper case.
 *
 * Examples:
 * "HelloWorld" -> "HELLOWORLD"
 * "HELLO_WORLD" -> "HELLOWORLD"
 * "hello-world" -> "HELLO-WORLD"
 *
 * @param input - The string to convert.
 * @param options.preserveWhitespace When true, preserves all whitespace (leading, trailing, and internal).
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The string in upper case.
 */
export function toUpperCase(
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

    const processed = content.toUpperCase();

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content.replace(/[^a-zA-Z0-9\s]+/g, " ").toUpperCase();

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
    return input.toUpperCase();
  }

  return input.trim().replace(/\s+/g, " ").toUpperCase();
}
