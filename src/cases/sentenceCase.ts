/**
 * Converts a string to sentence case.
 *
 * Examples:
 * "hello-world" -> "Hello world"
 * "HELLO_WORLD" -> "Hello world"
 * "hello123world" -> "Hello 123 world"
 *
 * @param input - The input string to convert.
 * @returns The input string in sentence case.
 */
export function toSentenceCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
}
