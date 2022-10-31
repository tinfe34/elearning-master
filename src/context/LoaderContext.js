import React, { useState, useMemo, useContext, createContext } from "react";
import Loader from "../components/Loader";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  const value = useMemo(
    () => ({
      setLoading: (val) =>
        val
          ? setLoader(val)
          : setTimeout(() => {
              setLoader(val);
            }, 1000),
    }),
    [loader]
  );

  return (
    <LoaderContext.Provider value={value}>
      {children}
      <Loader isLoading={loader} />
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
