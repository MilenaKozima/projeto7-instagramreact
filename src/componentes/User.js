import { useState } from "react";

export default function User(props) {

    let [nome, setName] = useState(`${props.name}`);
    let [imagem,setImagem] = useState(`${props.url}`);

    

    function trocaNome() {
        nome = prompt('Qual o seu nome ?');
        setName(nome);
    }

    function trocaImagem() {
        imagem = prompt('Qual imagem quer colocar ?');
        if(imagem === null || imagem === ''){
            imagem = props.url;
            setImagem(imagem);
        } else {
            setImagem(imagem);
        }
    }

    return (
        <div class="usuario">
            <img onClick={trocaImagem} src={imagem} />
            <div class="texto">
                <span>
                    <strong data-test="name">{(!nome)? 'Nome não informado' : `${nome}`}</strong>
                    <ion-icon data-test="profile-image" test="edit-name" onClick={trocaNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}



