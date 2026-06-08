// URL da API — altere aqui se mudar de porta ou ambiente
const API_URL = "http://localhost:3000/produtos";

let imagemBase64 = "";

document.addEventListener("DOMContentLoaded", function () {
  configurarFoto();
  configurarContadorDescricao();
  configurarLimpar();
  configurarCadastrar();
});

function configurarFoto() {
  const inputFoto = document.querySelector("#input-foto");
  const btnEscolher = document.querySelector("#btn-escolher-foto");
  const previewContainer = document.querySelector("#preview-container");
  const previewImg = document.querySelector("#preview-imagem");
  const placeholder = document.querySelector("#placeholder-foto");
  const infoFoto = document.querySelector("#info-foto");

  if (!inputFoto) return;

  btnEscolher.addEventListener("click", function () {
    inputFoto.click();
  });
  previewContainer.addEventListener("click", function () {
    inputFoto.click();
  });

  inputFoto.addEventListener("change", function () {
    const arquivo = inputFoto.files[0];
    if (!arquivo) return;

    const MAX_BYTES = 5 * 1024 * 1024;
    if (arquivo.size > MAX_BYTES) {
      mostrarToast("Imagem muito grande! Máximo permitido: 5 MB.", "erro");
      inputFoto.value = "";
      return;
    }

    const reader = new FileReader();

    reader.addEventListener("load", function () {
      imagemBase64 = reader.result;

      previewImg.src = imagemBase64;
      previewImg.style.display = "block";
      placeholder.style.display = "none";

      if (infoFoto) {
        infoFoto.textContent = "✔ " + arquivo.name;
      }
    });

    reader.readAsDataURL(arquivo);
  });
}

function configurarContadorDescricao() {
  const textarea = document.querySelector("#input-descricao");
  const contador = document.querySelector("#contador-descricao");
  if (!textarea || !contador) return;

  textarea.addEventListener("input", function () {
    contador.textContent = textarea.value.length + " / 300";
  });
}

function configurarLimpar() {
  const btn = document.querySelector("#btn-limpar-form");
  if (!btn) return;

  btn.addEventListener("click", function () {
    resetarFormulario();
  });
}

function configurarCadastrar() {
  const btn = document.querySelector("#btn-cadastrar");
  if (!btn) return;

  btn.addEventListener("click", function (e) {

    e.preventDefault();
    const nome = document.querySelector("#input-nome").value.trim();
    const descricao = document.querySelector("#input-descricao").value.trim();
    const preco = parseFloat(document.querySelector("#input-preco").value);
    const categoria = document.querySelector("#input-categoria").value;

    if (!nome) {
      mostrarToast("Informe o nome do prato.", "erro");
      document.querySelector("#input-nome").focus();
      return;
    }
    if (!categoria) {
      mostrarToast("Selecione uma categoria.", "erro");
      document.querySelector("#input-categoria").focus();
      return;
    }
    if (isNaN(preco) || preco <= 0) {
      mostrarToast("Informe um preço válido.", "erro");
      document.querySelector("#input-preco").focus();
      return;
    }

    const produto = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      categoria: categoria,
      fotoBase64: imagemBase64
    };

    console.log("Produto enviado:", produto);
    enviarProduto(produto);
  });
}

function enviarProduto(produto) {
  const btn = document.querySelector("#btn-cadastrar");

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Enviando...";
  }

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto)
  })
    .then(function (resposta) {
      if (!resposta.ok) {
        return resposta.json().then(function (err) {
          throw new Error(err.message || "Erro ao cadastrar produto.");
        });
      }
      return resposta.json();
    })
    .then(function () {
      mostrarToast("Prato cadastrado com sucesso! 🎉", "sucesso");
      resetarFormulario();
    })
    .catch(function (erro) {
      console.error("Erro ao cadastrar produto:", erro);
      mostrarToast("Erro: " + erro.message, "erro");
    })
    .finally(function () {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "✓ Cadastrar Prato";
      }
    });
}

function resetarFormulario() {
  document.querySelector("#input-nome").value = "";
  document.querySelector("#input-descricao").value = "";
  document.querySelector("#input-preco").value = "";
  document.querySelector("#input-categoria").value = "";
  document.querySelector("#input-foto").value = "";
  document.querySelector("#contador-descricao").textContent = "0 / 300";

  const previewImg = document.querySelector("#preview-imagem");
  const placeholder = document.querySelector("#placeholder-foto");
  const infoFoto = document.querySelector("#info-foto");

  previewImg.src = "";
  previewImg.style.display = "none";
  placeholder.style.display = "block";

  if (infoFoto) infoFoto.textContent = "JPG, PNG ou WEBP • máx. 5 MB";
  imagemBase64 = "";
}

function mostrarToast(mensagem, tipo) {
  const toast = document.querySelector("#toast-cadastro");
  if (!toast) return;

  toast.textContent = mensagem;
  toast.className = "toast " + tipo;

  setTimeout(function () {
    toast.className = "toast";
  }, 3500);
}