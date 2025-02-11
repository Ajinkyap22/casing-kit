/**
 * Converts a string to swap case.
 *
 * Examples:
 * "HelloWorld" -> "hELLOworld"
 * "HELLO_WORLD" -> "hello_world"
 * "hello-world" -> "HELLO-WORLD"
 *
 * @param input - The input string to convert.
 * @returns The input string in swap case.
 */
export function toSwapCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .trim()
    .replace(/([a-zA-Z])/g, (c) =>
      c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
    )
    .replace(/[\s]+/g, " ");
}
