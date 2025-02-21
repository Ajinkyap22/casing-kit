/**
 * Converts a string to COBOL case.
 *
 * Examples:
 * "HelloWorld" -> "HELLO-WORLD"
 * "HELLO_WORLD" -> "HELLO-WORLD"
 * "hello-world" -> "HELLO-WORLD"
 *
 * @param input - The input string to convert.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The input string in COBOL case.
 */
export function toCobolCase(
  input: string,
  options: { preserveSpecialCharacters?: boolean } = {}
): string {
  if (!input.trim()) return "";

  if (options.preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) {
          return part.replace(/\s+/g, "");
        }
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
