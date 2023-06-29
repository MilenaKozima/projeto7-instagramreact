export default function User(props){
    return(
        <div class="usuario">
        <img src={props.url} alt={props.imagem} />
        <div class="texto">
            <span>
                <strong>{props.name}</strong>
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    );
}