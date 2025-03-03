/**
 * Converts a string to Title Case.
 *
 * Examples:
 * "hello world" -> "Hello World"
 * "hello-world" -> "Hello World"
 * "HELLO_WORLD" -> "Hello World"
 *
 * @param input The input string.
 * @param options.preserveWhitespace When true, preserves all whitespace (leading, trailing, and internal).
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The Title Case version of the string.
 */
export function toTitleCase(
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
      /([a-zA-Z0-9]+)/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content
      .replace(/[^a-zA-Z0-9\s]+/g, " ")
      .replace(
        /([a-zA-Z0-9]+)/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part;

        return part
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/[_\s]+/g, " ")
          .trim()
          .split(/\s+/)
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ");
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([^\w\s]|_)+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
