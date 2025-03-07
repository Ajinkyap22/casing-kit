/**
 * Function that transforms a string to a specific casing
 * @param str The string to transform
 * @returns The transformed string
 */
export type CasingFunction = (str: string) => string;

/**
 * Options for transforming object keys and values
 */
export type TransformOptions = {
  /** Transforms object keys. Default: true */
  transformKeys?: boolean;
  /** Transforms object values. Default: false */
  transformValues?: boolean;
};

/**
 * Options for custom string transformation
 */
export interface CustomTransformOptions {
  /** Defines how the input string is split into words. Default: /[\s\-_]/ */
  separator?: string | RegExp;
  /** Keeps special characters in the final result. Default: false */
  preserveSpecialCharacters?: boolean;
  /** Keeps leading/trailing/multiple spaces. Default: false */
  preserveWhitespace?: boolean;
  /** Separator to use when joining transformed words (only used when preserveSpecialCharacters is false). Default: "" */
  outputSeparator?: string;
}
