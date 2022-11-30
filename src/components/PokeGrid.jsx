import "./PokeGrid.scss";
import { pokemon } from "../data";
import PokeCard from "./PokeCard";

const PokeGrid = () => {
    return (
        <div className="PokeGrid">
            {pokemon.map(poke => (
                <PokeCard key={poke.id} poke={poke} />
            ))}
        </div>
    );
};

export default PokeGrid;
