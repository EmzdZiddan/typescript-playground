# TypeScript Playground 🚀

A structured learning playground for exploring TypeScript concepts — from the basics to advanced patterns.

## 📁 Project Structure

```
typescript-playground/
├── dist/                           # Compiled JavaScript output
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
- TypeScript installed globally or via npx:
  ```bash
  npm install -g typescript
  ```

### Running the Code

```bash
# Compile all TypeScript files to JavaScript (output in dist/)
npx tsc

# Compile in watch mode — recompile on file changes
npx tsc --watch

# Run a compiled file
node dist/concepts/1-static-types.js

# Or run TypeScript directly with tsx (install first: npm install -g tsx)
npx tsx --watch src/concepts/1-static-types.ts
```

## ⚙️ Configuration

TypeScript compiler options are defined in `tsconfig.json`. Key settings:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "nodenext",
    "target": "esnext",
    "strict": true,
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "skipLibCheck": true
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
