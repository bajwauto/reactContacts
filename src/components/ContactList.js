import React from "react";
import Card from "./Card";
import {Link} from 'react-router-dom';

const ConactList = (props) => {
    const allItems = props.list.map(
        (contact) => {
            return (
                <Card contactCard={contact} deleteContact={(id) => {props.deleteContact(id);}}></Card>
            );
        }
    );
    return (
        <div className="ui container">
            <h3 className="ui header">Contacts List</h3>
            <div className="ui celled list">{allItems}</div>
            <Link to = "/add">
                <button className="ui button blue right floated">Add new Contact</button>
            </Link>
        </div>
    );
}

export default ConactList;