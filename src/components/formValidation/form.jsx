import React from "react";
import PropsType from 'prop-types';
import Input from "./input";

const Form = ({ values, handleChange, handleSubmit, agreement, handleAgreement, errors }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    name="name"
                    label="Name"
                    type="name"
                    placeholder="Enter Name"
                    value={values.name}
                    error={errors.name}
                    onChange={handleChange}
                />
                <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter Email"
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                />
                <Input
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    value={values.password}
                    error={errors.password}
                    onChange={handleChange}
                />
                <Input
                    name="birthDate"
                    label="Birthdate"
                    type="date"
                    value={values.birthDate}
                    error={errors.birthDate}
                    onChange={handleChange}
                />

            </div>
            <div className={ errors.gender ? 'form-control is-invalid' : 'form-control'}>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                    /> Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                    /> Female
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="others"
                        onChange={handleChange}
                    /> Others
                </label>
                {errors.gender && <div className="invalid-feedback">{errors.gender}</div> }
            </div>
            <div className="form-group">
                <label >
                    <input
                        type="checkbox"
                        name="agreement"
                        checked={agreement}
                        onChange={handleAgreement}

                    /> I agree
                </label>
            </div>
            <button
                className="btn btn-primary"
                type="submit"
                disabled={!agreement}
            >Create user
            </button>
        </form>
    )
}

Form.propType = {
    values: PropsType.object.isRequired,
    agreement: PropsType.bool.isRequired,
    errors: PropsType.object.isRequired,
    handleChange: PropsType.func.isRequired,
    handleSubmit: PropsType.func.isRequired,
    handleAgreement: PropsType.func.isRequired

}


export default Form;