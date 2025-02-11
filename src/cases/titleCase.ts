/**
 * Converts a string to title case.
 *
 * Examples:
 * "hello world" -> "Hello World"
 * "hello-world" -> "Hello World"
 * "HELLO_WORLD" -> "Hello World"
 *
 * @param input The input string.
 * @returns The title case version of the string.
 */
export function toTitleCase(input: string): string {
  if (!input.trim()) return "";
  
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
