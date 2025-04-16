import { Link } from 'react-router-dom';
import React from 'react';
import '../components/threeBodies';

export function Home(){
    return(
    <>
        <h1>Hello World</h1>
        <Link to="/">Home</Link>
        <Link to="/arquivos">Arquivos</Link>
    </>
    );
}