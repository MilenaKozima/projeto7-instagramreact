
const apastorie = [
    {usuario: "nathanwpylestrangeplanet", imguser: "assets/img/nathanwpylestrangeplanet.svg"},
    {usuario:"wawawicomics", imguser:"assets/img/wawawicomics.svg"},
    {usuario:"respondeai", imguser:"assets/img/respondeai.svg"},
    {usuario:"filomoderna", imguser:"assets/img/filomoderna.svg"},
    {usuario:"memeriagourmet", imguser:"assets/img/memeriagourmet.svg"},
    {usuario:"9gag", imguser:"assets/img/9gag.svg"},
    {usuario:"meowed", imguser:"assets/img/meowed.svg"},
    {usuario:"barked", imguser:"assets/img/barked.svg"},
]

export default function Stories(){
    return(
        <div class="stories">

            {apastorie.map(st=> <Story sto={st}/>)}

        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
}

function Story(props){
    return(
        <div class="story">
            
        <div class="imagem">
            <img src={props.sto.imguser} alt="9gag" />
        </div>
        <div class="usuario">
            {props.sto.usuario}
        </div>
    </div>
    )
}