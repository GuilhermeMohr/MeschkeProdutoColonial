function openPopup() {
    document.getElementById("popup").style.display = "flex"; // Exibe o popup
  }

  // Função para fechar o popup
  function closePopup() {
    document.getElementById("popup").style.display = "none"; // Esconde o popup
  }

async function fetchCSVData(url) {
    try {
      const response = await fetch(url);
      const data = await response.text();
  
      // Convertendo o CSV em um array de linhas
      const rows = data.split("\n").map((row) => row.split(","));
  
      // Seleciona o container dos cartões
      const cardContainer = document.getElementById("card-produtos");
  
      // Ignora o cabeçalho e adiciona cada linha como um cartão
      for (let i = 1; i < rows.length; i++) {
        const [product, value, quantity, imageUrl] = rows[i];
        if (product && value && quantity && imageUrl) {
          // Verifica se não está vazio
          // Cria o HTML para cada cartão com os dados do produto
          const card = `
            <div class="produtos">
                <div class="produto">
                    <img class="center" src="${imageUrl}" alt="Imagem do produto">
                    <div class="card-body">
                        <div class="row corpo">
                            <div class="col nome-preco">
                                <p class="h5">${product}</p>
                                <p class="h6">&nbsp;R$ ${value}</p>
                            </div>
                            <div class="col">
                                <div class="row botao-compra">
                                    <i class="h5 col bi bi-cart-plus"></i>
                                    <input type="text" class="col" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `;
          cardContainer.innerHTML += card;
        }
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    fetchCSVData(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4g_MUqtcSP4loWHNBUvLkuKRmsV_17z_umXslBqHu361Cxtn5nG1QRwDMGivyB_tgttme4xeAXzcg/pub?gid=0&single=true&output=csv"
    );
  });
  