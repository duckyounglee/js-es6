const stringArray = [
    "a",
    "aab",
    "aaaaaaaaaaaa",
    "bbbbbbbbbbbb",
    "cccccccccc",
    "dddddddddd",
]

const foundString = stringArray.find(string => string.includes("aa"))

console.log(foundString);