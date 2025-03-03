/**
 * Converts a string to sponge case.
 *
 * Examples:
 * "HelloWorld" -> "hElLo WoRlD"
 * "HELLO_WORLD" -> "hElLo WoRlD"
 * "hello - world_test" -> "hElLo - WoRlD_tEsT"
 *
 * @param input - The string to convert.
 * @param options.preserveWhitespace When true, preserves all whitespace (leading, trailing, and internal).
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The string in sponge case.
 */
export function toSpongeCase(
  input: string,
  options: {
    preserveWhitespace?: boolean;
    preserveSpecialCharacters?: boolean;
  } = {}
): string {
  if (!input.trim()) return input;

  const { preserveWhitespace, preserveSpecialCharacters } = options;

  if (preserveWhitespace && preserveSpecialCharacters) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    let upper = false;
    const processed = content.replace(/[a-zA-Z]/g, (c) => {
      const transformed = upper ? c.toUpperCase() : c.toLowerCase();
      upper = !upper;
      return transformed;
    });

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    let upper = false;
    const processed = content
      .replace(/[^a-zA-Z0-9\s]+/g, " ")
      .replace(/[a-zA-Z]/g, (c) => {
        const transformed = upper ? c.toUpperCase() : c.toLowerCase();
        upper = !upper;
        return transformed;
      });

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
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
