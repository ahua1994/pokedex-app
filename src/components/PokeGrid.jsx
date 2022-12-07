import "./PokeGrid.scss";

import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <div className="PokeGrid">
            {pokemon.length ? (
                <div className="container">
                    {pokemon.map(poke => (
                        <PokeCard key={poke.id} poke={poke} />
                    ))}
                </div>
            ) : (
                <h3>No Search Results.</h3>
            )}
        </div>
    );
};

export default PokeGrid;
