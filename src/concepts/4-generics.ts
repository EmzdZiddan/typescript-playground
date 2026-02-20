// ============================================================
// TOPIC 4: GENERICS
// Writing reusable, type-safe functions and classes
// ============================================================

// --- 1. THE PROBLEM WITHOUT GENERICS ---
// Without generics, you'd need separate functions for each type,
// or use `any` which loses type safety.

function getNumberValue(value: number): number { return value; }
function getStringValue(value: string): string { return value; }
// This doesn't scale well.


// --- 2. GENERIC FUNCTION ---
// Use `<T>` as a type placeholder that gets filled in at call time.

function getValue<T>(value: T): T {
    return value;
}

getValue<number>(42);      // ✅ T = number
getValue<string>("hello"); // ✅ T = string
getValue(true);            // ✅ T inferred as boolean


// --- 3. GENERIC WITH ARRAYS ---

function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}

getFirstItem<number>([1, 2, 3]);       // returns 1
getFirstItem<string>(["a", "b", "c"]); // returns "a"


// --- 4. MULTIPLE TYPE PARAMETERS ---
// You can use more than one generic type.

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

pair<string, number>("age", 25); // ✅ ["age", 25]


// --- 5. GENERIC INTERFACE ---

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
    data: { name: "Alice", age: 25 },
    status: 200,
    message: "Success",
};


// --- 6. GENERIC CLASS ---

class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("hello");

console.log(numberBox.getValue()); // 42
console.log(stringBox.getValue()); // "hello"


// --- 7. GENERIC CONSTRAINTS ---
// Use `extends` to restrict what types T can be.

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

getLength("hello");    // ✅ string has .length
getLength([1, 2, 3]);  // ✅ array has .length
// getLength(42);      // ❌ Error: number has no .length