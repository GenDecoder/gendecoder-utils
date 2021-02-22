import React from 'react';
import { useForm } from 'react-100-form';
import { validationFns as vfs } from '../dist';
import './styles.css';

const FIELD_VALUES = { FEMALE: 'f', MALE: 'm' };
const FORM_FIELDS = { NAME: 'name', EMAIL: 'email', PASSWORD: 'password', GENDER: 'gender', AGREEMENT: 'agreement' };
const validate = (valueMap: any = {}, errorMap: any = {}) => {
    const { AGREEMENT, EMAIL, PASSWORD } = FORM_FIELDS;
    errorMap[EMAIL] = vfs.required(valueMap[EMAIL]) || vfs.invalidEmail(valueMap[EMAIL]);
    errorMap[PASSWORD] = vfs.required(valueMap[PASSWORD]) || vfs.invalidPassword(valueMap[PASSWORD]);
    errorMap[AGREEMENT] = vfs.notEqualTo(valueMap[AGREEMENT], true);

    return errorMap;
};
const initialValues = {
    [FORM_FIELDS.EMAIL]: '',
    [FORM_FIELDS.PASSWORD]: '',
    [FORM_FIELDS.GENDER]: FIELD_VALUES.FEMALE,
    [FORM_FIELDS.AGREEMENT]: false,
};

const SampleForm = () => {
    const {
        commit,
        errorMap,
        handleBlur,
        handleChange,
        handleSubmit,
        isDirty,
        isSubmitting,
        isValid,
        rollBack,
        touchedMap,
        values,
    } = useForm(initialValues, validate);

    function onSubmit(values: any) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        }).then(() => {
            commit(values);
            console.log(values);
        });
    }

    return (
        <div className="container">
            <h2>{'Sample Form'}</h2>

            <div>
                <div className="info-container">
                    <div className="info-item">
                        <span>{'Is valid?'}</span>
                        <span>{isValid + ''}</span>
                    </div>

                    <div className="info-item">
                        <span>{'Is dirty?'}</span>
                        <span>{isDirty + ''}</span>
                    </div>

                    <div className="info-item">
                        <span>{'Is Submitting?'}</span>
                        <span>{isSubmitting + ''}</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="action-bar">
                    <button onClick={() => commit(values)} type="button">
                        Commit
                    </button>
                    <button onClick={rollBack} type="button">
                        RollBack
                    </button>
                    <button disabled={!isValid} type="submit">
                        {'Save'}
                    </button>
                </div>

                {/* INPUT FIELD */}

                <div className="field">
                    <label htmlFor={FORM_FIELDS.EMAIL}>{`${FORM_FIELDS.EMAIL}:`}</label>
                    <input
                        id={FORM_FIELDS.EMAIL}
                        name={FORM_FIELDS.EMAIL}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values[FORM_FIELDS.EMAIL]}
                    />
                    <div className="info-container">
                        <div className="info-item">
                            <span>{'Touched'}</span>
                            <span>{String(!!touchedMap[FORM_FIELDS.EMAIL])}</span>
                        </div>

                        <div className="info-item">
                            <span>{'Error'}</span>
                            <span>{String(errorMap[FORM_FIELDS.EMAIL] || 'None')}</span>
                        </div>
                    </div>
                </div>

                {/* INPUT FIELD */}

                <div className="field">
                    <label htmlFor={FORM_FIELDS.PASSWORD}>{`${FORM_FIELDS.PASSWORD}:`}</label>
                    <input
                        id={FORM_FIELDS.PASSWORD}
                        name={FORM_FIELDS.PASSWORD}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        value={values[FORM_FIELDS.PASSWORD]}
                    />
                    <div className="info-container">
                        <div className="info-item">
                            <span>{'Touched'}</span>
                            <span>{String(!!touchedMap[FORM_FIELDS.PASSWORD])}</span>
                        </div>

                        <div className="info-item">
                            <span>{'Error'}</span>
                            <span>{String(errorMap[FORM_FIELDS.PASSWORD] || 'None')}</span>
                        </div>
                    </div>
                </div>

                {/* RADIO FIELD */}

                <div className="field">
                    <label>{`${FORM_FIELDS.GENDER}:`}</label>
                    <div style={{ marginTop: 10 }}>
                        <input
                            checked={FIELD_VALUES.MALE === values[FORM_FIELDS.GENDER]}
                            id={FIELD_VALUES.MALE}
                            name={FORM_FIELDS.GENDER}
                            onChange={handleChange}
                            type="radio"
                            value={FIELD_VALUES.MALE}
                        />
                        <label htmlFor={FIELD_VALUES.MALE} style={{ marginLeft: 5 }}>
                            {'Male'}
                        </label>
                    </div>
                    <div>
                        <input
                            checked={FIELD_VALUES.FEMALE === values[FORM_FIELDS.GENDER]}
                            id={FIELD_VALUES.FEMALE}
                            name={FORM_FIELDS.GENDER}
                            onChange={handleChange}
                            type="radio"
                            value={FIELD_VALUES.FEMALE}
                        />
                        <label htmlFor={FIELD_VALUES.FEMALE} style={{ marginLeft: 5 }}>
                            {'Female'}
                        </label>
                    </div>

                    <div className="info-container">
                        <div className="info-item">
                            <span>{'Error'}</span>
                            <span>{String(errorMap[FORM_FIELDS.GENDER] || 'None')}</span>
                        </div>
                    </div>
                </div>

                {/* CHECKBOX FIELD */}

                <div className="field">
                    <label>{`${FORM_FIELDS.AGREEMENT}:`}</label>
                    <div style={{ marginTop: 10 }}>
                        <input
                            id={FORM_FIELDS.AGREEMENT}
                            name={FORM_FIELDS.AGREEMENT}
                            onChange={handleChange}
                            type="checkbox"
                            value={values[FORM_FIELDS.AGREEMENT]}
                        />
                        <label htmlFor={FORM_FIELDS.AGREEMENT} style={{ marginLeft: 5 }}>
                            {'Do you accept?'}
                        </label>
                    </div>

                    <div className="info-container">
                        <div className="info-item">
                            <span>{'Error'}</span>
                            <span>{String(errorMap[FORM_FIELDS.AGREEMENT] || 'None')}</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SampleForm;
