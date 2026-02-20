# TypeScript Playground 🚀

A structured learning playground for exploring TypeScript concepts — from the basics to advanced patterns.

## 📁 Project Structure

```
typescript-playground/
├── src/
│   ├── concepts/
│   │   ├── 1-static-types.ts       # Static type annotations
│   │   ├── 2-type-inference.ts     # Type inference & narrowing
│   │   ├── 3-interfaces.ts         # Interfaces & object types
│   │   ├── 4-generics.ts           # Generic functions & types
│   │   ├── 5-union-and-more.ts     # Union, intersection & literal types
│   │   └── 6-utility-types.ts      # Built-in utility types
│   └── playground/
│       └── index.ts                # Free-form experimentation
├── dist/                           # Compiled JavaScript output
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🧠 Concepts Covered

| # | Topic | Description |
|---|-------|-------------|
| 1 | **Static Types** | Type annotations for variables, parameters, and return values |
| 2 | **Type Inference** | How TypeScript infers types automatically |
| 3 | **Interfaces** | Defining object shapes and contracts |
| 4 | **Generics** | Writing reusable, type-safe functions and classes |
| 5 | **Union & More** | Union types, intersection types, and literal types |
| 6 | **Utility Types** | `Partial`, `Required`, `Pick`, `Omit`, `Readonly`, and more |

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/typescript-playground.git
cd typescript-playground

# Install dependencies
npm install
```

### Running the Code

```bash
# Compile TypeScript to JavaScript
npm run build

# Run a specific file with ts-node (no compile step needed)
npx ts-node src/concepts/1-static-types.ts

# Watch mode — recompile on file changes
npm run dev
```

## ⚙️ Configuration

TypeScript compiler options are defined in `tsconfig.json`. Key settings:

```json
{
  "compilerOptions": {
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

> `"strict": true` enables all strict type-checking options — recommended for learning best practices.

## 🧪 Playground

The `src/playground/index.ts` file is your personal scratchpad. Use it to experiment freely without affecting the structured concept files.

## 📚 Resources

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground (Online)](https://www.typescriptlang.org/play)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
