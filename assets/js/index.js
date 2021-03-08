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

const statePageResult = () => {
  buttonResult.style.display = "none";
  filterContainer.style.display = "none";

  startAgain.style.display = "block"
  container.style.display = "flex";
  container.style.justifyContent="center";

  titlePage.innerText = "Result";
  alert.style.display = "none";
};

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
  if (type === "Safety & Security") {
    return "safety-security";
  }

  if (type === "Agency & Oversight") {
    return "agency-oversight";
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

// Função que pega template criado e adiciona no DOM
const insertCardsIntoPage = (template) => {
  const cards = document.querySelector(".cards");
  cards.innerHTML = template;
  // adiciona funcionalidade de selecionar os cards
  selectedCards();
};

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
        <span class="strong">Motivation: </span>${actual.motivation}
      </p>
      <br>
      <ul>
        <span class="strong">What to Do:</span> 
        <br>
        ${templateList(actual.whatToDo)}
      </ul>
      <br>
      <p>
        ${
          actual.praticalExample
            ? `<span class="strong"> Practical Example:</span> ${actual.praticalExample} `
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

  if (selectedCards.length >= 2) {
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
