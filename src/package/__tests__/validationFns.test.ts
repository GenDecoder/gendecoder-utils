import { FORM_ERRORS as fes, validationFns as vfs } from '../dist';

describe('validationFns', () => {
    describe('notEqualTo', () => {
        it(`RETURNS ${fes.not_equal_to} WHEN valueOne and valueTwo are not equal`, () => {
            expect(vfs.notEqualTo(1, 2)).toEqual(fes.not_equal_to);
        });
        it('RETURNS false WHEN valueOne and valueTwo are equal', () => {
            expect(vfs.notEqualTo(2, 2)).toBeFalsy();
        });
    });
    describe('invalidEmail', () => {
        it(`RETURNS ${fes.invalid_email} WHEN value is an invalid email`, () => {
            expect(vfs.invalidEmail('')).toEqual(fes.invalid_email);
            expect(vfs.invalidEmail('test')).toEqual(fes.invalid_email);
            expect(vfs.invalidEmail('test@')).toEqual(fes.invalid_email);
            expect(vfs.invalidEmail('test@test')).toEqual(fes.invalid_email);
            expect(vfs.invalidEmail('test@test.')).toEqual(fes.invalid_email);
        });
        it('RETURNS false WHEN value is a valid email', () => {
            expect(vfs.invalidEmail('a@a.co')).toBeFalsy();
            expect(vfs.invalidEmail('test@test.co')).toBeFalsy();
            expect(vfs.invalidEmail('test@test.com')).toBeFalsy();
        });
    });
    describe('overMaxLength', () => {
        const maxLength = 5;
        it(`RETURNS ${fes.over_max_length} WHEN value length is greater than ${maxLength}`, () => {
            expect(vfs.overMaxLength('123456', maxLength)).toBe(fes.over_max_length);
            expect(vfs.overMaxLength(123456, maxLength)).toBe(fes.over_max_length);
        });
        it(`RETURNS false WHEN value length is equal or lower than ${maxLength}`, () => {
            expect(vfs.overMaxLength('12345', maxLength)).toBeFalsy();
            expect(vfs.overMaxLength(12345, maxLength)).toBeFalsy();
            expect(vfs.overMaxLength('1234', maxLength)).toBeFalsy();
            expect(vfs.overMaxLength(1234, maxLength)).toBeFalsy();
        });
    });
    describe('overMaxValue', () => {
        const maxValue = 10;
        it(`RETURNS ${fes.over_max_value} WHEN value is greater than ${maxValue}`, () => {
            expect(vfs.overMaxValue(11, maxValue)).toBe(fes.over_max_value);
            expect(vfs.overMaxValue('11', maxValue)).toBe(fes.over_max_value);
        });
        it(`RETURNS false WHEN value is equal or lower than ${maxValue}`, () => {
            expect(vfs.overMaxValue('10', maxValue)).toBeFalsy();
            expect(vfs.overMaxValue(10, maxValue)).toBeFalsy();
            expect(vfs.overMaxValue('9', maxValue)).toBeFalsy();
            expect(vfs.overMaxValue(9, maxValue)).toBeFalsy();
        });
	});
	describe('underMinLength', () => {
		const minLength = 5;
		it(`RETURNS ${fes.under_min_length} WHEN value length is lower than ${minLength}`, () => {
			expect(vfs.underMinLength('1234', minLength)).toBe(fes.under_min_length);
			expect(vfs.underMinLength(1234, minLength)).toBe(fes.under_min_length);
		});
		it(`RETURNS false WHEN value length is equal or greater than ${minLength}`, () => {
			expect(vfs.underMinLength('12345', minLength)).toBeFalsy();
			expect(vfs.underMinLength(12345, minLength)).toBeFalsy();
			expect(vfs.underMinLength('123456', minLength)).toBeFalsy();
			expect(vfs.underMinLength(123456, minLength)).toBeFalsy();
		});
	});
	describe('underMinValue', () => {
		const minValue = 10;
		it(`RETURNS ${fes.under_min_value} WHEN value is lower than ${minValue}`, () => {
			expect(vfs.underMinValue(9, minValue)).toBe(fes.under_min_value);
			expect(vfs.underMinValue('9', minValue)).toBe(fes.under_min_value);
		});
		it(`RETURNS false WHEN value is equal or greater than ${minValue}`, () => {
			expect(vfs.underMinValue('10', minValue)).toBeFalsy();
			expect(vfs.underMinValue(10, minValue)).toBeFalsy();
			expect(vfs.underMinValue('11', minValue)).toBeFalsy();
			expect(vfs.underMinValue(11, minValue)).toBeFalsy();
		});
	})
});
