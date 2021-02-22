import { FORM_ERRORS as fes, validationFns as vfs } from "../dist";

describe("validationFns", () => {
	describe('notEqualTo', () => {
		it(`When valueOne and valueTwo are not equal then ${fes.not_equal_to}`, () => {
			expect(vfs.notEqualTo(1, 2)).toEqual(fes.not_equal_to);
		});
		it("When valueOne and valueTwo are equal then FALSE", () => {
			expect(vfs.notEqualTo(2, 2)).toBeFalsy();
		});
	});
	describe('invalidEmail', () => {
		it(`When value is an invalid email then ${fes.invalid_email}`, () => {
			expect(vfs.invalidEmail('')).toEqual(fes.invalid_email);
			expect(vfs.invalidEmail('test')).toEqual(fes.invalid_email);
			expect(vfs.invalidEmail('test@')).toEqual(fes.invalid_email);
			expect(vfs.invalidEmail('test@test')).toEqual(fes.invalid_email);
			expect(vfs.invalidEmail('test@test.')).toEqual(fes.invalid_email);
		});
		it("When value is a valid email then  FALSE", () => {
			expect(vfs.invalidEmail('a@a.co')).toBeFalsy();
			expect(vfs.invalidEmail('test@test.co')).toBeFalsy();
			expect(vfs.invalidEmail('test@test.com')).toBeFalsy();
		});
	});
	describe('overMaxLength', () => {
		const maxLength = 5;
		it(`RETURNS ${fes.over_max_length} WHEN *value* length is greater than ${maxLength}`, () => {
			expect(vfs.overMaxLength('123456', maxLength)).toBe(fes.over_max_length);
			expect(vfs.overMaxLength(123456, maxLength)).toBe(fes.over_max_length);
		});
		it(`RETURNS false WHEN *value* length is equal or lesser than ${maxLength}`, () => {
			expect(vfs.overMaxLength('12345', maxLength)).toBeFalsy();
			expect(vfs.overMaxLength(12345, maxLength)).toBeFalsy();
			expect(vfs.overMaxLength('1234', maxLength)).toBeFalsy();
			expect(vfs.overMaxLength(1234, maxLength)).toBeFalsy();
		});
	});
	describe('overMaxValue', () => {
		const maxValue = 10;
		it(`RETURNS ${fes.over_max_value} WHEN *value* is greater than ${maxValue}`, () => {
			expect(vfs.overMaxValue(11, maxValue)).toBe(fes.over_max_value);
			expect(vfs.overMaxValue('123456', maxValue)).toBe(fes.over_max_value);
		});
		it(`RETURNS false WHEN *value* is equal or lesser than ${maxValue}`, () => {
			expect(vfs.overMaxValue('10', maxValue)).toBeFalsy();
			expect(vfs.overMaxValue(10, maxValue)).toBeFalsy();
			expect(vfs.overMaxValue('9', maxValue)).toBeFalsy();
			expect(vfs.overMaxValue(9, maxValue)).toBeFalsy();
		});
	})
});
