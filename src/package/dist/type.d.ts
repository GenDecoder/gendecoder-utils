import { FORM_ERRORS } from "./constants";

export type TFormErrors = {
    invalid_email: 'invalid_email',
    invalid_password: 'invalid_password',
    is_empty: 'is_empty',
    not_equal_to: 'not_equal_to',
    over_max_length: 'over_max_length',
    over_max_value: 'over_max_value',
    under_min_length: 'under_min_length',
    under_min_value: 'under_min_value',
    without_lower_case: 'without_lower_case',
    without_number: 'without_number',
    without_special_character: 'without_special_character',
    without_upper_case: 'without_upper_case'
}

export type TValidationFns = {
    getPasswordErrors: (value: string) => (keyof TFormErrors)[] | false;
    invalidEmail: (value: string) => typeof FORM_ERRORS['invalid_email'] | false;
    invalidPassword: (value: string) => typeof FORM_ERRORS['invalid_password'] | false;
    isEmpty: (value: any) => typeof FORM_ERRORS['is_empty'] | false;
    notEqualTo: (valueOne: any, valueTwo: any) => typeof FORM_ERRORS['not_equal_to'] | false;
    overMaxLength: (value: any, maxLength: number) => typeof FORM_ERRORS['over_max_length'] | false;
    overMaxValue: (value: any, maxValue: number) => typeof FORM_ERRORS['over_max_value'] | false;
    underMinLength: (value: any, minLength: number) => typeof FORM_ERRORS['under_min_length'] | false;
    underMinValue: (value: any, minValue: number) => typeof FORM_ERRORS['under_min_value'] | false;
}