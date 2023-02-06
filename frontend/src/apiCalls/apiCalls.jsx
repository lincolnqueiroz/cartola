import fetchHelloWorld from "./calls/fetchHelloWorld";
import fetchCreateJogador from "./calls/fetchCreateJogador";
import fetchLogin from "./calls/fetchLogin";

const apiCalls = {
    //url: /api/hello-world
    fetchHelloWorld,

    //url: /api/criar-jogador
    fetchCreateJogador,

    //url: /api/token
    fetchLogin,
}

export default apiCalls;