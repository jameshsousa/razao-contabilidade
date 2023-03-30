document.getElementById("form-transacao").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const tipo = document.getElementById("tipo").value;

    const tabelaCorpo = document.getElementById("tabela-corpo");
    const novaLinha = document.createElement("tr");

    const dataCelula = document.createElement("td");
    dataCelula.textContent = new Date().toLocaleDateString();
    novaLinha.appendChild(dataCelula);

    const descricaoCelula = document.createElement("td");
    descricaoCelula.textContent = descricao;
    novaLinha.appendChild(descricaoCelula);
    
    const debitoCelula = document.createElement("td");
    debitoCelula.textContent = tipo === "debito" ? valor.toFixed(2) : "-";
    novaLinha.appendChild(debitoCelula);

    const creditoCelula = document.createElement("td");
    creditoCelula.textContent = tipo === "credito" ? valor.toFixed(2) : "-";
    novaLinha.appendChild(creditoCelula);

    tabelaCorpo.appendChild(novaLinha);

    // Limpar campos do formulário
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
});

