function hardReset() {
    if (prompt("To hard reset, enter the phrase \"card game more like fard game!!!\".", "") == "card game more like fard game!!!") {
        gameData = {
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
        randomizeDrawOptions()
        alert("Your save has been reset.")
    }
}
function darkModeToggle() {
    
}
function exportSave() {
    navigator.clipboard.writeText(btoa(JSON.stringify(gameData)))
    alert("Save exported")
}
function importSave() {
    var encodedSave = prompt("Paste exported save here")
    console.log(JSON.parse(atob(encodedSave)));
    gameData = JSON.parse(atob(encodedSave))
}
