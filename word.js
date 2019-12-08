function Word(character) {
    this.character = character
    this.guessYet = false
    this.print = function () {
        if (this.guessYet == true) {
            console.log("YESH")
            return this.character

        } else {
            console.log("NOPE")
            return "_"
        }
    }
    this.check = function (guess) {
        if (guess == this.character) {
            this.guessYet = true

        }
    }

}
