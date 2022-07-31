import React from "react";
import image from "../images/avatar.png";
import fimage from "../images/favatar.png";
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { id, name, email, gender } = props.contactCard;
    var img;
    console.log("id added - " + id);
    if (gender.localeCompare("male", undefined, { sensitivity: 'base' }) === 0) {
        img = image;
    }
    else {
        img = fimage;
    }
    return (
        <div className="item">
            <img className="ui avatar image" alt="avatar" src={img}></img>
            <div className="content">
                <Link to={`/contactDetails/${id}`} 
                      state={{details:props.contactCard,avatar:img}}  
                >
                    <div className="Header"><b>{name}</b></div>
                </Link>
                {email}
            </div>

            <i className="trash alternate outline icon right floated red large"
                onClick={() => props.deleteContact(id)}></i>
        </div>
    );
}

export default Card;