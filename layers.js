function generateLayers() {
    if (getUsesInArray(gameData.main.hand, "Q") > 1) {
        gameData.layers.layer1Amount += gameData.layers.layer2Amount * getLayer2Mult() * (diff / 1000)
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 2) {
        gameData.layers.layer2Amount += gameData.layers.layer3Amount * getLayer3Mult() * (diff / 1000)
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 3) {
        gameData.layers.layer3Amount += gameData.layers.layer4Amount * getLayer4Mult() * (diff / 1000)
    }
}
function showLayers() {
    if (getUsesInArray(gameData.main.hand, "Q") > 0) {
        document.getElementById("layer1Display").style.display = "inline-block"
        document.getElementById("layer1Upg").style.display = "inline-block"
        document.getElementById("layerNotif").style.display = "none"
    } else {
        document.getElementById("layer1Display").style.display = "none"
        document.getElementById("layer1Upg").style.display = "none"
        document.getElementById("layerNotif").style.display = "inline-block"
        document.getElementById("layerNotif").innerHTML = "Draw a Q to unlock the first layer"
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 1) {
        document.getElementById("layer2Display").style.display = "inline-block"
        document.getElementById("layer2Upg").style.display = "inline-block"
    } else {
        document.getElementById("layer2Display").style.display = "none"
        document.getElementById("layer2Upg").style.display = "none"
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 2) {
        document.getElementById("layer3Display").style.display = "inline-block"
        document.getElementById("layer3Upg").style.display = "inline-block"
    } else {
        document.getElementById("layer3Display").style.display = "none"
        document.getElementById("layer3Upg").style.display = "none"
    }
    if (getUsesInArray(gameData.main.hand, "Q") > 3) {
        document.getElementById("layer4Display").style.display = "inline-block"
        document.getElementById("layer4Upg").style.display = "inline-block"
    } else {
        document.getElementById("layer4Display").style.display = "none"
        document.getElementById("layer4Upg").style.display = "none"
    }
}
function upgradeLayer1() {
    if (gameData.main.cardPoints > gameData.layers.layer1UpgCost) {
        gameData.main.cardPoints = gameData.main.cardPoints - gameData.layers.layer1UpgCost
        gameData.layers.layer1UpgAmount = gameData.layers.layer1UpgAmount + 1
        gameData.layers.layer1UpgCost = gameData.layers.layer1UpgCost * 10
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
        gameData.layers.layer2UpgCost = gameData.layers.layer2UpgCost * 100
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
        gameData.layers.layer3UpgCost = gameData.layers.layer3UpgCost * 1000
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
        gameData.layers.layer4UpgCost = gameData.layers.layer4UpgCost * 10000
    }
}
function getLayer4Mult() {
    let mult = 1
    mult = mult * Math.pow(1.5, gameData.layers.layer4UpgAmount)
    mult = mult * Math.pow(2, getUsesInArray(gameData.main.hand, "J"))
    mult = mult * (getUsesInArray(gameData.main.hand, "6") * 6 + 1)
    return mult
}
