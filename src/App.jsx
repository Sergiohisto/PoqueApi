import Button from "./components/Button";
import "./sass/App.scss";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import { useState } from "react";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);

  return (
    <>
      {/*tarjetas*/}
      <div className="button-container">
        <Button
          icon={<TiArrowLeftOutline />}
          handleClick={() => {
            (pokemonId===1)?
            setPokemonId(1):
            setPokemonId(pokemonId -1);
          }}
        />
        {pokemonId}
        <Button
          icon={<TiArrowRightOutline />}
          handleClick={() => {
            setPokemonId(pokemonId+1);
          }}
        />
      </div>
    </>
  );
};

export default App;
