import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("This will continue even if we move to another page");
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.variableName !== prevState.variableName) {
    //   // Write your code here
    // }
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h2>This is Namaste React Web Series</h2>
        <User />
        <UserClass name="Shahbaaz from Class" location="Kolkata" />
      </div>
    );
  }
}

export default About;
