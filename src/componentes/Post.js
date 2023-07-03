import { useState } from "react";

export default function Post(props) {

    let [curtida, setCurtida] = useState(false);
    let [salvar, setSalvar] = useState(false);
    let [quantidade, setQuantidade] = useState(props.quantidade);

    function curtir() {
        if (!curtida) {
            setCurtida(true);
            quantidade++;
            console.log(quantidade);
            setQuantidade(quantidade);
        } else {
            setCurtida(false);
            quantidade--;
            console.log(quantidade);
            setQuantidade(quantidade);
        }
    }

    function salvo() {
        if (!salvar) {
            setSalvar(true);
        } else {
            setSalvar(false);
        }
    }

    function curtirimg() {
        if (!curtida) {
            setCurtida(true);
            quantidade++;
            console.log(quantidade);
            setQuantidade(quantidade);
        } 
    }


    return (
        <>
                <div data-test="post" class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={props.imguser} alt="meowed" />
                            {props.nameuser}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img data-test="post-image" onClick={curtirimg} src={props.url} alt="gato-telefone" />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                {
                                    !curtida ?
                                        <ion-icon data-test="like-post" class={curtida} onClick={curtir} name="heart-outline"></ion-icon>
                                        :
                                        <ion-icon data-test="like-post" class={curtida} onClick={curtir} color="danger" name="heart"></ion-icon>
                                }
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                {
                                    !salvar ?
                                        <ion-icon data-test="save-post" class={salvar} onClick={salvo} name="bookmark-outline"></ion-icon>
                                        :
                                        <ion-icon data-test="save-post" class={salvar} onClick={salvo} name="bookmark"></ion-icon>
                                }

                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="assets/img/respondeai.svg" alt="respondeai" />
                            <div class="texto">
                                Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {quantidade} pessoas</strong>
                            </div>
                        </div>
                    </div>
                    </div>
            </>
    );
}
