/**
 * Converts a string to path case.
 *
 * Examples:
 * "helloWorld" -> "hello/world"
 * "HelloWorld" -> "hello/world"
 * "hello-world" -> "hello/world"
 *
 * @param input - The input string to convert.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The input string in path case.
 */
export function toPathCase(
  input: string,
  options: { preserveSpecialCharacters?: boolean } = {}
): string {
  if (!input.trim()) return "";

  if (options.preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part.replace(/\s+/g, "");

        return part
          .replace(/([a-z])([A-Z])/g, "$1/$2")
          .replace(/[_\s]+/g, "/")
          .toLowerCase();
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1/$2")
    .replace(/[^a-zA-Z0-9]+/g, "/")
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();
}
