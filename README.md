# Battlesnake JavaScript Starter Project

An official Battlesnake template written in JavaScript. Get started at [play.battlesnake.com](https://play.battlesnake.com).

![Battlesnake Logo](https://media.battlesnake.com/social/StarterSnakeGitHubRepos_JavaScript.png)

This project is a great starting point for anyone wanting to program their first Battlesnake in JavaScript. It can be run locally or easily deployed to a cloud provider of your choosing. See the [Battlesnake API Docs](https://docs.battlesnake.com/api) for more details. 

[![Run on Replit](https://repl.it/badge/github/BattlesnakeOfficial/starter-snake-javascript)](https://replit.com/@Battlesnake/starter-snake-javascript)

## Technologies Used

This project uses [Node.js](https://nodejs.dev/) .

# Prerequisites
Node.js installed on your machine

## 📁 Repository Structure

### 🔀 Branches

- **`main`**  
  This is the final production-ready branch. Only the Git leader is allowed to push to `main` after thorough testing and review.

- **`dev`**  
  This is the main development branch. All ongoing work and tasks are merged here first, before final integration into `main`.

### 📦 Task Workflow

All tasks — whether they are **chores**, **fixes**, or **features** — are pushed under a unified `features/` directory inside the `dev/` branch. This helps keep everything centralized and organized.

```plaintext
dev/
└── features/
    ├── fix-food-bug/
    ├── chore-code-cleanup/
    └── feature-smart-navigation/

# How to Run

## Run Your Battlesnake

Install dependencies using npm

```sh
npm install
```

Start your Battlesnake

```sh
npm run start
```

You should see the following output once it is running

```sh
Running Battlesnake at http://0.0.0.0:8000
```

Open [localhost:8000](http://localhost:8000) in your browser and you should see

```json
{"apiversion":"1","author":"pgvle","color":"#182CEA","head":"all-seeing","tail":"ice-skate"}
```
## Play a Game Locally

Install the [Battlesnake CLI](https://github.com/BattlesnakeOfficial/rules/tree/main/cli)
* You can [download compiled binaries here](https://github.com/BattlesnakeOfficial/rules/releases)
* or [install as a go package](https://github.com/BattlesnakeOfficial/rules/tree/main/cli#installation) (requires Go 1.18 or higher)

## Next Steps

Continue with the [Battlesnake Quickstart Guide](https://docs.battlesnake.com/quickstart) to customize and improve your Battlesnake's behavior.

**Note:** To play games on [play.battlesnake.com](https://play.battlesnake.com) you'll need to deploy your Battlesnake to a live web server OR use a port forwarding tool like [ngrok](https://ngrok.com/) to access your server locally.

# How to Run Tests
Running tests is not provided in the current code. You can implement test cases using a testing framework like Jest or Mocha. Write test scripts to cover different scenarios and edge cases in your Battlesnake logic.

# How to Deploy on Production
Deploying the Battlesnake logic in production involves hosting the server on a platform accessible to the Battlesnake game server. Set up a production environment, configure any necessary environment variables, and deploy the code on your chosen platform.

# Configuration Files
No explicit configuration files are provided. You may need to customize the code directly for specific configurations.

# Variables
myHead: Represents the head of your Battlesnake.

myBody: Represents the body segments of your Battlesnake.

gameState: Represents the current state of the game.

# Launch Parameters
No launch parameters are defined in the current code. Launch parameters can be added based on your deployment environment and requirements.

# Extended Documentation
Refer to the Battlesnake API documentation for additional information on the API, available data, and best practices.

# Mockups
No explicit mockups are provided in the current code. Mockups can be created to visualize the expected behavior of your Battlesnake in different game scenarios.


# System Documentation 
# 1. Introduction
## 1.1 Purpose
The purpose of this system documentation is to provide a comprehensive understanding of the Battlesnake AI system. It includes information about the system's architecture, code structure, setup, usage, testing, deployment, monitoring, security, and documentation.

## 1.2 Scope
This documentation is intended for developers, system administrators, and anyone involved in the deployment, maintenance, or enhancement of the Battlesnake AI system.

## 1.3 System Overview
The Battlesnake AI system is designed to control the behavior of a snake in the Battlesnake game. The system prevents the snake from moving backward, avoids collisions with walls, itself, and other snakes, and aims to consume food to survive and win the game.

# 2. System Architecture
## 2.1 High-Level Architecture
The system follows a modular architecture with components for game logic, movement strategies, and server setup. It communicates with the Battlesnake game server using HTTP requests.

## 2.2 Components
Game Logic: Contains functions for game initialization, handling the start and end of a game, and determining the next move based on the game state.
Movement Strategies: Includes algorithms for preventing collisions with walls, itself, and other snakes, as well as seeking out and consuming food.
Server Setup: Configures the server to respond to Battlesnake game events and requests.
## 2.3 Data Flow
The data flow starts with receiving game events from the Battlesnake server. The system processes these events, executes the game logic, and determines the next move for the Battlesnake. The chosen move is then sent back to the Battlesnake server.

# 3. Code Structure
## 3.1 Key Functions
info(): Provides information about the Battlesnake, including the author, color, head, and tail.

start(gameState): Handles the start of a game.

end(gameState): Handles the end of a game.

move(gameState): Determines the next move based on the game state.

## 3.2 Dependencies
The code relies on Node.js and the runServer function for setting up the server.

# 4. Setup and Configuration
## 4.1 Prerequisites
Node.js installed on the machine.

## 4.2 Installation
No explicit installation steps are provided. Ensure that Node.js is installed and run the server using node server.js.

## 4.3 Configuration
No explicit configuration files are provided. Configuration may be done directly in the code for specific adjustments.

# 5. Documentation
# 5.1 README
Maintain a README file with essential information, including name, description, technologies, prerequisites,  structure, and usage instructions.

