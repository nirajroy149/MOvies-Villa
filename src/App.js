import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import searchicon from "./images/search.png"

function App() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("Game")
    const [movieName, setMovieName] = useState("");

    function handleChange(e){
        const name = e.target.value;
        setMovieName(name);
    }

    function handleClick(){
        setLoading(true)
        searchMovies(movieName);
    }

    const searchMovies = async (title) => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
                'X-RapidAPI-Key': '7cb7c78938msh0ac0a24c3ccd7e9p122e80jsn6f4afd6ee3d7'
            }
        };
        console.log(process.env.REACT_APP_KEY);

        fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${title}`, options) 
            .then(response => response.json())
            .then(data => {
                setMovies(data.d);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        searchMovies(title)
    }, []);

    if (loading) return <h1 className="heading">Loading...</h1>

    return <>
        <h1 className="heading">MOvies Villa</h1>

        <div className="search">
            <input
                onChange={handleChange}
                value={movieName}
                type="text"
                placeholder="Search for movies"
            />
            <img
            onClick = {handleClick}
                src={searchicon}
                alt="notfound"
            />
        </div>

        <div className="container">
            {movies.map((item) => {
                return <Card type={title} key={item.id} title={item.l} imageUrl={item.i.imageUrl} />
            })}
        </div>
    </>
}
export default App;

