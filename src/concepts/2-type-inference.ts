// ============================================================
// TOPIC 2: TYPE INFERENCE
// How TypeScript infers types automatically
// ============================================================

// --- 1. VARIABLE INFERENCE ---
// TypeScript automatically infers the type from the assigned value.
// You don't always need to write the type explicitly.

let name = "Alice";   // inferred as string
let age = 25;         // inferred as number
let isActive = true;  // inferred as boolean

// It still protects you from wrong assignments:
// name = 100; // ❌ Error: Type 'number' is not assignable to type 'string'


// --- 2. FUNCTION RETURN TYPE INFERENCE ---
// TypeScript infers the return type based on what the function returns.

function add(a: number, b: number) {
    return a + b; // inferred return type: number
}

function getGreeting(name: string) {
    return `Hello, ${name}`; // inferred return type: string
}


// --- 3. INFERENCE FROM DEFAULT VALUES ---
// When a parameter has a default value, TypeScript infers its type from it.

function greet(name = "stranger") {
    console.log(`Hello, ${name}`);
    // name is inferred as string because default value is a string
}

greet("Alice"); // ✅ OK
// greet(123);  // ❌ Error


// --- 4. WHEN TO STILL USE EXPLICIT ANNOTATIONS ---
// Use explicit types when the inferred type is too broad or ambiguous.

let value; // inferred as `any` — TypeScript can't infer without a value
value = "hello";
value = 42; // no error, because it's `any` — this is risky

// Better to be explicit in this case:
let value2: string;
value2 = "hello"; // ✅ OK
// value2 = 42;   // ❌ Error


