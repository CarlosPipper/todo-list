function adicionarTarefa() {

    const campo = document.getElementById("tarefa");
    const texto = campo.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const lista = document.getElementById("lista");

    const item = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;

    textoTarefa.onclick = function () {
        textoTarefa.classList.toggle("concluida");
    };

    const botao = document.createElement("button");
    botao.textContent = "Excluir";

    botao.onclick = function () {
        item.remove();
    };

    item.appendChild(textoTarefa);
    item.appendChild(botao);

    lista.appendChild(item);

    campo.value = "";
}
