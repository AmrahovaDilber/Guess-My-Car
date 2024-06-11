const items = [
  {
    id: 1,
    name: "Porsche",
    image: "images/porsche.jpg",
    image2: "images/sual.avif",
  },
  {
    id: 2,
    name: "Ferrari",
    image: "images/Ferrari.webp",
    image2: "images/sual.avif",
  },
  { id: 3, name: "BMW", image: "images/BMW.jpg", image2: "images/sual.avif" },
  {
    id: 4,
    name: "Mercedes",
    image: "images/Mercedes.webp",
    image2: "images/sual.avif",
  },
  {
    id: 5,
    name: "Bugatti",
    image: "images/Bugatti.webp",
    image2: "images/sual.avif",
  },
  {
    id: 6,
    name: "Nissan",
    image: "images/Nissan.jpeg",
    image2: "images/sual.avif",
  },
];

const cards = document.querySelector("#cards");
const score = document.querySelector("#score");
const random = document.querySelector("#random");
const message = document.querySelector("#message");
const againBtn = document.querySelector("#againBtn");
let randomName;
function createUi() {
  cards.innerHTML = "";

  items.forEach((item) => {
    cards.innerHTML += `
      <div class="card cursor-pointer" id=${item.id} onclick="handleClick('${item.name}')">
        <img src="${item.image2}" alt="${item.name}" class="w-[300px] h-auto" />
      </div>
    `;
  });
}

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * items.length);
  randomName = items[randomIndex].name;
  random.innerHTML = randomName;
}

createUi();
getRandomName();

function handleClick(name) {
  const clickedCard = items.find((item) => item.name === name);
  const imgElement = document
    .getElementById(clickedCard.id)
    .querySelector("img");

  if (randomName === name) {
    score.textContent = parseInt(score.textContent) + 1;

    imgElement.src = clickedCard.image;
    message.textContent = "Correct !!!";
  } else {
    message.textContent = "Wrong!!!";
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

againBtn.addEventListener("click", () => {
 
  shuffle(items);

 
  createUi();

  getRandomName();

  message.textContent = "";
});

