import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='ui container'>
            <Link to="/">
                <button className="ui icon button right floated">
                    <i className="home icon"></i>
                </button>
            </Link>
            <br/>
        </div>
    );
}

export default Home;