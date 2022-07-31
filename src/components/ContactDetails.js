import React,{useEffect} from "react";
import {useParams,useLocation} from 'react-router-dom';

const Details = () => {
    const loc = useLocation();
    const {id,name,email,gender} = loc.state.details;
    // const {id} = useParams();
    // var name, email, gender;
    var imgSource = loc.state.avatar;
    // const cont = JSON.parse(localStorage.getItem("contacts")).find((contact) => {
    //     return contact.id === id;
    // });
    // name = cont.name;
    // email = cont.email;
    // gender = cont.gender;
    
    // if (gender.localeCompare("male", undefined, { sensitivity: 'base' }) === 0) imgSource =  avatar ;
    // else imgSource =  favatar ;
    return (
        <div className="main">
            <div className="ui centered card">
                <div className="image">
                    <img alt="avatar" src={imgSource} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="header">{email}</div>
                    <div className="header">{gender}</div>
                </div>
            </div>
        </div>
    );
}

export default Details;