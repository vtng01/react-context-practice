import { createContext, useState } from "react";
import horoscopeObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Virgo");
  const sign = horoscopeObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
