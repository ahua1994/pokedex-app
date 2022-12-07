import { useState } from "react";
import "./Search.scss";
import { types } from "../sprites";
import { useEffect } from "react";

const Search = ({ pokemon, setFiltered }) => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const handleType = e => {
        setType(e.target.value);
        setSearch("");
    };
    const handleChange = e => {
        setSearch(e.target.value);
    };
    const handleSearch = e => {
        e.preventDefault();
        setType("any");
        setFiltered(pokemon.filter(x => x.name.startsWith(search.toLowerCase()) || x.id == search));
    };

    useEffect(() => {
        if (!search) {
            setFiltered(
                type && type !== "any" ? pokemon.filter(x => x.types.includes(type)) : pokemon
            );
        }
    }, [type]);

    return (
        <div className="Search">
            <div className="left">
                <input
                    onChange={handleChange}
                    type="search"
                    value={search}
                    placeholder="Search by id or name"
                />
                <button onClick={handleSearch} type="submit">
                    Search
                </button>
            </div>
            <div className="right">
                <label htmlFor="type">Search by Type </label>
                <select name="type" id="type" onChange={handleType} value={type}>
                    {types.map(x => (
                        <option className="type-option" key={x} value={x}>
                            {x}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Search;
