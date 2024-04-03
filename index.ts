const processArgs = process.argv;
const passedArguments = processArgs.slice(2);

const args: Record<string, string> = { "-t": "was not passed via -t" };

for (let i = 0; i < passedArguments.length; i = i + 2) {
    const key = passedArguments[i];
    const value = passedArguments[i + 1];

    args[key] = value;
}

console.log("");
console.log("Hello via Bun!");
console.log(`The Passed Tag is: ${args["-t"]}`);
console.log("");
