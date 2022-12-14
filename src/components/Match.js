import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  console.log(sign);
  return (
    <section>
      <button onClick={() => setMatch(!match)}>match</button>
      {match && <div>This sign's match is {sign.match}</div>}
    </section>
  );
};

export default Match;
