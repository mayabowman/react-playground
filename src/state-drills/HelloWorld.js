import React from 'react'

class HelloWorld extends React.Component {
  state = {
    who: "world"
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.setState({ who: "world" })}>World</button><br />
        <button onClick={() => this.setState({ who: "friend" })}>Friend</button><br />
        <button onClick={() => this.setState({ who: "React" })}>React</button><br />
      </div>
    )
  }
}

export default HelloWorld