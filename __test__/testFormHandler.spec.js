import { handleSubmit } from "../src/client/js/formHandler";
import { validate } from "../src/client/js/validator";

describe("Testing the validation functionality", () => {
    test("Testing the validate() function with non-empty input", () => {
        let bOutput = validate("hello");
        expect(bOutput).toBe(true);
    });
    test("Testing the validate() functionwith empty input", () => {
        let bOutput = validate("hello");
        expect(bOutput).toBe(true);
    });
});


describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
})