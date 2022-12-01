import "./Stats.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { pokemon } from "../data";
import { useState, useEffect } from "react";

const Stats = () => {
    const [desc, setDesc] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname.replace("/", "");
    const i = pokemon.findIndex(obj => obj.name === path);
    const poke = pokemon[i];
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${path}`)
            .then(x => x.json())
            .then(x => setDesc(x.flavor_text_entries[1].flavor_text.replace("\f", " ")));
    }, []);

    return (
        <div className="Stats">
            <div className="profile">
                <h1>{path}</h1>
                <img src={poke.official} alt={poke.name} />
                <button onClick={() => navigate("/")}>Home</button>
            </div>
            <div className="basestats">
                {Object.entries(poke.stats).map((x, i) => (
                    <p key={i}> {`${x[0]} - ${x[1]}`} </p>
                ))}
                <p>height - {poke.height / 10} m</p>
                <p>weight - {poke.weight / 10} kg</p>
                <img src={poke.shiny} alt="shiny" />
            </div>
            <p>{desc}</p>
        </div>
    );
};

export default Stats;
