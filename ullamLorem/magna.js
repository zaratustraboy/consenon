// parseModule.js
export function parse(input) {
  // Your parsing logic here
  return JSON.parse(input);
}

// Or you can use default export if there's only one main export
export default {
  parse,
  // Other properties or methods
};

// Usage in another file
import { parse } from './parseModule'; // Or "import parser from './parseModule'" if using default export
const jsonString = '{"name": "Bob", "age": 28}';
const parsedData = parse(jsonString);
console.log(parsedData); // Output: { name: 'Bob', age: 28 }
