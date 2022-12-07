import "./PokeGrid.scss";

import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <div className="PokeGrid">
            {pokemon.length
                ? pokemon.map(poke => <PokeCard key={poke.id} poke={poke} />)
                : "No Search Results."}
        </div>
    );
};

export default PokeGrid;
