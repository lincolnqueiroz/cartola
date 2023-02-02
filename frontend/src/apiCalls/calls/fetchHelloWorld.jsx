import apiInstance from "../apiInstance";

/**
 * Resgata informação da API
 * @param {String} setMessage - Função para atualizar variável message
 */
function fetchHelloWorld(setMessage){
    const url = "/api/hello-world";

    apiInstance({
        method: "GET",
        url: url,
    })
    .then((response) => {
        setMessage(response.data['message'])
    })
}

export default fetchHelloWorld;