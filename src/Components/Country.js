function Country(props) {

    const countryInLowerCase = props.country ? props.country.toLowerCase() : null // country code is in caps from API so needs to be converted to lower case so flag cdn url below works 

    return (
        <div>
            <p>Country: {props.country}</p>
            <img src={`https://flagcdn.com/16x12/${countryInLowerCase}.png`}></img>
        </div>
    );
}

export default Country