import React from "react";
import PropsTypes from 'prop-types';

const Input = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className={props.error ? 'form-control is-invalid' : 'form-control'}
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
        {props.error && <div className='invalid-feedback'>{props.error}</div> }

    </div>
)

Input.propType = {
    label: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired,
    placeholder: PropsTypes.string.isRequired,
    value: PropsTypes.string.isRequired,
    onChange: PropsTypes.func.isRequired,
    error: PropsTypes.string
}

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    label: ''
}

export default Input;