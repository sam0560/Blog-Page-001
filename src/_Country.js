import { useState } from "react";
import CountryList from "./_CountryList";

const Country = () => {
    const [countryList, setCountryList] = useState([
    {
        name: "Ghana",
        capital: "Greater Accra",
        continent: "Africa",
        id: 1,
    },
    {
        name: "Nigeria",
        capital: "Abuja",
        continent: "Africa",
        id: 2
    },
    {
        name: "USA",
        capital: "New york",
        continent: "America",
        id: 3
    }
    ]);

    const handleDelete = (id) => {
        const del = countryList.filter(delFilter => delFilter.id !== id);
        setCountryList(del);
    }
    
    return(
        <div className="country">
            <CountryList list={countryList} title="All Countries" handleDelete={handleDelete}/>
            {/* <CountryList list={countryList.filter((filteredList) => filteredList.continent === "Africa")} title="Filtered Countries"/> */}
        </div>
    )
}

export default Country;