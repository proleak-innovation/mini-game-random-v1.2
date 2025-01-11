const players = {};

// Add a player with their connection time
function addPlayer(socketId) {
    const connectionTime = new Date().toISOString();
    players[socketId] = { connectedAt: connectionTime };
}

// Update the player's last activity time
function updatePlayerActivity(socketId) {
    const activityTime = new Date().toISOString();
    players[socketId].lastActivity = activityTime;
}

// Remove the player when they disconnect
function removePlayer(socketId) {
    delete players[socketId];
}

// Get the player data
function getPlayerData(socketId) {
    return players[socketId];
}

module.exports = {
    addPlayer,
    updatePlayerActivity,
    removePlayer,
    getPlayerData
};