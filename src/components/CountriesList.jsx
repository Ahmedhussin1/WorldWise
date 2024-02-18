import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "../components/Message";
function CountriesList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length)
    return (
      <Message
        message={"Add Your First City By Clicking On A Country On The Map"}
      />
    );
    const countries = cities.reduce((arr,city)=>{
        if(!arr.map((el)=>el.country).includes(city.country))
        return [...arr,{country:city.country, emoji:city.emoji}];
    else return arr ;
    },[])
  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}

export default CountriesList;
