function Titulo() {

let nome = "Sérgio Mercês";
const imgUrl = './src/assets/img/email.svg'

    return (
        <div>
            <img src={imgUrl} width={50} />
            <h1>Nome: {nome}</h1>
            <p>O rato roeu a rou do rei de Roma.</p>
        </div>
    )
}

export default Titulo;