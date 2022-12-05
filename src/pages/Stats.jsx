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
    const colors = ["green", "red", "cyan", "purple", "khaki", "aqua", "gray", "orange"];
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${path}`)
            .then(x => x.json())
            // .catch(() => navigate("*"))
            .then(x => setDesc(x.flavor_text_entries[2].flavor_text.replace("\f", " ")));
    }, []);

    return (
        <>
            {poke ? (
                <>
                    <div className="Stats">
                        <div className="profile">
                            <h1>{poke.name}</h1>
                            <img src={poke.official} alt={poke.name} />
                            <p>Shiny</p>
                            <img src={poke.shiny} alt="shiny" />
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
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="center">
                        <button className="back-btn" onClick={() => navigate("/")}>
                            Home
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <img
                        src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg"
                        alt="surprised pikachu"
                    />
                    <h1>We don't have that pokemon in our database</h1>
                    <button className="back-btn" onClick={() => navigate("/")}>
                        Home
                    </button>
                </>
            )}
        </>
    );
};

export default Stats;
