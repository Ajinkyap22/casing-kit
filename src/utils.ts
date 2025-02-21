import { CasingFunction, TransformOptions } from "./types.js";

export function transformObjectCasing<T>(
  input: T,
  casingFunction: CasingFunction,
  options: TransformOptions = { transformKeys: true, transformValues: false }
): T {
  if (Array.isArray(input)) {
    return input.map((item) =>
      typeof item === "string" && options.transformValues
        ? casingFunction(item)
        : transformObjectCasing(item, casingFunction, options)
    ) as T;
  }

  if (input instanceof Date) return input;

  if (typeof input === "object" && input !== null) {
    return Object.entries(input).reduce((acc, [key, value]) => {
      const newKey = options.transformKeys ? casingFunction(key) : key;

      const newValue =
        value instanceof Date
          ? value
          : typeof value === "object" && value !== null
          ? transformObjectCasing(value, casingFunction, options)
          : options.transformValues && typeof value === "string"
          ? casingFunction(value)
          : value;

      return { ...acc, [newKey]: newValue };
    }, {} as T);
  }

  return input;
}
