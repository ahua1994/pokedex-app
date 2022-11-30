import React from "react";

const PokeCard = ({ poke }) => {
    return (
        <div className="PokeCard">
            <img src={poke.sprite} alt={poke.name} />
        </div>
    );
};

export default PokeCard;
