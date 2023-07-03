import Post from "./Post";

export default function Posts() {

    const postagens = [
        { nameuser: "barked", imguser: "assets/img/barked.svg", url: "assets/img/dog.svg", quantidade: "1000" },
        { nameuser: "meowed", imguser: "assets/img/meowed.svg", url: "assets/img/gato-telefone.svg", quantidade: "2000" },
        { nameuser: "nathan", imguser: "assets/img/nathanwpylestrangeplanet.svg", url: "assets/img/nathanwpylestrangeplanet.svg", quantidade: "3000" },
    ]
    return (
        <div class="posts">
            {postagens.map((p) => 
            (<Post nameuser={p.nameuser}
            imguser={p.imguser}
            url={p.url}
            quantidade={p.quantidade}
            />))};
        </div>
    );
}