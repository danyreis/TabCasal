    function PreencherTabela(DespPag1, DespPag2){
         
        CalculaTabela(DespPag1, DespPag2);
        
        
    }

    function CalculaTabela(DespPag1, DespPag2){    
    
        var despPessoa1 = Number(DespPag1);
        var despPessoa2 = Number(DespPag2);
        var despTotal = (despPessoa1 + despPessoa2).toFixed(2);
        
        var perctPessoa1 = ((despPessoa1 / despTotal) * 100).toFixed(2);
        perctPessoa1 = Number(perctPessoa1);            
        var perctPessoa2 = ((despPessoa2 / despTotal) * 100).toFixed(2);
        perctPessoa2 = Number(perctPessoa2);        
        percTotal = (perctPessoa1 + perctPessoa2).toFixed(2);

        var valorDev = (despTotal / 2).toFixed(2);           
        var SaldoPessoa1 = (despPessoa1 - valorDev).toFixed(2);
        var SaldoPessoa2 = (despPessoa2 - valorDev).toFixed(2);

        document.querySelector(".form-despPessoa1").innerHTML =  despPessoa1; //Procura a classe despesa pessoa 1
        document.querySelector(".form-despPessoa2").innerHTML = despPessoa2;
        document.querySelector(".form-TotalDesp").innerHTML = despTotal;
        document.querySelector(".form-PerctPessoa1").innerHTML = perctPessoa1;
        document.querySelector(".form-PerctPessoa2").innerHTML =  perctPessoa2;
        document.querySelector(".form-PerctTotal").innerHTML = percTotal;
        document.querySelector(".form-ValDev1").innerHTML = valorDev;
        document.querySelector(".form-ValDev2").innerHTML = valorDev;
        document.querySelector(".form-ValDevTotal").innerHTML = despTotal;
        document.querySelector(".SaldoP1").innerHTML = SaldoPessoa1;
        document.querySelector(".SaldoP2").innerHTML = SaldoPessoa2;
        document.querySelector(".SaldoTotal").innerHTML = 0;




    }
    
    
    