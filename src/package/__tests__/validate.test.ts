import { FORM_ERRORS, validationFns } from "../dist";

describe("validationFns", () => {
	describe('notEqualTo', () => {
		it(`When valueOne and valueTwo are not equal then ${FORM_ERRORS.NOT_EQUAL_TO}`, () => {
			expect(validationFns.notEqualTo(1, 2)).toEqual(FORM_ERRORS.NOT_EQUAL_TO);
		});
		it("When valueOne and valueTwo are equal then FALSE", () => {
			expect(validationFns.notEqualTo(2, 2)).toBeFalsy();
		});
	});
	describe('invalidEmail', () => {
		it(`When value is an invalid email then ${FORM_ERRORS.INVALID_EMAIL}`, () => {
			expect(validationFns.invalidEmail('')).toEqual(FORM_ERRORS.INVALID_EMAIL);
			expect(validationFns.invalidEmail('test')).toEqual(FORM_ERRORS.INVALID_EMAIL);
			expect(validationFns.invalidEmail('test@')).toEqual(FORM_ERRORS.INVALID_EMAIL);
			expect(validationFns.invalidEmail('test@test')).toEqual(FORM_ERRORS.INVALID_EMAIL);
			expect(validationFns.invalidEmail('test@test.')).toEqual(FORM_ERRORS.INVALID_EMAIL);
		});
		it("When value is a valid email then  FALSE", () => {
			expect(validationFns.invalidEmail('a@a.co')).toBeFalsy();
			expect(validationFns.invalidEmail('test@test.co')).toBeFalsy();
			expect(validationFns.invalidEmail('test@test.com')).toBeFalsy();
		});
	});
});
