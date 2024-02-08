[![Node CI](https://github.com/opifexM/CalcGamesTS/actions/workflows/nodejs.yml/badge.svg)](https://github.com/opifexM/CalcGamesTS/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/051ba6472da5b1940bee/maintainability)](https://codeclimate.com/github/opifexM/CalcGamesTS/maintainability)

## Calc Games

This project is a set of mini-games launched from the console. The project is implemented in JavaScript and uses several technologies and libraries.

### Technologies and Patterns

- **JavaScript (ES6+)**: Utilizes modern JavaScript features for clear and concise code.
- **Node.js**: Provides the runtime environment to execute the games in a console.
- **readline-sync**: A Node.js library used for reading user input synchronously, enabling interactive gameplay.
- **TypeScript**: Offers strong typing over JavaScript to ensure more robust code and reduce runtime errors.
- **npm**: Serves as the package manager for managing dependencies and running scripts.
- **ESLint**: Assists in maintaining code quality by enforcing coding standards and identifying potential errors.
- **GitHub Actions**: Automates workflows, including testing and linting, to ensure code integrity before deployment.
- **Design Patterns**: Implements software design patterns such as Factory and Singleton for creating game instances and managing game flow efficiently.

### Games Included

Each game focuses on a specific mathematical concept, offering a unique challenge:

- **Brain Calc (`brain-calc.js`)**: Solve arithmetic expressions.
- **Brain Even (`brain-even.js`)**: Identify if numbers are even.
- **Brain GCD (`brain-gcd.js`)**: Compute the greatest common divisor.
- **Brain Prime (`brain-prime.js`)**: Determine primality of numbers.
- **Brain Progression (`brain-progression.js`)**: Find missing numbers in sequences.

### Usage
Launch games directly via the command line. Example commands to start different games:
```bash
npm run cli:games       # General entry point for all games
npm run cli:even        # Start 'Even' game
npm run cli:calc        # Start 'Calc' game
npm run cli:gcd         # Start 'GCD' game
npm run cli:prime       # Start 'Prime' game
npm run cli:progression # Start 'Progression' game
```
