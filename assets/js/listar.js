const saldo = "1.000.000,00"; // Exemplo de saldo

const historico = [
    { tipo: "Entrada", valor: 500000 },
    { tipo: "Saída", valor: 200000 },
    { tipo: "Entrada", valor: 500000 },
    { tipo: "Saída", valor: 100000 },
    { tipo: "Entrada", valor: 300000},
]
document.getElementById("saldo-valor").innerText = saldo;

const lista = document.getElementById("Historico");

historico.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = `${item.tipo}: R$ ${item.valor.toFixed(2)}`;
    lista.appendChild(li);
});