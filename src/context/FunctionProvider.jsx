import React, { createContext, useContext, useState } from 'react';
import {
  getActivityTypes,
  getAllDraftProducts,
  getAllProducts,
  getAllStuff,
  getCategoryType,
  getCities,
  getCurrency,
  getPartycipantType,
} from '../API_HELPERS/apiHelpers';

const FunctionContext = createContext(undefined);

export const useFunctionAuth = () => {
  const functionContext = useContext(FunctionContext);
  if (!functionContext) {
    throw new Error('useFunctionAuth must be used within a FunctionProvider');
  }
  return functionContext;
};

const FunctionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allCities, setAllCities] = useState(null);
  const [allActivityTypes, setAllActivityTypes] = useState(null);
  const [allParticipantsTypes, setAllParticipantsTypes] = useState(null);
  const [allCategoriesTypes, setAllCategoriesTypes] = useState(null);
  const [allStuffTypes, setAllStuffTypes] = useState(null);
  const [allCurrency, setAllCurrency] = useState(null);

  const fetchCities = async () => {
    try {
      setLoading(true);
      const res = await getCities();
      if (res && res.statusCode) {
        setAllCities(res.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchActivitytypes = async () => {
    try {
      setLoading(true);
      const res = await getActivityTypes();
      if (res && res.statusCode) {
        setAllActivityTypes(res.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchParticipantType = async () => {
    try {
      setLoading(true);
      const res = await getPartycipantType();
      if (res && res.statusCode) {
        setAllParticipantsTypes(res.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await getCategoryType();
      if (res && res.statusCode) {
        setAllCategoriesTypes(res.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchStuff = async () => {
    try {
      setLoading(true);
      const res = await getAllStuff();
      if (res && res.statusCode) {
        setAllStuffTypes(res.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDraftProduct = async () => {
    try {
      setLoading(true);
      const res = await getAllDraftProducts();
      if (res && res.statusCode) {
        return res;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await getAllProducts();
      if (res && res.statusCode) {
        return res;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrency = async () => {
    try {
      setLoading(true);
      const res = await getCurrency();
      if (res && res.statusCode) {
        setAllCurrency(res.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FunctionContext.Provider
      value={{
        loading,
        fetchCities,
        fetchActivitytypes,
        fetchParticipantType,
        fetchCategories,
        fetchStuff,
        fetchProduct,
        fetchDraftProduct,
        fetchCurrency,
        cityData: allCities,
        activityData: allActivityTypes,
        participantData: allParticipantsTypes,
        categoriedData: allCategoriesTypes,
        stuffData: allStuffTypes,
        currencyData: allCurrency,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

export default FunctionProvider;
