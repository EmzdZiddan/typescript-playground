// ============================================================
// TOPIC 1: STATIC TYPES
// Type annotations for variables, parameters, and return values
// ============================================================

// --- 1. VARIABLE TYPE ANNOTATIONS ---
// Add `: type` after the variable name to declare its type.

let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// Assigning the wrong type will cause a compile error:
// let name: string = 100; // ❌ Error


// --- 2. PARAMETER TYPE ANNOTATIONS ---
// Define what types a function is allowed to receive.

function greet(name: string, age: number) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}

greet("Alice", 25);   // ✅ OK
// greet("Alice", "25"); // ❌ Error


// --- 3. RETURN VALUE TYPE ANNOTATIONS ---
// Define what type a function must return.

function add(a: number, b: number): number {
    return a + b;
}

function getGreeting(name: string): string {
    return `Hello, ${name}`;
}

// Returning the wrong type will cause a compile error:
// function add(a: number, b: number): number {
//   return "result"; // ❌ Error
// }