import React from 'react';
import entidades from '../data/entidades.json';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function Arquivos(){
    return(
        <div>
            {entidades.map(entidade => (
                <Link to={`/arquivos/${entidade.id}`} key={entidade.id}>
                    <Card entidades={entidade}/>
                </Link>
            ))}
        </div>
    )
}

export default Arquivos;