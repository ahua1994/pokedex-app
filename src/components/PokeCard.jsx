import "./PokeCard.scss";
import { Link } from "react-router-dom";

const PokeCard = ({ poke }) => {
    return (
        <Link to={`/${poke.name}`}>
            <div className="PokeCard">
                <img src={poke.sprite} alt={poke.name} />
                <p>{poke.name}</p>
            </div>
        </Link>
    );
};

export default PokeCard;
