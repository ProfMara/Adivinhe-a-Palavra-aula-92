var nome1  ='';
var nome2  = '';
function add(){
    nome1 = document.getElementById("inputNome1").value;
    nome2 = document.getElementById("inputNome2").value;
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);
    window.location="game.html";
}

function carregar(){
    var nome1 = localStorage.getItem("player1");
    var nome2 = localStorage.getItem("player2");
    document.getElementById("legendaNome1").innerHTML = nome1;
    document.getElementById("legendaNome2").innerHTML = nome2;
    
    document.getElementById("playerPergunta").innerHTML = nome1;
    document.getElementById("playerResposta").innerHTML = nome2;
}
var palavra ='';
function enviarPalavra(){
    palavra = document.getElementById("palavra").value;
    palavra = palavra.toLowerCase();
    
    letra1 = palavra.charAt(1);

    metade = Math.floor(palavra.length/2);
    letra2 = palavra.charAt(metade);

    ultima = palavra.length - 1;
    letra3 = palavra.charAt(ultima);

    p1 = palavra.replace(letra1, "_");
    
    p2 = p1.replace(letra2, "_");
    palavraNova = p2.replace(letra3, "_");

    questao = "<h4 id='exibirPalavra' > P." + palavraNova +"</h4>";
    caixaResposta = "<br> Resposta: <input   id=resposta>";
    botao = "<br> <br> <button class='btn btn-info' onclick='checar()'>Checar</button>";
    linha = questao + caixaResposta + botao;
    document.getElementById("output").innerHTML = linha;

}
//é aqui que declara as variáveis


//é aqui que cria a function
