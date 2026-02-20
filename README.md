🧠 Concepts Covered
#TopicDescription1Static TypesType annotations for variables, parameters, and return values2Type InferenceHow TypeScript infers types automatically3InterfacesDefining object shapes and contracts4GenericsWriting reusable, type-safe functions and classes5Union & MoreUnion types, intersection types, and literal types6Utility TypesPartial, Required, Pick, Omit, Readonly, and more

🛠️ Getting Started
Prerequisites
Node.js v18 or higher
npm v9 or higher

Installation
bash# Clone the repository
git clone https://github.com/EmzdZiddan/typescript-playground.git
cd typescript-playground

# Install dependencies
npm install
Running the Code
bash# Compile TypeScript to JavaScript
npm run build

# Run a specific file with ts-node (no compile step needed)
npx ts-node src/concepts/1-static-types.ts

# Watch mode — recompile on file changes
npm run dev
⚙️ Configuration
TypeScript compiler options are defined in tsconfig.json. Key settings:
json{
  "compilerOptions": {
    "target": "nodenext",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}

"strict": true enables all strict type-checking options — recommended for learning best practices.

🧪 Playground
The src/playground/index.ts file is your personal scratchpad. Use it to experiment freely without affecting the structured concept files.

📚 Resources
TypeScript Official Docs
TypeScript Handbook
TypeScript Playground (Online)
Type Challenges

