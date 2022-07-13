import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  state = {
    nameCountry:[
        {
         "country": "Virgin Islands",
         "capital": "Turlock",
         "id": "1"
        },
        {
         "country": "Vietnam",
         "capital": "Evanston",
         "id": "2"
        },
        {
         "country": "Panama",
         "capital": "Palo Alto",
         "id": "3"
        },
        {
         "country": "Senegal",
         "capital": "Kent",
         "id": "4"
        },
        {
         "country": "United Arab Emirates",
         "capital": "Springfield",
         "id": "5"
        },
        {
         "country": "Guadeloupe",
         "capital": "Cedar Park",
         "id": "6"
        },
        {
         "country": "Senegal",
         "capital": "San Antonio",
         "id": "7"
        },
        {
         "country": "Thailand",
         "capital": "Lincoln",
         "id": "8"
        },
        {
         "country": "Saudi Arabia",
         "capital": "Rochester",
         "id": "9"
        },
        {
         "country": "Norway",
         "capital": "Pearl City",
         "id": "10"
        }
       ]
  };
  render() {
    return (
      <div className="container">
        <div className='card__container'>
          {this.state.nameCountry.map((nameCountry) => {
            const { country, capital, id } = nameCountry;
            return (
              <div className="card" key={id}>
                <div className="card__content">
                    <div className="title">{country}</div>
                    <div className="description">{capital}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Card;