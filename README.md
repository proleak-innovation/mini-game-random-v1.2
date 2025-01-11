# Mini Game Random v1.1

A simple random game where players can open virtual cases to receive random in-game items with different rarities. The game is powered by Socket.IO, and it handles real-time interactions between the server and the client.

---

## Features

- Players can connect to the game server via WebSockets.
- Random in-game items are awarded to players based on weighted chances.
- The server tracks player connections, activities, and disconnections.
- Real-time updates using Socket.IO to send item results to players.
  
---

## Requirements

- Node.js (version 14 or higher)
- npm (Node Package Manager)

---

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/proleak-innovation/mini-gmae-random-v1.1.git
```

### 2. Install dependencies:

Navigate to the project directory and run the following command to install the required dependencies.

```bash
npm install
```

### 3. Start the server:

After installing the dependencies, you can start the server using the following command:

```bash
node server/game.js
```

The server will run on `http://localhost:3001`.

---

## Client-side Integration

- The game client communicates with the server via WebSockets.
- Ensure the client connects to the correct URL where the server is running (`http://localhost:3001`).
- The client-side UI is built using React, and interactions are handled through Socket.IO.

---

## Project Structure

```
project/
│
├── sys/
│   ├── items.js           # Logic for random item selection
│   ├── players.js         # Player tracking logic
│   └── socketHandlers.js  # Socket event handlers
├── server/
│   └── game.js            # Main game server file
├── package.json           # Dependencies file
└── README.md              # Project documentation
```

---

## License

For any inquiries or assistance, please reach out to:  
**Email:** [center@proleakinnovation.com](mailto:center@proleakinnovation.com)
