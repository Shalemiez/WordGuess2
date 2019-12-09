function Letter(character) {
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
module.export.Letter = Letter
let a = new Letter('a')
let b = new Letter('b')
let c = new Letter('c')
let d = new Letter('d')
let e = new Letter('e')
let f = new Letter('f')
let g = new Letter('g')
let h = new Letter('h')
let i = new Letter('i')
let j = new Letter('j')
let k = new Letter('k')
let l = new Letter('l')
let m = new Letter('m')
let n = new Letter('n')
let o = new Letter('o')
let p = new Letter('p')
let q = new Letter('q')
let r = new Letter('r')
let s = new Letter('s')
let t = new Letter('t')
let u = new Letter('u')
let v = new Letter('v')
let w = new Letter('w')
let x = new Letter('x')
let y = new Letter('y')
let z = new Letter('z')


console.log(a)
console.log("here", a.print())
console.log("guess", a.check("B"))
console.log("then", a.print())
console.log("guess2", a.check("a"))
console.log("then2", a.print())

// let q = new Letter('q')
// console.log(q)
// let b = {
//     character: "b",
//     guessYet: false
// }
// console.log(b)


// ex[port letter to make word]

// mkae a new word("test")
