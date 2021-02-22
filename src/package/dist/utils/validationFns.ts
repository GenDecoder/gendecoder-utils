import { FORM_ERRORS as fE } from '../';
import { TValidationFns } from '../type';

const validationFns: TValidationFns = {
    notEqualTo: (valueOne, valueTwo) => valueOne !== valueTwo && fE.not_equal_to,
    invalidEmail: (value) => {
        const regex = new RegExp(
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        );
        return !regex.test(value) && fE.invalid_email;
    },
    invalidPassword: (value) => {
        // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
        const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
        return !regex.test(value) && fE.invalid_password;
    },
    overMaxLength: (value, maxLength) =>
        String(value).trim().length > maxLength && fE.over_max_length,
    overMaxValue: (value, maxValue) => Number(value) > maxValue && fE.over_max_value,
    underMinLength: (value, minLength) =>
        String(value).trim().length < minLength && fE.under_min_length,
    underMinValue: (value, minValue) => Number(value) < minValue && fE.under_min_value,
    isEmpty: (value) => String(value).trim() === '' && fE.is_empty,

    getPasswordErrors: (value) => {
        const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
        const errors = [
            fE.without_lower_case,
            fE.without_number,
            fE.without_special_character,
            fE.without_upper_case,
            fE.under_min_length,
        ];
        const str = String(value).trim();

        for (let i = 0; i < str.length; i++) {
            const character = str[i].trim();
            if (character !== '') {
                if (!isNaN(Number(character) * 1)) {
                    errors.splice(errors.indexOf(fE.without_number), 1);
                } else if (specialCharacters.indexOf(character) !== -1) {
                    errors.splice(errors.indexOf(fE.without_special_character), 1);
                } else if (character === character.toUpperCase()) {
                    errors.splice(errors.indexOf(fE.without_upper_case), 1);
                } else if (character === character.toLowerCase()) {
                    errors.splice(errors.indexOf(fE.without_lower_case), 1);
                }
            }
        }
        if (str.length > 8) {
            errors.splice(errors.indexOf(fE.under_min_length), 1);
        }
        return errors.length > 0 && errors;
    }
}

export default validationFns;