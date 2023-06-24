const form = document.getElementById('formAtividade');
const emojiAprovado = '&#128515;';
const emojiReprovado = '&#128533;';
const atividades = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">aprovado</span>';
const spanReprovado = '<span class = "resultado reprovado">reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota minima"));


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
    atualizaMediaFinal();
});
function adicionalinha(){
    
    const inputNomeAtividade = document.getElementById('nomeA');
    const inputNotaAtividade = document.getElementById('notaA');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida.`)
    }else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha='<tr>';
    linha+=`<td> ${inputNomeAtividade.value}</td>`;
    linha+=`<td> ${inputNotaAtividade.value}</td>`;
    linha+=`<td> ${inputNotaAtividade.value >= notaMinima ? emojiAprovado : emojiReprovado}</td>`;
    linha+=`</tr>`;

    linhas += linha;
}
    inputNomeAtividade.value="";
    inputNotaAtividade.value="";

}
function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;

}
function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediaFinalValor').innerHTML= mediaFinal;
    document.getElementById('mediaFinalResultado').innerHTML= mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    
    
}
function calculaMediaFinal(){

    let somaDasNotas = 0;

    for(let i = 0 ; i < notas.length; i++){
        somaDasNotas+=notas[i];
    }

    return somaDasNotas / notas.length;
    
}