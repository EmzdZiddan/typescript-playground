// ============================================================
// TOPIC 3: INTERFACES
// Defining object shapes and contracts
// ============================================================

// --- 1. BASIC INTERFACE ---
// An interface defines the shape (structure) an object must follow.

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

const user: User = {
    name: "Alice",
    age: 25,
    isActive: true,
};


// Missing or extra properties will cause an error:
// const user2: User = { name: "Bob" }; // ❌ Error: missing age, isActive


// --- 2. OPTIONAL PROPERTIES ---
// Use `?` to mark a property as optional.

interface Product {
    name: string;
    price: number;
    description?: string; // optional
}

const product1: Product = { name: "Keyboard", price: 99 };           // ✅ OK
const product2: Product = { name: "Mouse", price: 49, description: "Wireless" }; // ✅ OK


// --- 3. READONLY PROPERTIES ---
// Use `readonly` to prevent a property from being reassigned.

interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 99; // ❌ Error: Cannot assign to 'x' because it is a read-only property


// --- 4. INTERFACE FOR FUNCTIONS ---
// Interfaces can also define the shape of a function.

interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;


// --- 5. EXTENDING INTERFACES ---
// Interfaces can extend other interfaces to inherit their properties.

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog: Dog = {
    name: "Rex",
    breed: "Labrador",
};
