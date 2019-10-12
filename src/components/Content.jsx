import React, { useState, useEffect } from 'react';
import img1 from '../img/photo1.jpeg';

const Header = () => {

    const [ state, setState ] = useState({});

    useEffect(() => {
        fetchJoke();
    },[]);

    const fetchJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(data => setState(data));
    }

    const { icon_url, id, url, value } = state;

    return (
        <main className="main-content">
            <header className="main-header">
                <img src={ img1 } alt="Banner" />
            </header>

            <img src={icon_url} alt={id} />
            <div>
                <a href={url} target="_blank" rel="noopener noreferrer">Link to joke on chucknorris.io</a>
            </div>
            <br/>
            <hr/>
            <button onClick={fetchJoke}>Click here to update Joke</button>
            <p>{value}</p>
        </main>
    );
};

export default Header;