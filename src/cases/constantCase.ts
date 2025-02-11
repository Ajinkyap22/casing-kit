/**
 * Converts a string to constant case.
 *
 * Examples:
 * "HelloWorld" -> "HELLO_WORLD"
 * "HELLO_WORLD" -> "HELLO_WORLD"
 * "hello-world" -> "HELLO_WORLD"
 *
 * @param input - The input string to convert.
 * @returns The input string in constant case.
 */
export function toConstantCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[_\s-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toUpperCase();
}
