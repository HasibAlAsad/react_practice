import React from "react";
import Form from "./form";
import PropTypes from 'prop-types';


class SignUp extends React.Component {

    state = {
        values: {
            name: '',
            email: '',
            password: '',
            birthDate: '',
            gender: ''
        },
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }

        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { isValid, errors } = this.validate()
        if (isValid) {
            // console.log(this.state.values);
            this.props.createUser(this.state.values)
            event.target.reset();
            this.setState({
                values: {
                    name: '',
                    email: '',
                    password: '',
                    birthDate: '',
                    gender: ''
                },
                agreement: false,
                errors: {}
            });
        } else {
            this.setState({ errors })
        }
    };

    validate = () => {
        const errors = {}
        const { values: { name, email, password, birthDate, gender } } = this.state

        if (!name) {
            errors.name = 'Provide ur Name'
        } {/** else if (name.length > 30){                  for more validation option
            errors.name = 'name must between 30 characters'
        } */}

        if (!email) {
            errors.email = 'Provide ur Email'
        }
        if (!password) {
            errors.password = 'Provide ur Password'
        }
        if (!birthDate) {
            errors.birthDate = 'Provide ur BirthDate'
        }
        if (!gender) {
            errors.gender = 'Select ur Gender'
        }

        return {
            errors: errors,
            isValid: Object.keys(errors).length === 0
        }

    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }



    render() {
        return (
            <div>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    errors={this.state.errors}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleAgreement={this.handleAgreement}
                />
            </div>
        )
    }
}

SignUp.propTypes ={
    createUser: PropTypes.func.isRequired
}

export default SignUp;