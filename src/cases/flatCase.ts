/**
 * Converts a string to flat case.
 *
 * Examples:
 * "HelloWorld" -> "helloworld"
 * "HELLO_WORLD" -> "helloworld"
 * "hello-world" -> "helloworld"
 *
 * @param input - The input string to convert.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The input string in flat case.
 */
export function toFlatCase(
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
          .replace(/([a-z])([A-Z])/g, "$1$2")
          .replace(/[_\s]+/g, "")
          .toLowerCase();
      })
      .join("");
  }

  return input.replace(/[\s\W_]+/g, "").toLowerCase();
}
