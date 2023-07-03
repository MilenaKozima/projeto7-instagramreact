import { useState } from "react";

export default function User(props) {

    let [nome, setName] = useState(`${props.name}`);
    let [imagem,setImagem] = useState(`${props.url}`);

    

    function trocaNome() {
        nome = prompt('Qual o seu nome ?');

        if(!nome){
            alert("Nome não digitado. Informe um nome!")
            
        } else {
        setName(nome);
        }
    }

    function trocaImagem() {
        imagem = prompt('Qual imagem quer colocar ?');
        if(imagem === null || imagem === ''){
            alert("Imagem não informada. Coloque uma valida!")
            
        } else {
            setImagem(imagem);
        }
    }

    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={trocaImagem} src={imagem} />
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon test="edit-name" onClick={trocaNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}



