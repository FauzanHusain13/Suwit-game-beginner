class Start{
    constructor() {
        this.playerName = "kamu"
        this.botName = "ade rezky"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option
    }

    botBrain() {
        const option = ["Kertas", "Gunting", "Batu"]
        const bot = option[Math.floor(Math.random() * option.length)]
        return bot
    }

    winCalculation() {
        if(this.botOption == "Kertas" && this.playerOption == "Gunting") {
            return this.winner = this.playerName
        } else if(this.botOption == "Kertas" && this.playerOption == "Batu") {
            return this.winner = this.botName
        } else if(this.botOption == "Gunting" && this.playerOption == "Kertas") {
            return(this.winner = this.botName)
        } else if(this.botOption == "Kertas" && this.playerOption == "Batu") {
            return(this.winner = this.playerName)
        } else if(this.botOption == "Batu" && this.playerOption == "Kertas") {
            return(this.winner = this.playerName)
        } else if(this.botOption == "Batu" && this.playerOption == "Gunting") {
            return(this.winner = this.botName)
        } else {
            return this.winner = "SERI"
        }
    }

    matchResult() {
        if(this.winner != "SERI") {
            return `${this.winner} Menang!`
        } else {
            return `WAAAA ${this.winner}, GAK ADA YANG MENANG`
        }
    }
}

function pickOption(params) {
    const start = new Start()
    start.setPlayerOption = params
    start.setBotOption = start.botBrain()
    start.winCalculation()

    const inGame = document.getElementById("inGame")
    const result = document.getElementById("result")
    inGame.textContent = `player: ${start.getPlayerOption} VS bot: ${start.getBotOption}`
    result.textContent = start.matchResult()
}