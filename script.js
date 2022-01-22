//Cálculo 1

var despPessoa1 = prompt("Digite a despesa da pessoa 1: ");
despPessoa1 = Number(despPessoa1);
var despPessoa2 = prompt("Digite a despesa da pessoa 2: ");
despPessoa2 = Number(despPessoa2);

var despTotal = (despPessoa1) + (despPessoa2);
alert ("As despesas totais do casal são: " + despTotal.toFixed(2));

var perctPessoa1 = ((despPessoa1 / despTotal) * 100).toFixed(2);
perctPessoa1 = Number(perctPessoa1);
alert ("O percentual da pessoa 1 é: " + perctPessoa1);

var perctPessoa2 = ((despPessoa2 / despTotal) * 100).toFixed(2);
alert ("O percentual da pessoa 2 é: " + perctPessoa2);
perctPessoa2 = Number(perctPessoa2);

percTotal = (perctPessoa1 + perctPessoa2);
alert ("O percentual total do casal é: " + percTotal);


var valorDev = (despTotal / 2).toFixed(2);

alert ("O valor devido é: " + valorDev);

var SaldoPessoa1 = (despPessoa1 - valorDev).toFixed(2);
var SaldoPessoa2 = (despPessoa2 - valorDev).toFixed(2);

alert("O saldo da pessoa 1 é: " + SaldoPessoa1);
alert("O saldo da pessoa 2 é: " + SaldoPessoa2);

//Cálculo 2





