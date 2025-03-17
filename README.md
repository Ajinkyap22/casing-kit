# casing-kit

A lightweight, zero-dependency utility library for case transformations in JavaScript and TypeScript.

[![npm version](https://img.shields.io/npm/v/casing-kit.svg)](https://www.npmjs.com/package/casing-kit)
[![license](https://img.shields.io/npm/l/casing-kit.svg)](https://github.com/username/casing-kit/blob/main/LICENSE)

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

// Basic transformations
toCamelCase("hello world"); // 'helloWorld'
toSnakeCase("helloWorld"); // 'hello_world'
toKebabCase("hello-world"); // 'hello-world'
```

## Available Case Transformations

### camelCase

Transforms a string to camelCase format (first word lowercase, subsequent words capitalized, no separators).

```javascript
import { toCamelCase } from "casing-kit";

toCamelCase("hello world"); // 'helloWorld'
toCamelCase("Hello World"); // 'helloWorld'
toCamelCase("hello-world"); // 'helloWorld'
toCamelCase("hello_world"); // 'helloWorld'
toCamelCase("HELLO_WORLD"); // 'helloWorld'
```

### PascalCase (UpperCamelCase)

Transforms a string to PascalCase format (all words capitalized, no separators).

```javascript
import { toPascalCase } from "casing-kit";

toPascalCase("hello world"); // 'HelloWorld'
toPascalCase("hello-world"); // 'HelloWorld'
toPascalCase("hello_world"); // 'HelloWorld'
toPascalCase("helloWorld"); // 'HelloWorld'
```

### snake_case

Transforms a string to snake_case format (all lowercase, words separated by underscores).

```javascript
import { toSnakeCase } from "casing-kit";

toSnakeCase("hello world"); // 'hello_world'
toSnakeCase("helloWorld"); // 'hello_world'
toSnakeCase("HelloWorld"); // 'hello_world'
toSnakeCase("hello-world"); // 'hello_world'
```

### kebab-case

Transforms a string to kebab-case format (all lowercase, words separated by hyphens).

```javascript
import { toKebabCase } from "casing-kit";

toKebabCase("hello world"); // 'hello-world'
toKebabCase("helloWorld"); // 'hello-world'
toKebabCase("HelloWorld"); // 'hello-world'
toKebabCase("hello_world"); // 'hello-world'
```

### CONSTANT_CASE

Transforms a string to CONSTANT_CASE format (all uppercase, words separated by underscores).

```javascript
import { toConstantCase } from "casing-kit";

toConstantCase("hello world"); // 'HELLO_WORLD'
toConstantCase("helloWorld"); // 'HELLO_WORLD'
toConstantCase("hello-world"); // 'HELLO_WORLD'
```

### dot.case

Transforms a string to dot.case format (all lowercase, words separated by dots).

```javascript
import { toDotCase } from "casing-kit";

toDotCase("hello world"); // 'hello.world'
toDotCase("helloWorld"); // 'hello.world'
toDotCase("hello-world"); // 'hello.world'
```

### path/case

Transforms a string to path/case format (all lowercase, words separated by slashes).

```javascript
import { toPathCase } from "casing-kit";

toPathCase("hello world"); // 'hello/world'
toPathCase("helloWorld"); // 'hello/world'
toPathCase("hello-world"); // 'hello/world'
```

### Title Case

Transforms a string to Title Case format (first letter of each word capitalized, separated by spaces).

```javascript
import { toTitleCase } from "casing-kit";

toTitleCase("hello world"); // 'Hello World'
toTitleCase("hello-world"); // 'Hello World'
toTitleCase("hello_world"); // 'Hello World'
```

### Sentence case

Transforms a string to Sentence case format (first letter of first word capitalized, rest lowercase, separated by spaces).

```javascript
import { toSentenceCase } from "casing-kit";

toSentenceCase("hello world"); // 'Hello world'
toSentenceCase("helloWorld"); // 'Hello world'
toSentenceCase("HELLO_WORLD"); // 'Hello world'
```

### UPPERCASE

Transforms a string to UPPERCASE format.

```javascript
import { toUpperCase } from "casing-kit";

toUpperCase("hello world"); // 'HELLO WORLD'
toUpperCase("Hello World"); // 'HELLO WORLD'
```

### lowercase

Transforms a string to lowercase format.

```javascript
import { toLowerCase } from "casing-kit";

toLowerCase("Hello World"); // 'hello world'
toLowerCase("HELLO WORLD"); // 'hello world'
```

### COBOL-CASE

Transforms a string to COBOL-CASE format (all uppercase, words separated by hyphens).

```javascript
import { toCobolCase } from "casing-kit";

toCobolCase("hello world"); // 'HELLO-WORLD'
toCobolCase("helloWorld"); // 'HELLO-WORLD'
```

### MACRO_CASE

Transforms a string to MACRO_CASE format (same as CONSTANT_CASE).

```javascript
import { toMacroCase } from "casing-kit";

toMacroCase("hello world"); // 'HELLO_WORLD'
toMacroCase("helloWorld"); // 'HELLO_WORLD'
```

### Train-Case

Transforms a string to Train-Case format (first letter of each word capitalized, separated by hyphens).

```javascript
import { toTrainCase } from "casing-kit";

toTrainCase("hello world"); // 'Hello-World'
toTrainCase("helloWorld"); // 'Hello-World'
```

### flat case

Transforms a string to flat case format (all lowercase, no separators).

```javascript
import { toFlatCase } from "casing-kit";

toFlatCase("hello world"); // 'helloworld'
toFlatCase("Hello-World"); // 'helloworld'
```

### sPoNgEbOb CaSe

Transforms a string to sPoNgEbOb CaSe format (alternating case).

```javascript
import { toSpongeCase } from "casing-kit";

toSpongeCase("hello world"); // 'hElLo WoRlD'
toSpongeCase("helloWorld"); // 'hElLoWoRlD'
```

### SwapCase

Transforms a string by swapping the case of each character.

```javascript
import { toSwapCase } from "casing-kit";

toSwapCase("Hello World"); // 'hELLO wORLD'
toSwapCase("hElLo WoRlD"); // 'HeLlO wOrLd'
```

## Case Transformation Options

All case transformation functions accept the following options:

### preserveWhitespace

When true, preserves leading, trailing, and internal whitespace characters.

```javascript
import { toCamelCase } from "casing-kit";

// Default behavior
toCamelCase("  hello  world  "); // 'helloWorld'

// With preserveWhitespace
toCamelCase("  hello  world  ", { preserveWhitespace: true }); // '  helloWorld  '
```

### preserveSpecialCharacters

When true, preserves special characters.

```javascript
import { toConstantCase } from "casing-kit";

// Default behavior
toConstantCase("hello@world"); // 'HELLO_WORLD'

// With preserveSpecialCharacters
toConstantCase("hello@world", { preserveSpecialCharacters: true }); // 'HELLO@WORLD'
```

### Combined Options

You can combine options for precise control:

```javascript
import { toPascalCase } from "casing-kit";

// Preserve both whitespace and special characters
toPascalCase("  hello @ world  ", {
  preserveWhitespace: true,
  preserveSpecialCharacters: true,
}); // '  Hello @ World  '
```

## Utility Functions

### customTransform

Applies a custom transformation function to each word in a string.

```javascript
import { customTransform } from "casing-kit";

// Uppercase every word
customTransform("hello world", (word) => word.toUpperCase(), {
  outputSeparator: " ",
});
// 'HELLO WORLD'

// Add index to each word
customTransform("one two three", (word, index) => `${word}-${index}`, {
  outputSeparator: " ",
});
// 'one-0 two-1 three-2'

// Create custom case transformation
customTransform(
  "hello-world",
  (word, index) => (index === 0 ? word : word.toUpperCase()),
  { separator: "-", outputSeparator: "." }
);
// 'hello.WORLD'
```

#### customTransform Options

The `customTransform` function accepts the following options:

##### separator

Defines how the input string is split into words. Default: `/[\s\-_]/`

```javascript
import { customTransform } from "casing-kit";

// Default separator (spaces, hyphens, underscores)
customTransform("hello-world_test", (word) => word.toUpperCase(), {
  outputSeparator: " ",
});
// 'HELLO WORLD TEST'

// Custom string separator
customTransform("hello.world.test", (word) => word.toUpperCase(), {
  separator: ".",
  outputSeparator: " ",
});
// 'HELLO WORLD TEST'

// Custom regex separator
customTransform("hello.world|test", (word) => word.toUpperCase(), {
  separator: /[.|]/,
  outputSeparator: " ",
});
// 'HELLO WORLD TEST'
```

##### outputSeparator

Defines the separator used when joining transformed words. Default: `""`

```javascript
import { customTransform } from "casing-kit";

customTransform("hello world", (word) => word.toUpperCase(), {
  outputSeparator: "-",
});
// 'HELLO-WORLD'

customTransform("hello world", (word) => word.toUpperCase(), {
  outputSeparator: "_",
});
// 'HELLO_WORLD'
```

##### preserveSpecialCharacters

When true, keeps special characters in the final result. Default: `false`

```javascript
import { customTransform } from "casing-kit";

// Default behavior
customTransform("hello@world", (word) => word.toUpperCase());
// 'HELLOWORLD'

// With preserveSpecialCharacters
customTransform("hello@world", (word) => word.toUpperCase(), {
  preserveSpecialCharacters: true,
});
// 'HELLO@WORLD'
```

##### preserveWhitespace

When true, keeps leading/trailing/multiple spaces. Default: `false`

```javascript
import { customTransform } from "casing-kit";

// Default behavior
customTransform("  hello  world  ", (word) => word.toUpperCase());
// 'HELLOWORLD'

// With preserveWhitespace
customTransform("  hello  world  ", (word) => word.toUpperCase(), {
  preserveWhitespace: true,
});
// '  HELLO  WORLD  '
```

##### Combined Options

You can combine all options for precise control:

```javascript
import { customTransform } from "casing-kit";

customTransform("  user@example.com  ", (word) => word.toUpperCase(), {
  separator: /[@.]/,
  outputSeparator: "-",
  preserveWhitespace: true,
  preserveSpecialCharacters: true,
});
// '  USER@EXAMPLE-COM  '
```

### transformObjectCasing

Transforms the keys and/or values of an object using a casing function.

```javascript
import { transformObjectCasing, toCamelCase, toSnakeCase } from "casing-kit";

// Transform object keys to camelCase
transformObjectCasing({ user_id: 123, first_name: "John" }, toCamelCase);
// { userId: 123, firstName: "John" }

// Transform string values to snake_case
transformObjectCasing({ userId: "johnDoe", firstName: "John" }, toSnakeCase, {
  transformKeys: false,
  transformValues: true,
});
// { userId: "john_doe", firstName: "john" }

// Works with nested objects and arrays
transformObjectCasing(
  {
    user_ids: ["hello_world", "test_case"],
    user_data: { first_name: "John", last_name: "Doe" },
  },
  toCamelCase,
  { transformKeys: true, transformValues: true }
);
// {
//   userIds: ["helloWorld", "testCase"],
//   userData: { firstName: "john", lastName: "doe" }
// }
```

#### transformObjectCasing Options

The `transformObjectCasing` function accepts the following options:

##### transformKeys

When true, transforms object keys using the provided casing function. Default: `true`

```javascript
import { transformObjectCasing, toCamelCase } from "casing-kit";

// Default behavior (transforms keys)
transformObjectCasing({ user_id: 123, first_name: "John" }, toCamelCase);
// { userId: 123, firstName: "John" }

// Skip key transformation
transformObjectCasing({ user_id: 123, first_name: "John" }, toCamelCase, {
  transformKeys: false,
});
// { user_id: 123, first_name: "John" }
```

##### transformValues

When true, transforms string values using the provided casing function. Default: `false`

```javascript
import { transformObjectCasing, toCamelCase } from "casing-kit";

// Default behavior (doesn't transform values)
transformObjectCasing(
  { user_id: "john_doe", first_name: "john_smith" },
  toCamelCase
);
// { userId: "john_doe", firstName: "john_smith" }

// Transform string values
transformObjectCasing(
  { user_id: "john_doe", first_name: "john_smith" },
  toCamelCase,
  { transformValues: true }
);
// { userId: "johnDoe", firstName: "johnSmith" }
```

##### Combined Options

You can combine both options:

```javascript
import { transformObjectCasing, toCamelCase } from "casing-kit";

// Transform both keys and values
transformObjectCasing(
  { user_id: "john_doe", user_data: { first_name: "john" } },
  toCamelCase,
  { transformKeys: true, transformValues: true }
);
// { userId: "johnDoe", userData: { firstName: "john" } }
```

## TypeScript Support

casing-kit is written in TypeScript and includes full type definitions:

```typescript
import {
  toCamelCase,
  customTransform,
  transformObjectCasing,
  type CustomTransformOptions,
  type TransformOptions,
  type CasingFunction,
} from "casing-kit";

// Case transformation options
const options: {
  preserveWhitespace?: boolean;
  preserveSpecialCharacters?: boolean;
} = {
  preserveWhitespace: true,
  preserveSpecialCharacters: true,
};

// Custom transform options
const customOptions: CustomTransformOptions = {
  separator: /[\s_-]/,
  preserveSpecialCharacters: true,
  preserveWhitespace: false,
  outputSeparator: ".",
};

// Object transformation options
const objectOptions: TransformOptions = {
  transformKeys: true,
  transformValues: false,
};

// Define a custom casing function
const myCustomCasing: CasingFunction = (str: string): string => {
  return str.split("").reverse().join("");
};

// Use with TypeScript
const result1: string = toCamelCase("hello_world", options);
const result2: string = customTransform(
  "hello_world",
  (word) => word.toUpperCase(),
  customOptions
);
const result3: { userId: number } = transformObjectCasing(
  { user_id: 123 },
  toCamelCase,
  objectOptions
);
const result4: { dlrow_olleh: number } = transformObjectCasing(
  { hello_world: 123 },
  myCustomCasing
);
```

## Browser Support

casing-kit targets ES2018 and works in all modern browsers and Node.js environments that support this standard. For older environments that don't support ES2018, you'll need to use a transpiler like Babel with appropriate polyfills.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
