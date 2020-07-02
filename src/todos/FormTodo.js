import React, { Component } from "react";

class FormTodo extends Component {
  state = {
    content: " ",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);

    this.setState({
      content: " ",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content"
          id="content"
          placeholder=" Type your To-Do "
          onChange={this.handleChange}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default FormTodo;
