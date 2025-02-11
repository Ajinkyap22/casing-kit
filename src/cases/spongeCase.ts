/**
 * Converts a string to sponge case.
 *
 * Examples:
 * "HelloWorld" -> "hElLo WoRlD"
 * "HELLO_WORLD" -> "hElLo WoRlD"
 * "hello - world_test" -> "hElLo - WoRlD_tEsT"
 *
 * @param input - The string to convert.
 * @returns The string in sponge case.
 */
export function toSpongeCase(input: string): string {
  if (!input.trim()) return "";

  let upper = false;

  return input
    .trim()
    .replace(/\s+/g, " ")
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        const transformed = upper ? char.toUpperCase() : char.toLowerCase();
        upper = !upper;
        return transformed;
      }
      return char;
    })
    .join("");
}
