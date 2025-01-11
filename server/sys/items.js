const crypto = require("crypto");

const items = [
    { name: "Common Skin", rarity: "common", weight: 50 },
    { name: "Rare Skin", rarity: "rare", weight: 30 },
    { name: "Epic Skin", rarity: "epic", weight: 15 },
    { name: "Legendary Skin", rarity: "legendary", weight: 5 },
];

// Function to get a random item based on its weight
function getRandomItem() {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    const randomNum = crypto.randomInt(0, totalWeight);

    let cumulativeWeight = 0;
    for (const item of items) {
        cumulativeWeight += item.weight;
        if (randomNum < cumulativeWeight) {
            return item;
        }
    }
    return items[0];
}

module.exports = { getRandomItem };