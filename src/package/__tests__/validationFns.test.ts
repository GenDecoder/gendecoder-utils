import { FORM_ERRORS as fE, validationFns } from "../dist";

describe("validationFns", () => {
	describe('notEqualTo', () => {
		it(`When valueOne and valueTwo are not equal then ${fE.not_equal_to}`, () => {
			expect(validationFns.notEqualTo(1, 2)).toEqual(fE.not_equal_to);
		});
		it("When valueOne and valueTwo are equal then FALSE", () => {
			expect(validationFns.notEqualTo(2, 2)).toBeFalsy();
		});
	});
	describe('invalidEmail', () => {
		it(`When value is an invalid email then ${fE.invalid_email}`, () => {
			expect(validationFns.invalidEmail('')).toEqual(fE.invalid_email);
			expect(validationFns.invalidEmail('test')).toEqual(fE.invalid_email);
			expect(validationFns.invalidEmail('test@')).toEqual(fE.invalid_email);
			expect(validationFns.invalidEmail('test@test')).toEqual(fE.invalid_email);
			expect(validationFns.invalidEmail('test@test.')).toEqual(fE.invalid_email);
		});
		it("When value is a valid email then  FALSE", () => {
			expect(validationFns.invalidEmail('a@a.co')).toBeFalsy();
			expect(validationFns.invalidEmail('test@test.co')).toBeFalsy();
			expect(validationFns.invalidEmail('test@test.com')).toBeFalsy();
		});
	});
});
