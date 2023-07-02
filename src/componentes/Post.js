import { useState } from "react";

export default function Post(props){
    
    let [curtida,setCurtida] = useState("branco");
    let [salvar, setSalvar] = useState("branco");

    function curtir(){
        if ( curtida === "branco"){
            //cor = "vermelho";
            setCurtida("vermelho");
        }else{
            setCurtida("branco");
        }
    }

    function salvo(){
        if ( salvar === "branco"){
            //cor = "vermelho";
            setSalvar("salvo");
        }else{
            setSalvar("branco");
        }
    }



    return(
        <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.usuario} alt="meowed" />
                meowed
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img onClick={curtir} src={props.url} alt="gato-telefone" />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon class={curtida} onClick={curtir} name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon class={salvar} onClick={salvo} name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src="assets/img/respondeai.svg" alt="respondeai" />
                <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    );
}