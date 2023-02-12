import apiInstance from "../apiInstance";
import config from "../../../config";
import { updateIsLoggedIn } from "../../storage/slices/isLoggedInSlice";
import { updateAccessToken } from "../../storage/slices/accessTokenSlice";
import { updateUsername } from "../../storage/slices/usernameSlice"
/**
 * Cria jogador no banco
 * @param {string} token - token para autenticar requisição
 * @param {string} role - role dos jogadores a retornar
 * @param {string} setList - função para passar a lista de jogadores 
 * @param {string} setOpenPlayerList - função para passar abrir a lista de jogadores
 */
function fetchGetPlayers(token, role, setList, setOpenPlayerList){
    const url = "/api/jogador/" + role + "/get";

    apiInstance({
        method: "GET",
        url: url,
        headers: {"Authorization":"Bearer " + token}, 
    })
    .then((response) => {
        setList(response.data);
        setOpenPlayerList(true);
        if (response.status != 200){
            console.log(response.content);
        }
        return response;
    })
}

export default fetchGetPlayers;