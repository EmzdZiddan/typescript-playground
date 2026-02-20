// ============================================================
// TOPIC 5: UNION & MORE
// Union types, intersection types, and literal types
// ============================================================

// --- 1. UNION TYPES ---
// A union type allows a value to be one of several types.
// Use `|` to combine types.

let id: string | number;
id = "abc123"; // ✅ OK
id = 42;       // ✅ OK
// id = true;  // ❌ Error

function printId(id: string | number) {
    console.log(`ID: ${id}`);
}


// --- 2. NARROWING UNION TYPES ---
// Use typeof to handle each type in a union differently.

function format(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}

format("hello"); // "HELLO"
format(3.14159); // "3.14"


// --- 3. INTERSECTION TYPES ---
// An intersection type combines multiple types into one.
// The resulting type must satisfy ALL combined types.
// Use `&` to combine types.

interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

type Person = HasName & HasAge;

const person: Person = {
    name: "Alice",
    age: 25,
    // must have both name AND age
};


// --- 4. LITERAL TYPES ---
// Literal types restrict a value to one specific value.

let direction: "left" | "right" | "up" | "down";
direction = "left";  // ✅ OK
// direction = "diagonal"; // ❌ Error

function setStatus(status: "active" | "inactive" | "pending") {
    console.log(`Status: ${status}`);
}

setStatus("active");   // ✅ OK
// setStatus("banned"); // ❌ Error


// --- 5. LITERAL TYPES WITH NUMBERS ---

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
    return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}


// --- 6. COMBINING UNION + LITERAL ---

type Response = "success" | "error";
type HttpStatus = 200 | 400 | 404 | 500;

function handleResponse(status: HttpStatus, response: Response) {
    console.log(`${status}: ${response}`);
}

handleResponse(200, "success"); // ✅ OK
// handleResponse(999, "ok");   // ❌ Error