console.log("Arquivo JS carregado!");

// ----- INICIO -----
function cadastrar() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let plano = document.getElementById("plano").value;
    let enviar_m = document.getElementById("enviar_m").value;

    let mensagem = document.getElementById("mensagem");

    // Validação dos campos
    if (nome === "" || email === "" || idade === "" || plano === "" || enviar_m === "") {

        mensagem.innerHTML = "Preencha todos os campos.";

    // CSS para erro
        mensagem.style.color = "red";
        mensagem.style.backgroundColor = "#ffcccc";

    } else {

    // Validação da idade
        if (idade < 18) {

            mensagem.innerHTML =
                "Usuários menores de idade não podem enviar mensagem.";

        // CSS para erro
            mensagem.style.color = "red";
            mensagem.style.backgroundColor = "#ffcccc";

        } else {

            mensagem.innerHTML =
                `Mensagem enviada com sucesso!`;

        // CSS para sucesso
            mensagem.style.color = "green";
            mensagem.style.backgroundColor = "#ccffcc";

        }
    }
}

//----- LIMPAR -----
function limparFormulario() {

    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("plano").selectedIndex = 0;
    document.getElementById("enviar_m").value = "";

    // Limpa a mensagem
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "";

    // Remove os estilos aplicados
    mensagem.style.color = "";
    mensagem.style.backgroundColor = "";
    mensagem.style.padding = "";
    mensagem.style.borderRadius = "";
}