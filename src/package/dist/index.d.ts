/// <reference path="type.d.ts" />

import { TFormErrors, TValidationFns } from "./type";

declare module 'gendecoder-utils' {
    export const FORM_ERRORS: TFormErrors;
    export const validationFns: TValidationFns;
}

