/**
 * Converts a string to lower case.
 *
 * Examples:
 * "HelloWorld" -> "helloworld"
 * "HELLO_WORLD" -> "helloworld"
 * "hello-world" -> "hello-world"
 *
 * @param input - The string to convert.
 * @returns The string in lower case.
 */
export function toLowerCase(input: string): string {
  if (!input.trim()) return "";

  return input.trim().replace(/\s+/g, " ").toLowerCase();
}
