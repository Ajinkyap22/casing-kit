/**
 * Converts a string to PascalCase.
 *
 * Examples:
 * "hello world" -> "HelloWorld"
 * "hello-world" -> "HelloWorld"
 * "HELLO_WORLD" -> "HelloWorld"
 *
 * @param input The input string.
 * @returns The PascalCase version of the string.
 */
export function toPascalCase(input: string): string {
  if (!input.trim()) return "";
  
  return input
    .replace(/([A-Z])([a-z])/g, " $1$2")
    .replace(/([^\w\s]|_)+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
