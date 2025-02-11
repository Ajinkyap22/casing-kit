/**
 * Converts a string to kebab-case.
 *
 * Examples:
 * "hello world" -> "hello-world"
 * "hello-world" -> "hello-world"
 * "HELLO_WORLD" -> "hello-world"
 *
 * @param input The input string.
 * @returns The kebab-case version of the string.
 */
export function toKebabCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+|(?=[A-Z][a-z])/)
    .map((part) => part.toLowerCase())
    .join("-");
}
