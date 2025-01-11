const { getRandomItem } = require("./items");
const { addPlayer, updatePlayerActivity, removePlayer, getPlayerData } = require("./players");

function handleSocketConnection(socket, io) {
    addPlayer(socket.id);
    const connectionTime = new Date().toISOString();
    console.log(`[CONNECT] User connected: ${socket.id} at ${connectionTime}`);

    socket.on("openCase", () => {
        const randomItem = getRandomItem();
        updatePlayerActivity(socket.id);

        const activityTime = new Date().toISOString();
        console.log(
            `[ACTIVITY] User: ${socket.id} opened a case at ${activityTime}, won: ${randomItem.name} (${randomItem.rarity})`
        );

        io.emit("caseResult", randomItem);
    });

    socket.on("disconnect", () => {
        const disconnectTime = new Date().toISOString();
        const connectedDuration = new Date(disconnectTime) - new Date(getPlayerData(socket.id).connectedAt);

        console.log(
            `[DISCONNECT] User disconnected: ${socket.id} at ${disconnectTime}, connected for ${connectedDuration} ms`
        );

        removePlayer(socket.id);
    });
}

module.exports = { handleSocketConnection };