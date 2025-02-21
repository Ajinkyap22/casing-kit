/**
 * Converts a string to sentence case.
 *
 * Examples:
 * "hello-world" -> "Hello world"
 * "HELLO_WORLD" -> "Hello world"
 * "hello123world" -> "Hello 123 world"
 *
 * @param input - The input string to convert.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The input string in sentence case.
 */
export function toSentenceCase(
  input: string,
  options: { preserveSpecialCharacters?: boolean } = {}
): string {
  if (!input.trim()) return "";

  if (options.preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part, index) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part;

        const processed = part
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/[_\s]+/g, " ")
          .toLowerCase();

        return index === 0 || parts[index - 1].includes("\n")
          ? processed.charAt(0).toUpperCase() + processed.slice(1)
          : processed;
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
}
