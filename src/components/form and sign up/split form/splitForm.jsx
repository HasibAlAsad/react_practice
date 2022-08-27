import React from "react";

import Form from "./form";


class SplitForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        console.log(this.state)
        this.setState({ name: '', email: '', password: '' })
        event.target.reset()

    }

    render() {
        return (
            <div>
                <Form
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}


export default SplitForm;