describe('Test Suite X', () => {
    beforeEach(() => {
        console.log("Initialization ...");
    });

    it("Test Case 1", () => {
        const number1 = 10;
        const number2 = 20;
        const actualOutput = number1 + number2;
        const expectedOutput = 30;

        expect(expectedOutput).to.equal(actualOutput);
    });

    afterEach(() => {
        console.log("Test Cleanup!");
    })
});