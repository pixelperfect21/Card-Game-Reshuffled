function generateLayers() {
    if (getUsesInArray(gameData.main.hand, "Q") > 0) {
        gameData.layers.layer1Amount += gameData.layers.layer2Amount * getLayer2Mult() * (diff / 1000)
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 1) {
        gameData.layers.layer2Amount += gameData.layers.layer3Amount * getLayer3Mult() * (diff / 1000)
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 2) {
        gameData.layers.layer3Amount += gameData.layers.layer4Amount * getLayer4Mult() * (diff / 1000)
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 3) {
        gameData.layers.layer4Amount += gameData.layers.layer5Amount * getLayer5Mult() * (diff / 1000)
    }
}
function showLayers() {
    if (getUsesInArray(gameData.main.hand, "Q") > 0) {
        document.getElementById("layer2Display").style.display = "inline-block"
        document.getElementById("layer2Upg").style.display = "inline-block"
    } else {
        document.getElementById("layer2Display").style.display = "none"
        document.getElementById("layer2Upg").style.display = "none"
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 1) {
        document.getElementById("layer3Display").style.display = "inline-block"
        document.getElementById("layer3Upg").style.display = "inline-block"
    } else {
        document.getElementById("layer3Display").style.display = "none"
        document.getElementById("layer3Upg").style.display = "none"
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 2) {
        document.getElementById("layer4Display").style.display = "inline-block"
        document.getElementById("layer4Upg").style.display = "inline-block"
    } else {
        document.getElementById("layer4Display").style.display = "none"
        document.getElementById("layer4Upg").style.display = "none"
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 3) {
        document.getElementById("layer5Display").style.display = "inline-block"
        document.getElementById("layer5Upg").style.display = "inline-block"
    } else {
        document.getElementById("layer5Display").style.display = "none"
        document.getElementById("layer5Upg").style.display = "none"
    }
}
function getLayerCosts() {
    gameData.layers.layer1UpgCost = 10 * Math.pow(4, gameData.layers.layer1UpgAmount)
    gameData.layers.layer2UpgCost = 1000 * Math.pow(16, gameData.layers.layer2UpgAmount)
    gameData.layers.layer3UpgCost = 100000 * Math.pow(512, gameData.layers.layer3UpgAmount)
    gameData.layers.layer4UpgCost = 10000000 * Math.pow(2048, gameData.layers.layer4UpgAmount)
    gameData.layers.layer5UpgCost = 1000000000 * Math.pow(8192, gameData.layers.layer5UpgAmount)

}
function upgradeLayer1() {
    if (gameData.main.cardPoints > gameData.layers.layer1UpgCost) {
        gameData.main.cardPoints = gameData.main.cardPoints - gameData.layers.layer1UpgCost
        gameData.layers.layer1UpgAmount = gameData.layers.layer1UpgAmount + 1
    }
}
function getLayer1Mult() {
    let mult = 1
    mult = mult * Math.pow(1.5, gameData.layers.layer1UpgAmount)
    mult = mult * Math.pow(2, getUsesInArray(gameData.main.hand, "J"))
    mult = mult * (getUsesInArray(gameData.main.hand, "9") * 9 + 1)
    return mult
}
function upgradeLayer2() {
    if (gameData.main.cardPoints > gameData.layers.layer2UpgCost) {
        gameData.main.cardPoints = gameData.main.cardPoints - gameData.layers.layer2UpgCost
        gameData.layers.layer2UpgAmount = gameData.layers.layer2UpgAmount + 1
    }
}
function getLayer2Mult() {
    let mult = 1
    mult = mult * Math.pow(1.5, gameData.layers.layer2UpgAmount)
    mult = mult * Math.pow(2, getUsesInArray(gameData.main.hand, "J"))
    mult = mult * (getUsesInArray(gameData.main.hand, "8") * 8 + 1)
    return mult
}
function upgradeLayer3() {
    if (gameData.main.cardPoints > gameData.layers.layer3UpgCost) {
        gameData.main.cardPoints = gameData.main.cardPoints - gameData.layers.layer3UpgCost
        gameData.layers.layer3UpgAmount = gameData.layers.layer3UpgAmount + 1
    }
}
function getLayer3Mult() {
    let mult = 1
    mult = mult * Math.pow(1.5, gameData.layers.layer3UpgAmount)
    mult = mult * Math.pow(2, getUsesInArray(gameData.main.hand, "J"))
    mult = mult * (getUsesInArray(gameData.main.hand, "7") * 7 + 1)
    return mult
}
function upgradeLayer4() {
    if (gameData.main.cardPoints > gameData.layers.layer4UpgCost) {
        gameData.main.cardPoints = gameData.main.cardPoints - gameData.layers.layer4UpgCost
        gameData.layers.layer4UpgAmount = gameData.layers.layer4UpgAmount + 1
    }
}
function getLayer4Mult() {
    let mult = 1
    mult = mult * Math.pow(1.5, gameData.layers.layer4UpgAmount)
    mult = mult * Math.pow(2, getUsesInArray(gameData.main.hand, "J"))
    mult = mult * (getUsesInArray(gameData.main.hand, "6") * 6 + 1)
    return mult
}
function upgradeLayer5() {
    if (gameData.main.cardPoints > gameData.layers.layer5UpgCost) {
        gameData.main.cardPoints = gameData.main.cardPoints - gameData.layers.layer5UpgCost
        gameData.layers.layer5UpgAmount = gameData.layers.layer5UpgAmount + 1
    }
}
function getLayer5Mult() {
    let mult = 1
    mult = mult * Math.pow(1.5, gameData.layers.layer5UpgAmount)
    mult = mult * Math.pow(2, getUsesInArray(gameData.main.hand, "J"))
    mult = mult * (getUsesInArray(gameData.main.hand, "5") * 5 + 1)
    return mult
}
