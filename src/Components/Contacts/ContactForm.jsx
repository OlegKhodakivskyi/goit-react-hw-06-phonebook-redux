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

    const dublicate = this.props.contacts.items.map(
      (contact) => contact.name
    );
    dublicate.find((item) => item === this.state.name)
      ? this.props.alertNotification()
      : this.props.addContact();
    this.setState({ name: "" });
    this.setState({ number: "" });

    // this.props.onAddContact(this.state);
    // this.setState({ name: "", number: "" });
  };

  // findContact = () => {
  //   return this.state.filter
  //     ? this.state.contacts.filter((contact) =>
  //         contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
  //       )
  //     : this.state.contacts;
  // };

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
