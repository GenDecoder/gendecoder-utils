import { constants, validationFns as vfs } from '../';

const { NAME, EMAIL, PASSWORD, REPEAT_PASSWORD } = constants.FIELD_KEYS;

/**
 * IMPORTANT consideration:
 *    The "vfs" (validationFns) I've defined return "error codes"
 *    but they can return anything --> e.g. "error messages".
 *    Basically it depends on how you manage/display your errors.
 *    For localization purposes I find essier to use codes
 */

/**
 *
 * @param {object} valueMap => Key/Value pair where
 * "key" is the "fieldName" and "value" the value itself
 *
 * @param {object} errorMap => Key/Value pair where
 * "key" is the "fieldName" and "value" the retuned "errorCode/errorMessage"
 */

export default function validate(valueMap: any = {}, errorMap: any = {}) {
    let fieldName: string;

    for (fieldName in valueMap) {
        let errorCode: string | false = false;
        const value = valueMap[fieldName];
        // Getting error code per field
        switch (fieldName) {
            case NAME: {
                errorCode = vfs.required(value) || vfs.overMaxLength(value, 10);
                break;
            }
            case EMAIL: {
                errorCode = vfs.invalidEmail(value);
                break;
            }
            case PASSWORD: {
                errorCode = vfs.invalidPassword(value);
                break;
            }
            case REPEAT_PASSWORD: {
                errorCode = vfs.notEqualTo(value, valueMap[PASSWORD]);
                break;
            }
            default:
                break;
        }
        // Setting in/out error
        if (errorCode) {
            errorMap[fieldName] = errorCode;
        } else if (errorMap.hasOwnProperty(fieldName)) {
            delete errorMap[fieldName];
        }
    }
    return errorMap;
}
