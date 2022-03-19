const dulee = {
    state: {
        weight: 70,
        height: 180
    },
    age: 31,
    nickname: "dulee",
}

const { state: {height: tall = 160}, nickname} = dulee;

console.log(tall, nickname);