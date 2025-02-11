/**
 * Converts a string to COBOL case.
 *
 * Examples:
 * "HelloWorld" -> "HELLO-WORLD"
 * "HELLO_WORLD" -> "HELLO-WORLD"
 * "hello-world" -> "HELLO-WORLD"
 *
 * @param input - The input string to convert.
 * @returns The input string in COBOL case.
 */
export function toCobolCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[_\s-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase();
}
