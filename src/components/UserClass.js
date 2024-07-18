import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/akshaymarch7");
    const data = await res.json();
    this.setState({ userInfo: data });
  }

  render() {
    //  const { name, location } = this.props;
    const { count2 } = this.state; // We can destructure state like this
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Count1: {this.state.count1}</h1>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count2
        </button>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shahbaaz</h4>
      </div>
    );
  }
}

export default UserClass;
