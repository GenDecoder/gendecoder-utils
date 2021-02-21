import { constants } from '../';

const fec = constants.FORM_ERRORS;

export const notEqualTo = (valueOne: any, valueTwo: any) => valueOne !== valueTwo && fec.NOT_EQUAL_TO;
export const invalidEmail = (value: any) => {
    const regex = new RegExp(
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    return !regex.test(value as string) && fec.INVALID_EMAIL;
};
export const invalidPassword = (value: any) => {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
    const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
    return !regex.test(value as string) && fec.INVALID_PASSWORD;
};
export const overMaxLength = (value: any, maxLength: number) =>
    String(value).trim().length > maxLength && fec.OVER_MAX_LENGTH;
export const overMaxValue = (value: any, maxValue: number) => Number(value) > maxValue && fec.OVER_MAX_VALUE;
export const underMinLength = (value: any, minLength: number) =>
    String(value).trim().length < minLength && fec.UNDER_MIN_LENGTH;
export const underMinValue = (value: any, minValue: number) => Number(value) < minValue && fec.UNDER_MIN_VALUE;
export const required = (value: any) => String(value).trim() === '' && fec.REQUIRED;
export const nor = (valueOne: any, valueTwo: any) => !(valueOne && valueTwo) && fec.NOR; // Can be improved, or a new one can be added to validate not both zero

export const getPasswordErrors = (value: any) => {
    const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
    const errors = new Set([
        fec.WITHOUT_LOWER_CASE_CHARACTER,
        fec.WITHOUT_NUMBER,
        fec.WITHOUT_SPECIAL_CHARACTER,
        fec.WITHOUT_UPPER_CASE_CHARACTER,
        fec.UNDER_MIN_LENGTH,
    ]);
    const str = String(value).trim();

    for (let i = 0; i < str.length; i++) {
        const character = str[i].trim();
        if (character !== '') {
            if (!isNaN(Number(character) * 1)) {
                errors.delete(fec.WITHOUT_NUMBER);
            } else if (specialCharacters.indexOf(character) !== -1) {
                errors.delete(fec.WITHOUT_SPECIAL_CHARACTER);
            } else if (character === character.toUpperCase()) {
                errors.delete(fec.WITHOUT_UPPER_CASE_CHARACTER);
            } else if (character === character.toLowerCase()) {
                errors.delete(fec.WITHOUT_LOWER_CASE_CHARACTER);
            }
        }
    }
    if (str.length > 8) {
        errors.delete(fec.UNDER_MIN_LENGTH);
    }
    return errors;
};