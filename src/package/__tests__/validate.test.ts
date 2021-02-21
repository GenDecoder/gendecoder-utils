import { validationFns } from "../dist";

describe("validationFns", () => {
	it("When valueOne and valueTwo are not equal then TRUE", () => {
		const valueOne = 1;
		const valueTwo = 2;
		expect(validationFns.notEqualTo(valueOne, valueTwo)).toBeTruthy();
	});
});
