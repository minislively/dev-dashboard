import React, { Component } from "react";

class OutputForm extends Component {
  state = {
    name: "",
    identifier: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      //input값 빈값으로 초기화
      name: "",
      identifier: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="수금측 이름"
        />
        <input
          name="identifier"
          onChange={this.handleChange}
          value={this.state.identifier}
          placeholder="수금측 이메일 계좌번호"
        />
        <button type="submit">작성</button>
      </form>
    );
  }
}

export default OutputForm;
