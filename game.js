// Meta
var diff
var gameData = {
    lastTick: Date.now(),
    main: {
        cardPoints: 0,
        cardPointGain: 1,
        cardProgression: 0,
        cardProgressionCost: 10,
        cardProgressGain: 1,
        cardReq: 1,
        draws: 0,
        deck: ['A','A','A','A','2','2','2','2','3','3','3','3','4','4','4','4','5','5','5','5','6','6','6','6','7','7','7','7','8','8','8','8','9','9','9','9','10','10','10','10','J','J','J','J','K','K','K','K','Q','Q','Q','Q'],
        hand: [],
        drawOptions: [],
        reshufflers: 3,
        totalConverts: 0,
        totalDraws: 0,
    },
    layers: {
        layer1Amount: 1,
        layer1UpgCost: 10,
        layer1UpgAmount: 0,
        layer2Amount: 1,
        layer2UpgCost: 1000,
        layer2UpgAmount: 0,
        layer3Amount: 1,
        layer3UpgCost: 100000,
        layer3UpgAmount: 0,
        layer4Amount: 1,
        layer4UpgCost: 10000000,
        layer4UpgAmount: 0,
        layer5Amount: 1,
        layer5UpgCost: 1000000000,
        layer5UpgAmount: 0,
    }
}
function tab(tab) {
    document.getElementById("mainTab").style.display = "none"
    document.getElementById("indexTab").style.display = "none"
    document.getElementById("layerTab").style.display = "none"
    document.getElementById("settingsTab").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}
tab('layerTab')
var savegame = JSON.parse(localStorage.getItem("cgrSave"))
if (savegame !== null) {
    gameData = savegame
} else {
    randomizeDrawOptions()
    tab('mainTab')
}
function formatArray(array) {
    let ret = ""
    if (!array.length > 0) {return "None"}
    for (let i = 0; i < array.length - 1; i++) {
        ret = ret + array[i] + ", "
    }
    return ret + array[array.length - 1]
}
function formatNumber(number) {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 3) return number.toFixed(1)
	return mantissa.toFixed(2) + "e" + exponent
}
function removeItem(array, item) {
    let arrayA = []
    let arrayB = []
    let i = 0
    while (i < item) {
        arrayA.push(array[i])
        i++
    }
    i++
    while (i < array.length) {
        arrayB.push(array[i])
        i++
    }
    return arrayA.concat(arrayB)
}
function getUsesInArray(array, item) {
    let ret = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            ret++
        }
    }
    return ret
}
function checkAvailableTabs() {
    if (gameData.main.hand.includes("Q")) {
        document.getElementById("layerTabButton").style.display = "inline-block"
    } else {
        document.getElementById("layerTabButton").style.display = "none"
    }
}
function checkNextUnlock() {
     /* if (!gameData.main.hand.includes("Q")) {
        document.getElementById("nextUnlockDisplay") = "Draw a Q to unlock Card Layers (Try forcing Prestiges to get the cards you want!)"
    } else {
        if (!gameData.main.deck.length == 0) {
            document.getElementById("nextUnlockDisplay") = ""
        } 
    } */
}
function update() {
    document.getElementById("cardPointDisplay").innerHTML = formatNumber(gameData.main.cardPoints) + " Card Points (" + formatNumber(getCardPointGain()) + "/s)"
    // Main Tab
    document.getElementById("cardProgressBuy").innerHTML = "Convert " + formatNumber(gameData.main.cardProgressionCost) + " Card Points to Card Progress"
    document.getElementById("cardProgressDisplay").innerHTML = "Card Progress: " + formatNumber(gameData.main.cardProgression) + "/" + formatNumber(gameData.main.cardReq)
    document.getElementById("drawDisplay").innerHTML = gameData.main.draws + " Draws Available"
    document.getElementById("deckDisplay").innerHTML = "Deck: " + formatArray(gameData.main.deck)
    document.getElementById("handDisplay").innerHTML = "Hand: " + formatArray(gameData.main.hand)
    document.getElementById("card1").innerHTML = gameData.main.deck[gameData.main.drawOptions[0]]
    document.getElementById("card2").innerHTML = gameData.main.deck[gameData.main.drawOptions[1]]
    document.getElementById("card3").innerHTML = gameData.main.deck[gameData.main.drawOptions[2]]
    // Index Tab
    // Card Layers Tab
    document.getElementById("layer1Display").innerHTML = "Layer 1: " + formatNumber(gameData.layers.layer1Amount) + " (x" + formatNumber(getLayer1Mult()) + ")"
    document.getElementById("layer1Upg").innerHTML = "Upgrade Layer 1: Cost: " + formatNumber(gameData.layers.layer1UpgCost) + " Card Points"
    document.getElementById("layer2Display").innerHTML = "Layer 2: " + formatNumber(gameData.layers.layer2Amount) + " (x" + formatNumber(getLayer2Mult()) + ")"
    document.getElementById("layer2Upg").innerHTML = "Upgrade Layer 2: Cost: " + formatNumber(gameData.layers.layer2UpgCost) + " Card Points"
    document.getElementById("layer3Display").innerHTML = "Layer 3: " + formatNumber(gameData.layers.layer3Amount) + " (x" + formatNumber(getLayer3Mult()) + ")"
    document.getElementById("layer3Upg").innerHTML = "Upgrade Layer 3: Cost: " + formatNumber(gameData.layers.layer3UpgCost) + " Card Points"
    document.getElementById("layer4Display").innerHTML = "Layer 4: " + formatNumber(gameData.layers.layer4Amount) + " (x" + formatNumber(getLayer4Mult()) + ")"
    document.getElementById("layer4Upg").innerHTML = "Upgrade Layer 4: Cost: " + formatNumber(gameData.layers.layer4UpgCost) + " Card Points"
    document.getElementById("layer5Display").innerHTML = "Layer 5: " + formatNumber(gameData.layers.layer5Amount) + " (x" + formatNumber(getLayer5Mult()) + ")"
    document.getElementById("layer5Upg").innerHTML = "Upgrade Layer 5: Cost: " + formatNumber(gameData.layers.layer5UpgCost) + " Card Points"
}
// Loops
var tickLoop = window.setInterval(function() {
    checkDraws()
    update()
    gameData.main.cardPointGain = getCardPointGain()
    checkNextUnlock()
    showLayers()
}, 10)
var genLoop = window.setInterval(function() {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()
    gameData.main.cardPoints = gameData.main.cardPoints + gameData.main.cardPointGain * (diff / 1000)
    generateLayers()
}, 100) 
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("cgrSave", JSON.stringify(gameData))
}, 15000)