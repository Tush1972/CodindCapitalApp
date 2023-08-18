import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here


class Capitals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCapitalIndex: 0, 
    };
  }

  handleCapitalClick = index => {
    this.setState({
      selectedCapitalIndex: index,
    });
  };

  render() {
    const { selectedCapitalIndex } = this.state;
    const { countryAndCapitalsList } = this.props;

    const selectedCapital = countryAndCapitalsList[selectedCapitalIndex];
    const { capitalDisplayText, country } = selectedCapital;

    return (
      <div className="capitals-app">
        <div className="capitals-list">
          {countryAndCapitalsList.map((item, index) => (
            <button
              key={item.id}
              className={`capital-button ${
                index === selectedCapitalIndex ? 'active' : ''
              }`}
              onClick={() => this.handleCapitalClick(index)}
            >
              {item.capitalDisplayText}
            </button>
          ))}
        </div>
        <div className="selected-capital">
          <h2>{capitalDisplayText}</h2>
          <p>Country: {country}</p>
        </div>
      </div>
    );
  }
}

export default Capitals;
