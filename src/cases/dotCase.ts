/**
 * Converts a string to dot case.
 *
 * Examples:
 * "helloWorld" -> "hello.world"
 * "HelloWorld" -> "hello.world"
 * "hello-world" -> "hello.world"
 *
 * @param input - The input string to convert.
 * @returns The input string in dot case.
 */
export function toDotCase(input: string): string {
  if (!input.trim()) return "";

  return input
    .replace(/([a-z])([A-Z])/g, "$1.$2")
    .replace(/[_\s-]+/g, ".")
    .replace(/^\.+|\.+$/g, "")
    .toLowerCase();
}
