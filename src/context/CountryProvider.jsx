import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext()

export default function CountryProvider({ children }) {

    const [countryList, setCountryList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        getCountry("https://countriesnow.space/api/v0.1/countries/");
    }, []);

    const getCountry = async (url) => {
        await axios.get(url).then((res) => {
            // console.log(res.data.data);
            setCountryList(res.data.data);
        });
    };

    const values = { countryList, selectedCountry, setSelectedCountry };

    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    )
}