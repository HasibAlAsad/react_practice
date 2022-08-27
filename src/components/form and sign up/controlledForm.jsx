import React from "react";

class ControlledForm extends React.Component {

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
        const { name, email, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-control my-2"
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={this.handleChange}

                    />

                    <input
                        className="form-control my-2"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.handleChange}
                    />

                    <input
                        className="form-control my-2"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={this.handleChange}
                    />

                    <button type="submit" className="btn btn-dark"> Submit </button>
                </form>
            </div>
        )
    }
}


export default ControlledForm;