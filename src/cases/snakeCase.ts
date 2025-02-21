/**
 * Converts a string to snake_case.
 *
 * Examples:
 * "hello world" -> "hello_world"
 * "hello-world" -> "hello_world"
 * "HELLO_WORLD" -> "hello_world"
 *
 * @param input The input string.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The snake_case version of the string.
 */
export function toSnakeCase(
  input: string,
  options: { preserveSpecialCharacters?: boolean } = {}
): string {
  if (!input.trim()) return "";

  if (options.preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part.replace(/\s+/g, "_");

        return part
          .replace(/([a-z])([A-Z])/g, "$1_$2")
          .replace(/[_\s]+/g, "_")
          .toLowerCase();
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
}
