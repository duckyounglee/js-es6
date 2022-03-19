const dulee = {
    state: {
        weight: 70,
        height: 180
    },
    age: 31,
    user_nickname: "dulee",
}

const { user_nickname: userNickName } = dulee;
console.log(userNickName);

let age = 0;
({ age } = dulee);
console.log(age);

const { state: {weight = 50}} = dulee;
console.log(weight);