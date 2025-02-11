/**
 * Converts a string to flat case.
 *
 * Examples:
 * "HelloWorld" -> "helloworld"
 * "HELLO_WORLD" -> "helloworld"
 * "hello-world" -> "helloworld"
 *
 * @param input - The input string to convert.
 * @returns The input string in flat case.
 */
export function toFlatCase(input: string): string {
  if (!input.trim()) return "";
  
  return input.replace(/[\s\W_]+/g, "").toLowerCase();
}
