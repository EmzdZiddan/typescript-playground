// ============================================================
// TOPIC 6: UTILITY TYPES
// Partial, Required, Pick, Omit, Readonly, and more
// ============================================================

// Base interface used throughout this file
interface User {
    name: string;
    age: number;
    email: string;
    address: string;
}


// --- 1. Partial<T> ---
// Makes all properties optional.
// Useful when updating an object where not all fields are required.

function updateUser(user: User, changes: Partial<User>): User {
    return { ...user, ...changes };
}

updateUser(
    { name: "Alice", age: 25, email: "alice@mail.com", address: "Jakarta" },
    { age: 26 } // ✅ only updating age, rest is optional
);


// --- 2. Required<T> ---
// Makes all properties required (opposite of Partial).
// Useful when you want to enforce all fields are present.

interface Config {
    host?: string;
    port?: number;
}

const config: Required<Config> = {
    host: "localhost",
    port: 3000,
    // both fields are now required ✅
};


// --- 3. Readonly<T> ---
// Makes all properties read-only.
// Useful for immutable data like config or constants.

const frozenUser: Readonly<User> = {
    name: "Alice",
    age: 25,
    email: "alice@mail.com",
    address: "Jakarta",
};

// frozenUser.name = "Bob"; // ❌ Error: Cannot assign to 'name' — it is read-only


// --- 4. Pick<T, K> ---
// Creates a new type by picking only specific properties from T.
// Useful when you only need a subset of a type.

type UserPreview = Pick<User, "name" | "email">;

const preview: UserPreview = {
    name: "Alice",
    email: "alice@mail.com",
    // age and address are not included
};


// --- 5. Omit<T, K> ---
// Creates a new type by removing specific properties from T.
// The opposite of Pick.

type UserWithoutAddress = Omit<User, "address">;

const userNoAddress: UserWithoutAddress = {
    name: "Alice",
    age: 25,
    email: "alice@mail.com",
    // address is excluded
};


// --- 6. Record<K, V> ---
// Creates a type with a set of keys K, each with value type V.
// Useful for maps and dictionaries.

type Role = "admin" | "editor" | "viewer";

const permissions: Record<Role, boolean> = {
    admin: true,
    editor: true,
    viewer: false,
};


// --- 7. ReturnType<T> ---
// Extracts the return type of a function.

function getUser() {
    return { name: "Alice", age: 25 };
}

type GetUserReturn = ReturnType<typeof getUser>;
// equivalent to: { name: string; age: number }

const result: GetUserReturn = { name: "Bob", age: 30 }; // ✅ OK