import React from "react";
import { Link } from 'react-router-dom';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gender: ""
        };
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name.localeCompare("") === 0 || this.state.email.localeCompare("") === 0 || this.state.gender.localeCompare("") === 0) {
            alert("All fields are mandatory!!");
            return;
        }
        this.props.contact(this.state);
        this.setState({ name: "", email: "", gender: "Gender" });
        this.props.navigate("/");
    }

    render() {
        return (
            <div className="ui container">
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Contact Name</label>
                        <input type="text" name="contactname" placeholder="John Schmoe"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input type="email" name="email" placeholder="joe@schmoe.com"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Gender</label>
                        <select className="ui dropdown" value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })}>
                            <option value="Gender">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button className="ui submit button blue">Add Contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;