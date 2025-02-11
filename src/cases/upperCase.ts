/**
 * Converts a string to upper case.
 *
 * Examples:
 * "HelloWorld" -> "HELLOWORLD"
 * "HELLO_WORLD" -> "HELLOWORLD"
 * "hello-world" -> "HELLO-WORLD"
 *
 * @param input - The string to convert.
 * @returns The string in upper case.
 */
export function toUpperCase(input: string): string {
  if (!input.trim()) return "";

  return input.trim().replace(/\s+/g, " ").toUpperCase();
}
