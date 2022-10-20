console.log("Hey, Welcome!!!");

const generateRandom = function(length) {
    let randomStr = "";
    const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    while(randomStr.length < length) {
        let random = Math.random();
        random = random * characters.length;
        // console.log(random);
        random = Math.floor(random);
        const singleCharacter = characters[random];
        randomStr = randomStr + singleCharacter;
    }
    return randomStr;
}

console.log(generateRandom(4));