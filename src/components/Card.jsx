import React from 'react';

const Card = ({entidades}) => {
    return(
        <div className="Card-style" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', width: '200px', cursor: 'pointer' }}>
            <img src={entidades.imagem}/>
            <h2>{entidades.nome}</h2>
        </div>
    )
}

export default Card;