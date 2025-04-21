import React from 'react';
import Trisols from '../components/Trisols';

export function Home(){
    return(
        <main className="fundo-3d">
            <Trisols />
            <div className="overlay">
                <h1 className="title">3 BODY PROBLEM</h1>
                <button>Iniciar</button>
            </div>
      </main>
    );
}