/**
 * Converts a string to sponge case.
 *
 * Examples:
 * "HelloWorld" -> "hElLo WoRlD"
 * "HELLO_WORLD" -> "hElLo WoRlD"
 * "hello - world_test" -> "hElLo - WoRlD_tEsT"
 *
 * @param input - The string to convert.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The string in sponge case.
 */
export function toSpongeCase(
  input: string,
  options: { preserveSpecialCharacters?: boolean } = {}
): string {
  if (!input.trim()) return "";

  if (options.preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);
    let upper = false;

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) {
          return part;
        }
        return part
          .split("")
          .map((char) => {
            if (/[a-zA-Z]/.test(char)) {
              const transformed = upper
                ? char.toUpperCase()
                : char.toLowerCase();
              upper = !upper;
              return transformed;
            }
            return char;
          })
          .join("");
      })
      .join("");
  }

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
