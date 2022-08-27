import React from "react";
import Form from "../sign up form/form";


class SignUp extends React.Component {

    state = {
        values: {
            name: '',
            email: '',
            password: '',
            birthDate: '',
            gender: ''
        },
        agreement: false
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
            
        })
    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.values);
        event.target.reset();
        this.setState({
            values: {
                name: '',
                email: '',
                password: '',
                birthDate: '',
                gender: ''
            },
            agreement: false
        })
    }

    render() {
        return (
            <div>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleAgreement={this.handleAgreement}
                />
            </div>
        )
    }
}

export default SignUp;