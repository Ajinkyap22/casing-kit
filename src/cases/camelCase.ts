/**
 * Converts a string to camelCase.
 *
 * Examples:
 * "hello world" -> "helloWorld"
 * "hello-world" -> "helloWorld"
 * "HELLO_WORLD" -> "helloWorld"
 *
 * @param input The input string.
 * @returns The camelCase version of the string.
 */
export function toCamelCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+|(?=[A-Z][a-z])/)
    .map((part, index) =>
      index === 0
        ? part.toLowerCase()
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join("");
}
