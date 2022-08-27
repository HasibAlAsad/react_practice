import React from "react";
import TextInput from "./textInput";
import PropTypes from 'prop-types';

const Form = props => (
    <form onSubmit={props.handleSubmit}>

        <TextInput
            type="text"
            name="name"
            label="Enter Name"
            placeholder="hasib"
            value={props.values.name}
            onChange={props.handleChange}
        />

        <TextInput
            type="email"
            name="email"
            label="Enter Email"
            placeholder="hasib@test.com"
            value={props.values.email}
            onChange={props.handleChange}
        />

        <TextInput
            type="password"
            name="password"
            label="Enter Password"
            placeholder="*****"
            value={props.values.password}
            onChange={props.handleChange}
        />

        <button type="submit" className="btn btn-dark"> Submit </button>
    </form>
);

Form.propTypes= {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired

}

export default Form;