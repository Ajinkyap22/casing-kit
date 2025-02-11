/**
 * Converts a string to train case.
 *
 * Example:
 * "hello world" -> "Hello-World"
 * "hello-world" -> "Hello-World"
 * "HELLO_WORLD" -> "Hello-World"
 *
 * @param input The input string.
 * @returns The train case version of the string.
 */
export function toTrainCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .replace(/([A-Z])([a-z])/g, " $1$2")
    .replace(/([^\w\s]|_)+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("-");
}
