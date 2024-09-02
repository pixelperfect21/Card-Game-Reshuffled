// Main
function getCardPointGain() {
    let gain = 1
    gain = gain * (Math.pow(3, getUsesInArray(gameData.main.hand, "3")))
    gain = gain * ((10 * getUsesInArray(gameData.main.hand, "10")) + 1)
    gain = gain * (gameData.layers.layer1Amount * getLayer1Mult())
    if (getUsesInArray(gameData.main.hand, "K") == 4) {gain = gain * 1000}
    return gain
}
function getCardProgressGain() {
    let gain = 1
    gain = gain * (Math.pow(2, getUsesInArray(gameData.main.hand, "2")))
    return gain
}
function getCardPointCost() {
    return 10 * Math.pow(((1.5 - (getUsesInArray(gameData.main.hand, "A") * 0.1))), gameData.main.totalConverts)
}
function convertCardPoints() {
    if (gameData.main.cardPoints >= gameData.main.cardProgressionCost) {
        gameData.main.cardPoints = gameData.main.cardPoints - gameData.main.cardProgressionCost
        gameData.main.cardProgression = gameData.main.cardProgression + getCardProgressGain()
        gameData.main.totalConverts++
        gameData.main.cardProgressionCost = getCardPointCost()
        update();
    }
}
function getDrawReq() {
    return Math.pow((1.75 - (getUsesInArray(gameData.main.hand, "4") * 0.04)), gameData.main.totalDraws)
}
function checkDraws() {
    if (gameData.main.cardProgression >= gameData.main.cardReq) {
        gameData.main.cardProgression -= gameData.main.cardReq;
        gameData.main.draws++;
        gameData.main.totalDraws++;
        gameData.main.cardReq = getDrawReq()
        update();
    }
}
function randomizeDrawOptions() {
    let opt1 = Math.floor(Math.random() * gameData.main.deck.length)
    let opt2 = Math.floor(Math.random() * gameData.main.deck.length)
    let opt3 = Math.floor(Math.random() * gameData.main.deck.length)
    gameData.main.drawOptions = [opt1, opt2, opt3]
}
function drawCard(option) {
    if (gameData.main.draws > 0) {
        gameData.main.draws--
        gameData.main.hand.push(gameData.main.deck[gameData.main.drawOptions[option]])
        gameData.main.deck = removeItem(gameData.main.deck, gameData.main.drawOptions[option])
        gameData.main.cardProgressionCost = getCardPointCost()
        gameData.main.cardReq = getDrawReq()
        randomizeDrawOptions()
    }
}
function prestigeConfirm() {
    if (confirm("Are you sure you want to force a Prestige? You will not gain any multipliers.") == true) {
        gameData.main.cardPoints = 0
        gameData.main.cardProgression = 0
        gameData.main.cardProgressionCost = 10
        gameData.main.cardReq = 1
        gameData.main.draws = 0
        gameData.main.deck = ['A','A','A','A','2','2','2','2','3','3','3','3','4','4','4','4','5','5','5','5','6','6','6','6','7','7','7','7','8','8','8','8','9','9','9','9','10','10','10','10','J','J','J','J','K','K','K','K','Q','Q','Q','Q']
        gameData.main.hand = []
        gameData.layers.layer1Amount = 1
        gameData.layers.layer1UpgAmount = 0
        gameData.layers.layer2Amount = 1
        gameData.layers.layer2UpgAmount = 0
        gameData.layers.layer3Amount = 1
        gameData.layers.layer3UpgAmount = 0
        gameData.layers.layer4Amount = 1
        gameData.layers.layer4UpgAmount = 0
        gameData.layers.layer5Amount = 1,
        gameData.layers.layer5UpgAmount = 0
        gameData.main.reshufflers = 3
        gameData.main.totalConverts = 0
        gameData.main.totalDraws = 0
        randomizeDrawOptions()
    }
}

