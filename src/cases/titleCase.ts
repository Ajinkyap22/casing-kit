/**
 * Converts a string to title case.
 *
 * Examples:
 * "hello world" -> "Hello World"
 * "hello-world" -> "Hello World"
 * "HELLO_WORLD" -> "Hello World"
 *
 * @param input The input string.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The title case version of the string.
 */
export function toTitleCase(
  input: string,
  options: { preserveSpecialCharacters?: boolean } = {}
): string {
  if (!input.trim()) return "";

  if (options.preserveSpecialCharacters) {
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
