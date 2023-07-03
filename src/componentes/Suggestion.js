export default function Suggestion() {

    const suges = [
        { usuario: "nathanwpylestrangeplanet", imguser: "assets/img/nathanwpylestrangeplanet.svg" },
        { usuario: "wawawicomics", imguser: "assets/img/wawawicomics.svg" },
        { usuario: "respondeai", imguser: "assets/img/respondeai.svg" },
        { usuario: "filomoderna", imguser: "assets/img/filomoderna.svg" },
        { usuario: "memeriagourmet", imguser: "assets/img/memeriagourmet.svg" },
    ]

    return (
        <>
            {suges.map(su => (
                <div class="sugestao">
                    <div class="usuario">
                        <img src={su.imguser} alt="adorable_animals" />
                        <div class="texto">
                            <div class="nome">{su.usuario}</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            ))}
            </>
    )
}

