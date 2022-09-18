import React from 'react';
import './App.css'

function Tweet(props){
    return (
        <div className='tweet'>
            <h3>Name: {props.name}</h3>
            <p>This is a random tweet</p>
            <h3>Llikes: {props.likes}</h3>
        </div>
    );
}

export default Tweet;
