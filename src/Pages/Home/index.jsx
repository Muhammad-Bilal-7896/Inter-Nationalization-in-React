import React from "react";
import Header from "../../Components/Header";
import NavHheader from "../../Components/NavHeader";

const Home = () => {
    return (
        <>
            <Header />
            <NavHheader Nav="Product" text="All Products" />
             <h1 className="text-dark">Internationalization in React</h1>
        </>
    )
}
export default Home;