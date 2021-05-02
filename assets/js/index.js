const filter = document.querySelector("#filterCards");
const filterContainer = document.querySelector(".container__filters");
const buttonResult = document.querySelector("#result");
const titlePage = document.querySelector("#game__title");
const startAgain = document.querySelector("#start");
const container = document.querySelector('.container__options');
const alert = document.querySelector('.alert')

// Função que seleciona os cards e ativa o botão de resultado
const selectedCards = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
};

// Função para mostrar as cartas selecionadas
const statePageResult = () => {
  buttonResult.style.display = "none";
  filterContainer.style.display = "none";

  startAgain.style.display = "block"
  container.style.display = "flex";
  container.style.justifyContent="center";

  titlePage.innerText = "Result";
  alert.style.display = "none";
};

// Função para selecionar as cartas
const statePageSelect = () => {
  buttonResult.style.display = "block";
  titlePage.innerText = "Select cards";

  startAgain.style.display = "none";

  filterContainer.style.display = "flex";
  container.style.display = "flex";
  container.style.justifyContent="space-between";
  alert.style.display = 'none'
};

// Função que faz os filtros dos cards
filter.addEventListener("click", (event) => {
  if (event.target.value === "all") {
    return createCards(infosCards);
  }

  statePageSelect();

  const cards = filterCards(infosCards, event.target.value);
  return createCards(cards);
});

// Função que filtra o array
const filterCards = (array, type) => {
  return array.filter((infos) => {
    return infos.type === type;
  });
};

// Função que formata a classes de CSS
const formatClasse = (type) => {
  if (type === "Template 3 & Template 4") {
    return "template3-template4";
  }

  if (type === "Template 7 & Template 8") {
    return "template7-template8";
  }

  return type.toLowerCase();
};

//  Template de List do Card
const templateList = (list) => {
  return list.reduce((accumulator, actual) => {
    return (accumulator += `
      <li>${actual}</li>
     `);
  }, "");
};

const templateListLink = (list) => {
  return list.reduce((accumulator, actual) => {
    return (accumulator += `
      <li>
      <a href="${actual.link}">${actual.descricao}</a>
      </li>
     `);
  }, "");
};


// Função que pega template criado e adiciona no DOM
const insertCardsIntoPage = (template) => {
  const cards = document.querySelector(".cards");
  cards.innerHTML = template;
  // Adiciona funcionalidade de selecionar os cards
  selectedCards();
};

// Função para a criação de cada um dos cards 
const createCards = (infos) => {
  const template = infos.reduce((accumulator, actual) => {
    return (accumulator += `
    <article class="card">
    <div class="card__header ${formatClasse(actual.type)}">
      <p class="card__number">#${actual.number}</p>
      <h3 class="card__title">${actual.title}</h3>
      <span class="card__badge">${actual.type}</span>
    </div>
    <div class="card__body">
      <p>
        <span class="strong">Issue: </span>${actual.motivation}
      </p>
      <br>
      <ul>
        <span class="strong">How to think:</span> 
        <br>
        ${templateList(actual.whatToDo)}
      </ul>
      <br>
      <p>
        ${
          actual.praticalExample
            ? `<span class="strong"> Examples:</span> ${actual.praticalExample} `
            : ""
        }
      </p>
      <p>
      ${
        actual.links
          ? `<p class="strong"> Tool(s):</p> 
             <ul>
             ${templateListLink(actual.links)}
             </ul>
            `
          : ""
      }
    </p>

    </div>
  </article>
    `);
  }, "");
  insertCardsIntoPage(template);
};

// Função que captura todos cards que estão ativos e transforma em um array.
buttonResult.addEventListener("click", () => {
  const selectedCards = document.querySelectorAll(".active");
  const cards = document.querySelector(".cards");

  // Definir o mínimo de cartas a ser selecionado pelo guia
  if (selectedCards.length >= 1) {
    cards.innerHTML = "";
    selectedCards.forEach((card) => {
      card.classList.remove("active");
      cards.appendChild(card);
    });
    statePageResult();
    return
  } 
  return alert.style.display = 'block'

});

startAgain.addEventListener("click", () => {
  statePageSelect();
  createCards(infosCards);
});

const init = () => {
  createCards(infosCards);
};

init();
