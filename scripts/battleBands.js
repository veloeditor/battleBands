let bandNumber = 1

//create a template literal function which evaluates bandNumber, and itterates it, and bandName with a period after the bandNumber. This is stored in a variable called lineUp.

// arrow function makes the return call, it's implicit on one line for return to auto

const lineUp = bandName => `${bandNumber++}. ${bandName}`

const scum = lineUp("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = lineUp("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console