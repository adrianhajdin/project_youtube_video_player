import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://youtube-v31.p.rapidapi.com';

export const StateContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    setData([]);
    const data = await axios.get(`${baseUrl}/${url}`, {
      params: {
        maxResults: 50,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    });

    setData(data?.data?.items);
    setLoading(false);
  };

  const fetchOtherData = async (url) => {
    const data1 = await axios.get(`${baseUrl}/${url}`, {
      params: {
        maxResults: 50,
        regionCode: 'IN',
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    });
    setResults(data1?.data?.items);
  };

  return (
    <StateContext.Provider
      value={{
        fetchData,
        fetchOtherData,
        results,
        data,
        loading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
