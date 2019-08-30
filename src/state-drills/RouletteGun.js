import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = (() => {
    const randomChamber = Math.ceil(Math.random() * 8);
    this.setState({
      chamber: randomChamber,
      spinningTheChamber: false
    });
  }, 2000);


  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;
    if (spinningTheChamber) {
      return "Spinning the chamber and pulling the trigger!"
    } else if (chamber === bulletInChamber) {
      return "BANG!!!";
    } else {
      return "You will live to see another day...";
    }
  };

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>Pull the Trigger!</button>
      </div>
    );
  }
}
export default RouletteGun