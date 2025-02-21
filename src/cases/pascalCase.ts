/**
 * Converts a string to PascalCase.
 *
 * Examples:
 * "hello world" -> "HelloWorld"
 * "hello-world" -> "HelloWorld"
 * "HELLO_WORLD" -> "HelloWorld"
 *
 * @param input The input string.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The PascalCase version of the string.
 */
export function toPascalCase(
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
          .join("");
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
