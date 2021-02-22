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

export type TFormErrors = {
    INVALID_EMAIL: TErrorCode;
    INVALID_PASSWORD: TErrorCode;
    NOR: TErrorCode;
    NOT_EQUAL_TO: TErrorCode;
    OVER_MAX_LENGTH: TErrorCode;
    OVER_MAX_VALUE: TErrorCode;
    REQUIRED: TErrorCode;
    UNDER_MIN_LENGTH: TErrorCode;
    UNDER_MIN_VALUE: TErrorCode;
    WITHOUT_LOWER_CASE_CHARACTER: TErrorCode;
    WITHOUT_NUMBER: TErrorCode;
    WITHOUT_SPECIAL_CHARACTER: TErrorCode;
    WITHOUT_UPPER_CASE_CHARACTER: TErrorCode;
}

export type TValidationFns = {
    notEqualTo: (valueOne: any, valueTwo: any) => TErrorCode | false;
    invalidEmail: (value: string) => TErrorCode | false;
    invalidPassword: (value: string) => TErrorCode | false;
    overMaxLength: (value: any, maxLength: number) => TErrorCode | false;
    overMaxValue: (value: any, maxValue: number) => TErrorCode | false;
    underMinLength: (value: any, minLength: number) => TErrorCode | false;
    underMinValue: (value: any, minValue: number) => TErrorCode | false;
    required: (value: any) => TErrorCode | false;
    nor: (valueOne: any, valueTwo: any) => TErrorCode | false;
    getPasswordErrors: (value: string) => TErrorCode[] | false;
}