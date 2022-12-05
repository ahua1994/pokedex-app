import "./Search.scss";

const Search = () => {
    return (
        <div className="Search">
            <input type="search" placeholder="Search by id or name"></input>
            <button>Search</button>
            <select name="type" id="type">
                <option value="--">--</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
};

export default Search;
