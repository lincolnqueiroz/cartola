import apiInstance from "../apiInstance";

/**
 * Cria jogador no banco
 * @param {JSON} jogadorJSON - Função para atualizar variável message
 */
function fetchCreateJogador(jogadorJSON){
    const url = "/api/criar-jogador";

    apiInstance({
        method: "POST",
        url: url,
        headers: {"Content-type":"application/json"}, 
        data: JSON.stringify(jogadorJSON),
    })
    .then((response) => {
        if (response.status != 200){
            console.log(response.content);
        }
    })
}

export default fetchCreateJogador;