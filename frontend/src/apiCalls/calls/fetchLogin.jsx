import apiInstance from "../apiInstance";
import config from "../../../config";
import { updateIsLoggedIn } from "../../storage/slices/isLoggedInSlice";
import { updateAccessToken } from "../../storage/slices/accessTokenSlice";
import { updateUsername } from "../../storage/slices/usernameSlice"
/**
 * Cria jogador no banco
 * @param {string} email - Email para autenticação
 * @param {string} password - Password para autenticação
 * @param {function} dispatch - Função para gerenciar local storage
 */
function fetchLogin(username,password,dispatch){
    const url = "/api/token/";

    apiInstance({
        method: "POST",
        url: url,
        headers: {"Content-type":"application/x-www-form-urlencoded"}, 
        data:("grant_type=password&client_secret=" + config.CLIENT_SECRET + "&client_id=" + config.CLIENT_ID + "&username=" + username + "&password=" + password),
        // {
        //     "grant_type": 'password',
        //     "username": email,
        //     "password": password,
        //     "client_id": 'PlnGR0xZBEaE3YqAS3GTrqASX7j3ddhrUf5JyKGW',
        //     "client_secret": 'vknXjWAk63oCGDGbF9ZgWzEvLb9caWcGfFG7YcWaJcScHtWuUWTu6rSutmp2UYKDR6Jw2zLqebp0NLhB5EIOU5dNzgnuyVvD3Vy0vQQmGtArqSdgsWB9QZDHyfEqusNv'
        // }
        
    })
    .then((response) => {
        dispatch(updateAccessToken(response.data["access_token"]));
        dispatch(updateUsername(username));
        dispatch(updateIsLoggedIn(true));
        if (response.status != 200){
            console.log(response.content);
        }
        return response;
    })
}

export default fetchLogin;