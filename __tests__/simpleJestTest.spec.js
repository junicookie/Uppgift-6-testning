describe("Beginner testing", () => {
test("Check if a senctence is UPPERCASE", () =>{

const text = "hello, world!";
const expectedOutput = "HELLO, WORLD!";

expect(bigWords(text)).toBe(expectedOutput);

   });
});

function bigWords(x) {
return x.toUpperCase();

};

console.log(bigWords("hello, world!"));