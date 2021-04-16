export const getStaticProps = async () => { //garantindo que ta gerando um conteudo estatico
    const resp = await fetch('http://localhost:3000/api/random') //pegando valor do backend/api
    const data = await resp.json()

    return {
        props: {
            revalidate: 10, //a cada 10 seg ele vai regerar a pagina
            valor: data.valor
        },

    }
}

const Estatico = props => {
    return (
        <div>
            <h1>
                Conteúdo Estático
            </h1>
            <h2>
                Último valor = {props.valor}
            </h2>
        </div>
    )
}

export default Estatico
