import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import horoscopeObj from "../data/horoscopes";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopeObj);
  const { setCurrentSign } = useContext(HoroscopeContext);
  return (
    <nav>
      {horoscopes.map((sign) => (
        <span
          key={sign}
          onClick={() => {
            setCurrentSign(sign);
            console.log("nav bar rendered ", new Date().toISOString());
          }}
        >
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
