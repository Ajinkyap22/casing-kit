/**
 * Converts a string to train case.
 *
 * Example:
 * "hello world" -> "Hello-World"
 * "hello-world" -> "Hello-World"
 * "HELLO_WORLD" -> "Hello-World"
 *
 * @param input The input string.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The train case version of the string.
 */
export function toTrainCase(
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
          .replace(/([A-Z])([a-z])/g, " $1$2")
          .replace(/[_\s]+/g, " ")
          .trim()
          .split(/\s+/)
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join("-");
      })
      .join("");
  }

  return input
    .replace(/([A-Z])([a-z])/g, " $1$2")
    .replace(/([^\w\s]|_)+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("-");
}
