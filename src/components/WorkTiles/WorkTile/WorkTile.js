import React from 'react';

const workTile = (props) => {
    return (
        <div className="WorkTitle">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default workTile;