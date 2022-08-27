import React from "react";

class Uncontrolled extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        // console.dir(event.target.name.value)
        const data = {}
        data.name = event.target.name.value;
        data.email = event.target.email.value
        data.password = event.target.password.value
        console.log(data)
        event.target.reset()

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-control my-2"
                        type="text"
                        name="name"
                        placeholder="Enter name"

                    />

                    <input
                        className="form-control my-2"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                    />

                    <input
                        className="form-control my-2"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                    />

                    <button type="submit" className="btn btn-dark"> Submit </button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;