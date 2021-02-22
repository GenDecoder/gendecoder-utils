import { FORM_ERRORS as fec } from '../';
import { TValidationFns } from '../type';


const validationFns: TValidationFns = {
    notEqualTo: (valueOne, valueTwo) => valueOne !== valueTwo && fec.NOT_EQUAL_TO,
    invalidEmail: (value) => {
        const regex = new RegExp(
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        );
        return !regex.test(value as string) && fec.INVALID_EMAIL;
    },
    invalidPassword: (value) => {
        // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
        const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
        return !regex.test(value as string) && fec.INVALID_PASSWORD;
    },
    overMaxLength: (value, maxLength) =>
        String(value).trim().length > maxLength && fec.OVER_MAX_LENGTH,
    overMaxValue: (value, maxValue) => Number(value) > maxValue && fec.OVER_MAX_VALUE,
    underMinLength: (value, minLength) =>
        String(value).trim().length < minLength && fec.UNDER_MIN_LENGTH,
    underMinValue: (value, minValue) => Number(value) < minValue && fec.UNDER_MIN_VALUE,
    required: (value) => String(value).trim() === '' && fec.REQUIRED,
    nor: (valueOne, valueTwo) => !(valueOne && valueTwo) && fec.NOR, // Can be improved, or a new one can be added to validate not both zero

    getPasswordErrors: (value) => {
        const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
        const errors = [
            fec.WITHOUT_LOWER_CASE_CHARACTER,
            fec.WITHOUT_NUMBER,
            fec.WITHOUT_SPECIAL_CHARACTER,
            fec.WITHOUT_UPPER_CASE_CHARACTER,
            fec.UNDER_MIN_LENGTH,
        ];
        const str = String(value).trim();

        for (let i = 0; i < str.length; i++) {
            const character = str[i].trim();
            if (character !== '') {
                if (!isNaN(Number(character) * 1)) {
                    errors.splice(errors.indexOf(fec.WITHOUT_NUMBER), 1);
                } else if (specialCharacters.indexOf(character) !== -1) {
                    errors.splice(errors.indexOf(fec.WITHOUT_SPECIAL_CHARACTER), 1);
                } else if (character === character.toUpperCase()) {
                    errors.splice(errors.indexOf(fec.WITHOUT_UPPER_CASE_CHARACTER), 1);
                } else if (character === character.toLowerCase()) {
                    errors.splice(errors.indexOf(fec.WITHOUT_LOWER_CASE_CHARACTER), 1);
                }
            }
        }
        if (str.length > 8) {
            errors.splice(errors.indexOf(fec.UNDER_MIN_LENGTH), 1);
        }
        return errors.length > 0 && errors;
    }
}

export default validationFns;