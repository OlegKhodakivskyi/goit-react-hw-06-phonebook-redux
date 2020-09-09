import React, { Component } from "react";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/phoneBookActions/phoneBookActions";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Name">
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>

          <label>
            Number:
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>

          <button type="submit"> Add contact</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: phoneBookActions.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
