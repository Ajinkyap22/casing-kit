/**
 * Converts a string to snake_case.
 *
 * Examples:
 * "hello world" -> "hello_world"
 * "hello-world" -> "hello_world"
 * "HELLO_WORLD" -> "hello_world"
 *
 * @param input The input string.
 * @returns The snake_case version of the string.
 */
export function toSnakeCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+|(?=[A-Z][a-z])/)
    .map((part) => part.toLowerCase())
    .join("_");
}
