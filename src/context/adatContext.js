import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axiosApi";

const AdatContext = createContext();

export const AdatProvider = ({ children }) => {

    const [characterList, setCharacterList] = useState([]);

    const getList = async (endpoint, callback) => {
        try {
            const { data } = await axios.get(endpoint);
            callback(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
            callback([]);
        }
    };

    useEffect( () => {
        getList("people/", setCharacterList)
    }, []);

    return(
        <AdatContext.Provider
            value={{characterList}}
        >
            {children}
        </AdatContext.Provider>
    );
};

export default function useAdatContext(){
    return useContext(AdatContext);
}


