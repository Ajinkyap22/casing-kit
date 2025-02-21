/**
 * Converts a string to constant case.
 *
 * Examples:
 * "HelloWorld" -> "HELLO_WORLD"
 * "HELLO_WORLD" -> "HELLO_WORLD"
 * "hello-world" -> "HELLO_WORLD"
 *
 * @param input - The input string to convert.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The input string in constant case.
 */
export function toConstantCase(
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
          .replace(/([a-z])([A-Z])/g, "$1_$2")
          .replace(/[_\s]+/g, "_")
          .trim()
          .toUpperCase();
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[^\w\s]|_/g, " ")
    .replace(/\s+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toUpperCase();
}
