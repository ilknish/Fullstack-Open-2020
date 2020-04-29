import React from 'react'
import Weather from './Weather';

const Person = ({notesToShow, changeFilter}) => {
    if (notesToShow.length > 10) {
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )
    } else if (notesToShow.length > 1) {
        return (
            <ul>
                {notesToShow.map((person, i) => 
                    <li key={i}>
                        {person.name} {person.number} <button onClick={() => {
                            changeFilter(person.name)
                        }} > show </button>
                    </li>
                )}
            </ul>
        )
    } else {
        return (
            <div>
                {notesToShow.map((country) => 
                <div>
                    <h1>{country.name}</h1>
                    <p>Capital {country.capital}  <br />
                    Population {country.population}</p>
                    <h2>Languages</h2>
                    <ul>
                        {country.languages.map((language,i) => 
                            <li key={i}>
                                {language.name}
                            </li>
                        )}
                    </ul>
                    <img src={country.flag} alt="Flag" width="128"/>
                    <Weather city={country.capital} />
                </div>    
                )}
            </div>            
        )
    }
}

export default Person