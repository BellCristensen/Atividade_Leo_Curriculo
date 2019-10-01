import React from 'react';


import "./styles.css";

function InfoPessoal(props) {
    return <div>
        <div id="Dados">

            <h2>Isabela Cristensen</h2>
            <br></br>
            <h3>Idade: {props.idade} 19 anos</h3>
            <br></br>
            <h3>Telefone: {props.telefone} 3624-1825</h3>
            <br></br>
            <h3>Endereço: {props.endereco}Afonso Bittar</h3>
        </div>
    </div>
}

export default InfoPessoal;