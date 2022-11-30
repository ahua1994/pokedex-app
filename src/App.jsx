// import { useEffect, useState } from "react";
import "./App.css";
import PokeGrid from "./components/PokeGrid";

function App() {
    // const [data, setData] = useState();
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/151")
    //         .then(x => x.json())
    //         .then(x => setData(x));
    // }, []);
    // function getObj() {
    //     if (data && Object.keys(data).length > 10) {
    //         let newObj = {
    //             id: data.id,
    //             name: data.name,
    //             types: [...data.types.map(x => x.type.name)],
    //             stats: {},
    //             height: data.height,
    //             weight: data.weight,
    //             sprite: data.sprites.front_default,
    //             shiny: data.sprites.front_shiny,
    //             official: data.sprites.other["official-artwork"].front_default,
    //         };
    //         data.stats.map(x => (newObj.stats[x.stat.name] = x.base_stat));
    //         setData(newObj);
    //     }
    // }
    // useEffect(() => {
    //     getObj();
    // }, [data]);

    // gen2
    // "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
    return (
        <div className="App">
            <PokeGrid />
        </div>
    );
}

export default App;
