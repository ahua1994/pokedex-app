import "./Stats.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { pokemon } from "../data";
import { sprites } from "../sprites";
import { useState, useEffect } from "react";
import Error from "./Error";

const Stats = () => {
    const [desc, setDesc] = useState("");
    const [evo, setEvo] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname.replace("/", "");
    const i = pokemon.findIndex(obj => obj.name === path);
    const poke = pokemon[i];
    const colors = ["green", "red", "cyan", "purple", "khaki", "aqua", "gray", "orange"];
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${path}`)
            .then(x => x.json())
            // .catch(() => navigate("*"))
            .then(x => {
                setEvo(x.evolves_from_species?.name);
                setDesc(x.flavor_text_entries[2].flavor_text.replace("\f", " "));
            });
    }, []);

    return (
        <>
            {poke ? (
                <>
                    <h1 className="title">{`${poke.name} #${poke.id}`}</h1>
                    <h3 className="types">
                        {poke.types.map(type => (
                            <img key={type} className="type" src={sprites[type]} alt={type} />
                        ))}
                    </h3>
                    <div className="Stats">
                        <div className="profile">
                            <img className="pic" src={poke.official} alt={poke.name} />
                            <div className="shiny">
                                <h4>
                                    <b>Shiny:</b>
                                </h4>
                                <img className="pic" src={poke.shiny} alt="shiny" />
                            </div>
                        </div>
                        <div className="basestats">
                            {Object.entries(poke.stats).map((x, i) => (
                                <div className="stat" key={i}>
                                    {x[0]}
                                    <div className="w3-round">
                                        <div
                                            style={{
                                                width: `${x[1] / 2.5}%`,
                                                filter: `drop-shadow(0 0 4px ${colors[i]})`,
                                            }}
                                            className={`w3-container w3-${colors[i]} w3-center w3-round`}
                                        >
                                            {x[1]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="stat">
                                Height
                                <div className="w3-round">
                                    <div
                                        className={`w3-container w3-${colors[6]} w3-center w3-round`}
                                        style={{
                                            width: `${poke.height}%`,
                                            filter: `drop-shadow(0 0 4px ${colors[6]})`,
                                        }}
                                    >
                                        {poke.height / 10} m
                                    </div>
                                </div>
                            </div>
                            <div className="stat">
                                Weight
                                <div className="w3-round">
                                    <div
                                        className={`w3-container w3-${colors[7]} w3-center w3-round`}
                                        style={{
                                            width: `${poke.weight / 46}%`,
                                            filter: `drop-shadow(0 0 4px ${colors[7]})`,
                                        }}
                                    >
                                        {poke.weight / 10} kg
                                    </div>
                                </div>
                            </div>
                            <h4>
                                <b>Pokemon Data Entry:</b>
                            </h4>
                            <h5>{desc}</h5>
                            <h5 style={{ textTransform: "capitalize", fontSize: "1.3rem" }}>
                                <b>Evolves From:</b> {evo || "Pre-Evolution Not Found"}
                            </h5>
                        </div>
                    </div>
                    <div className="center">
                        <button className="back-btn" onClick={() => navigate("/")}>
                            Home
                        </button>
                    </div>
                </>
            ) : (
                <Error />
            )}
        </>
    );
};

export default Stats;
