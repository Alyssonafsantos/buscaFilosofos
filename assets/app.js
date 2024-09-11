// função para pesquisar
function pesquisar(){
    let campoDeResultado = document.getElementById('resultado'); //selecionar campo para apresentar resultado
    let textoDePesquisa = document.getElementById('campo-de-pesquisa').value; //coletar valor do input
    textoDePesquisa = textoDePesquisa.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // converter valor do input para fácil análise

    //condicional se input está vazio
    if(textoDePesquisa == ""){
        campoDeResultado.innerHTML = `<p>Não foi encontrado nenhum nome de filósofo para pesquisar.</p>`
        return;
    };
    //conjunto de variável
    let resultado = "";
    let name = "";
    let description = "";
    //loop para iteração nos itens da lista de dados
    for(let dado of dados){
        name = dado.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");//converter valor para fácil análise
        //condicional par verificar se inclui o nome ou descrição para encontrar resultados   
        if(name.includes(textoDePesquisa) || description.includes(textoDePesquisa)){
            //montagem do HTML se for encontrado resultados
            resultado += `<div class="resultado-de-pesquisa">
                <h2 class="nome-filosofo" id="nome">${dado.nome}</h2>
                <p class="texto-descritivo-filosofo" id="descritivo-filosofo">${dado.descricao}</p>
                <div class="flex">
                    <img src=${dado.imagem} class="imagem">
                    <p class="resumo">${dado.resumo}</p>
                </div>
                <a href="${dado.link}" target="_blank">link externo de referência.</a>
            </div>`
        };
    };
    //condicional se não houver resultados
    if(!resultado){
        resultado = '<p>Nenhum resultado encontrado</p>'
    }
    //escrever resultado no campo de resultados
    campoDeResultado.innerHTML = resultado;
};