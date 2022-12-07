import { useState } from "react";
import Banner from "../components/Banner";
import PokeGrid from "../components/PokeGrid";
import Search from "../components/Search";
import { pokemon } from "../data";

const Home = () => {
    const [filtered, setFiltered] = useState(pokemon);
    return (
        <div className="Home">
            <Banner />
            <Search pokemon={pokemon} setFiltered={setFiltered} />
            <PokeGrid pokemon={filtered} />
        </div>
    );
};

export default Home;
