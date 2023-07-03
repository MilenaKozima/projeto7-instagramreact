import { useState } from "react";

export default function Post(props) {

    let [curtida, setCurtida] = useState(false);
    let [salvar, setSalvar] = useState(false);

    function curtir() {
        if (!curtida) {
            setCurtida(true);
        } else {
            setCurtida(false);
        }
    }

    function salvo() {
        if (!salvar) {
            setSalvar(true);
        } else {
            setSalvar(false);
        }
    }

    const postagens = [
        { nameuser: "barked", imguser: "assets/img/barked.svg", url: "assets/img/dog.svg" },
        { nameuser: "meowed", imguser: "assets/img/meowed.svg", url: "assets/img/gato-telefone.svg" },
        { nameuser: "barked", imguser: "assets/img/barked.svg", url: "assets/img/dog.svg" },
    ]


    return (

        <div data-test="profile-image" class="post">
            {postagens.map(poste => (
                <>
                    <div class="topo">
                        <div class="usuario">
                            <img src={poste.imguser} alt="meowed" />
                            {poste.nameuser}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img data-test="post-image" onClick={curtir} src={poste.url} alt="gato-telefone" />
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
                                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}