         
function PreencherTabela(DespPag1, DespPag2, renda1, renda2){ //pega os inputs no HTML
        var casos = document.getElementsByName('conta'); //Pega os nomes no radius para analisar quando opção o usuário clicou
        if (casos[0].checked){ //checa o primeiro botão     
                      
            var despPessoa1 = Number(DespPag1);
            var despPessoa2 = Number(DespPag2);
            var despTotal = (despPessoa1 + despPessoa2).toFixed(2);
            
            var perctPessoa1 = ((despPessoa1 / despTotal) * 100).toFixed(2);
            var perctPessoa1 = Number(perctPessoa1);            
            var perctPessoa2 = ((despPessoa2 / despTotal) * 100).toFixed(2);
            var perctPessoa2 = Number(perctPessoa2);        
            var percTotal = (perctPessoa1 + perctPessoa2).toFixed(2);

            var valorDevidoConjuge1 = (despTotal / 2);
            var valorDevidoConjuge2 = (despTotal / 2);
            
            //var valorDev = (despTotal / 2).toFixed(2);           
            var saldoPessoa1 = (despPessoa1 - valorDevidoConjuge1).toFixed(2);
            var saldoPessoa2 = (despPessoa2 - valorDevidoConjuge2).toFixed(2);
            

        } else if (casos[1].checked) {   //checa o segundo botão
            
            var despPessoa1 = Number(DespPag1);
            var despPessoa2 = Number(DespPag2);
            var despTotal = (despPessoa1 + despPessoa2).toFixed(2);
            
            var perctPessoa1 = 60;
            var perctPessoa2 = 40;
            var percTotal = perctPessoa1 + perctPessoa2;
            var valorDevidoConjuge1 = Number(despTotal * 0.60).toFixed(2);
            var valorDevidoConjuge2 = Number(despTotal * 0.40).toFixed(2);
            //var valorDevTotal = (valorDevidoConjuge1 + valorDevidoConjuge2);
            var saldoPessoa1 = Number((despPessoa1) - (valorDevidoConjuge1)).toFixed(2);
            var saldoPessoa2 = ((despPessoa2) - (valorDevidoConjuge2)).toFixed(2); 
        
        } else if (casos[2].checked){ //checa o terceiro botão

            var rendaTotal = Number(renda1) + Number(renda2);
            var despPessoa1 = Number(DespPag1);
            var despPessoa2 = Number(DespPag2);
            var despTotal = (despPessoa1 + despPessoa2).toFixed(2);
            
            var perctPessoa1 = Number((renda1 / rendaTotal)).toFixed(2)*100;
            var perctPessoa2 = Number((renda2 / rendaTotal)).toFixed(2)*100;
            var percTotal = Number(perctPessoa1) + Number(perctPessoa2);
            var valorDevidoConjuge1 = (despTotal * perctPessoa1);
            
            var valorDevidoConjuge2 = (despTotal * perctPessoa2);
            //var valorDev = Number(valorDevidoConjuge1 + valorDevidoConjuge2);
            var saldoPessoa1 = parseFloat(despPessoa1 - valorDevidoConjuge1).toFixed(2);
            var saldoPessoa2 = parseFloat(despPessoa2 - valorDevidoConjuge2).toFixed(2); 

        }
            //Escrever na tabela usando o document.querySelector
        
            document.querySelector(".form-despPessoa1").innerHTML =  despPessoa1; //Procura a classe despesa pessoa 1
            document.querySelector(".form-despPessoa2").innerHTML = despPessoa2;
            document.querySelector(".form-TotalDesp").innerHTML = despTotal;
            document.querySelector(".form-PerctPessoa1").innerHTML = perctPessoa1;
            document.querySelector(".form-PerctPessoa2").innerHTML =  perctPessoa2;
            document.querySelector(".form-PerctTotal").innerHTML = percTotal;
            document.querySelector(".form-ValDev1").innerHTML = valorDevidoConjuge1;
            document.querySelector(".form-ValDev2").innerHTML = valorDevidoConjuge2;
            document.querySelector(".form-ValDevTotal").innerHTML = despTotal;
            document.querySelector(".SaldoP1").innerHTML = saldoPessoa1;
            document.querySelector(".SaldoP2").innerHTML = saldoPessoa2;
            document.querySelector(".SaldoTotal").innerHTML = 0;
        }
