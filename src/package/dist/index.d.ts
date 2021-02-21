export type TErrorCode = 'error_code_invalid_email' |
    'error_code_invalid_password' |
    'error_code_nor' |
    'error_code_not_equal_to' |
    'error_code_over_max_length' |
    'error_code_over_max_value' |
    'error_code_required' |
    'error_code_under_min_length' |
    'error_code_under_min_value' |
    'error_code_without_lower_case' |
    'error_code_without_number' |
    'error_code_without_special_character' |
    'error_code_without_upper_case';

export type TFieldKey = 'first_name' |
    'last_name' |
    'gender' |
    'name' |
    'email' |
    'password' |
    'repeat_password' |
    'message' |
    'agreement';

export type TFieldValue = 'm' | 'f';
declare module 'gendecoder-utils' {
    export const constants: {
        FORM_ERRORS: { [key: string]: TErrorCode, }
        FIELD_KEYS: { [key: string]: TFieldKey },
        FIELD_VALUES: { [key: string]: TFieldValue }
    };
    export function validate (valueMap: any, errorMap: any): any;
    export const validationFns: {
        notEqualTo: (valueOne: any, valueTwo: any) => boolean;
        invalidEmail: (value: string) => boolean;
        invalidPassword: (value: string) => boolean;
        overMaxLength: (value: any, maxLength: number) => boolean;
        overMaxValue: (value: any, maxValue: number) => boolean;
        underMinLength: (value: any, minLength: number) => boolean;
        underMinValue: (value: any, minValue: number) => boolean;
        required: (value: any) => boolean;
        nor: (valueOne: any, valueTwo: any) => boolean;
        getPasswordErrors: (value: string) => boolean;
    };
}

