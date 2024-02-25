//================= Javascript Modules ====================

// Modules
// JavaScript modules allow you to break up your code into separate files.
// This makes it easier to maintain a code-base.
// Modules are imported from external files with the import statement.
// Modules also rely on type="module" in the <script> tag.

// Example:
<script type="module">
    import message from "./message.js";
</script>

// Export
// Modules with functions or variables can be stored in any external file.
// There are two types of exports: Named Exports and Default Exports.

//----------------------------------------------------------------
// Named Exports
// let us create a file name person.js, and fill it with the things we want to export.
//You can create named exports two ways. In-line individually, or all at once at the bottom.

// in-line individually:
export const name = "anya";
export const age = 5;

// all at once at bottom:
const name = "Anya";
const age = 5;
export { name, age };

//---------------------------------------------------------------
// Default Exports
// Let us create another file, named message.js, and use it for demonstrating default export.
// You can only have one default export in a file.

const message = () =>{
    const name = "anya";
    const age = 5;
    return name + 'is' + age + 'years old.';
};

export default message;

//---------------------------------------------------------------
// Import
// You can import modules into a file in two ways, based on if they are named exports or default exports.

// Named exports are constructed using curly braces. Default exports are not.

// Import from named exports
// Import named exports from the file person.js:

import { name, age } from "./person.js";

// Import from default exports
// Import a default export from the file message.js:

import message from "./message.js";

