import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://www.googleapis.com/youtube/v3';

export const StateContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    const data = await axios.get(`${baseUrl}/${url}`, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        maxResults: 50,
      },
    });

    setData(data?.data?.items);
    setLoading(false);
  };

  const fetchOtherData = async (url) => {
    const data1 = await axios.get(`${baseUrl}/${url}`, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        maxResults: 50,
        regionCode: 'IN',
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
