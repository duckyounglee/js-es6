const gfName = () => "EJ"

console.log(`I love ${gfName()}`);

console.log(`white space test
        asd



    lalal
`);

const styled = string => {
    const el = string + 'test'
    return args => {
        const newString = args[0];
        const sumString = el + newString
        console.log(sumString);
        return sumString
    }
}

const summedStr = styled('front')`back`

console.log(summedStr);

const CC_NUMBER = "1234"

const secretConverter = (str, endShowNum) => {
    return str.slice(endShowNum).padStart(str.length,"*")
};

console.log(secretConverter(CC_NUMBER,2));

console.log("escape exp", "  haha");