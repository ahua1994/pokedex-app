import React from "react";
import Banner from "../components/Banner";
import PokeGrid from "../components/PokeGrid";
import Search from "../components/Search";

const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Search />
            <PokeGrid />
        </div>
    );
};

export default Home;
