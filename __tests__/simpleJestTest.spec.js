const bigWords = require('../Converter/bigWords'); 

describe("Beginner testing", () => {
test("Check if a senctence is UPPERCASE", () =>{

const text = "hello, world!";
const expectedOutput = "HELLO, WORLD!";

expect(bigWords(text)).toBe(expectedOutput);

   });
});
