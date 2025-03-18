# casing-kit

A lightweight, zero-dependency utility library for case transformations in JavaScript and TypeScript.

[![npm version](https://img.shields.io/npm/v/casing-kit.svg)](https://www.npmjs.com/package/casing-kit)
[![license](https://img.shields.io/npm/l/casing-kit.svg)](https://github.com/Ajinkyap22/casing-kit/blob/main/LICENSE)

## Features

- :arrows_counterclockwise: Convert between 15+ different case formats
- :dart: Precise control over transformation behavior
- :mag: Intelligent handling of special characters and edge cases
- :package: Zero dependencies
- :globe_with_meridians: Works in Node.js and browsers
- :memo: Written in TypeScript with full type definitions

## Installation

```bash
# Using npm
npm install casing-kit

# Using yarn
yarn add casing-kit

# Using pnpm
pnpm add casing-kit
```

## Basic Usage

```javascript
import { toCamelCase, toSnakeCase, toKebabCase } from "casing-kit";

toCamelCase("hello world"); // 'helloWorld'
toSnakeCase("helloWorld"); // 'hello_world'
toKebabCase("hello-world"); // 'hello-world'
```

## Available Case Transformations

| Function           | Description                            | Example                           |
| ------------------ | -------------------------------------- | --------------------------------- |
| `toCamelCase()`    | First word lowercase, rest capitalized | `"hello world"` → `"helloWorld"`  |
| `toCobolCase()`    | Uppercase with hyphens                 | `"helloWorld"` → `"HELLO-WORLD"`  |
| `toConstantCase()` | Uppercase with underscores             | `"helloWorld"` → `"HELLO_WORLD"`  |
| `toDotCase()`      | Lowercase with dots                    | `"helloWorld"` → `"hello.world"`  |
| `toFlatCase()`     | All lowercase, no separators           | `"Hello-World"` → `"helloworld"`  |
| `toKebabCase()`    | Lowercase with hyphens                 | `"helloWorld"` → `"hello-world"`  |
| `toLowerCase()`    | All lowercase                          | `"Hello World"` → `"hello world"` |
| `toPascalCase()`   | All words capitalized                  | `"hello world"` → `"HelloWorld"`  |
| `toPathCase()`     | Lowercase with slashes                 | `"helloWorld"` → `"hello/world"`  |
| `toSentenceCase()` | First letter capitalized               | `"helloWorld"` → `"Hello world"`  |
| `toSnakeCase()`    | Lowercase with underscores             | `"helloWorld"` → `"hello_world"`  |
| `toSpongeCase()`   | Alternating case                       | `"helloWorld"` → `"hElLoWoRlD"`   |
| `toSwapCase()`     | Inverted case                          | `"Hello World"` → `"hELLO wORLD"` |
| `toTitleCase()`    | First letter of each word capitalized  | `"hello world"` → `"Hello World"` |
| `toTrainCase()`    | Capitalized with hyphens               | `"helloWorld"` → `"Hello-World"`  |
| `toUpperCase()`    | All uppercase                          | `"hello world"` → `"HELLO WORLD"` |

## Options

All case functions accept these options:

```javascript
// Preserve whitespace
toCamelCase("  hello  world  ", { preserveWhitespace: true }); // '  helloWorld  '

// Preserve special characters
toConstantCase("hello@world", { preserveSpecialCharacters: true }); // 'HELLO@WORLD'
```

## Custom Transformation Function

```javascript
// Custom transformation with options
customTransform(
  "hello-world",
  (word, index) => (index === 0 ? word : word.toUpperCase()),
  { separator: "-", outputSeparator: "." }
); // 'hello.WORLD'
```

## Transform Object Casing

```javascript
// Transform object keys to camelCase
transformObjectCasing({ user_id: 123, first_name: "John" }, toCamelCase);
// { userId: 123, firstName: "John" }

// Transform string values to snake_case
transformObjectCasing({ userId: "johnDoe" }, toSnakeCase, {
  transformKeys: false,
  transformValues: true,
});
// { userId: "john_doe" }
```

## TypeScript Support

Full TypeScript definitions included:

```typescript
import { toCamelCase, type TransformOptions } from "casing-kit";

const options: TransformOptions = {
  preserveWhitespace: true,
};

const result: string = toCamelCase("hello_world", options);
```

## Browser Support

casing-kit targets ES2018 and works in all modern browsers and Node.js environments that support this standard. For older environments that don't support ES2018, you'll need to use a transpiler like Babel with appropriate polyfills.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
