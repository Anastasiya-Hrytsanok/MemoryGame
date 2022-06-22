document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "crying",
      img: "images/crying.jpg",
    },
    {
      name: "anger",
      img: "images/anger.jpg",
    },
    {
      name: "astonishment",
      img: "images/astonishment.jpg",
    },
    {
      name: "bighand",
      img: "images/bighand.jpg",
    },
    {
      name: "drinking",
      img: "images/drinking.jpg",
    },
    {
      name: "excitement",
      img: "images/excitement.jpg",
    },
    {
      name: "five",
      img: "images/five.jpg",
    },
    {
      name: "sleeping",
      img: "images/sleeping.jpg",
    },
    {
      name: "crying",
      img: "images/crying.jpg",
    },
    {
      name: "anger",
      img: "images/anger.jpg",
    },
    {
      name: "astonishment",
      img: "images/astonishment.jpg",
    },
    {
      name: "bighand",
      img: "images/bighand.jpg",
    },
    {
      name: "drinking",
      img: "images/drinking.jpg",
    },
    {
      name: "excitement",
      img: "images/excitement.jpg",
    },
    {
      name: "five",
      img: "images/five.jpg",
    },
    {
      name: "sleeping",
      img: "images/sleeping.jpg",
    },
    {
      name: "baby",
      img: "images/baby.jpg",
    },
    {
      name: "baby",
      img: "images/baby.jpg",
    },
    {
      name: "shock",
      img: "images/shock.jpg",
    },
    {
      name: "shock",
      img: "images/shock.jpg",
    },
    {
      name: "rock",
      img: "images/rock.jpg",
    },
    {
      name: "rock",
      img: "images/rock.jpg",
    },
    {
      name: "dispute",
      img: "images/dispute.jpg",
    },
    {
      name: "dispute",
      img: "images/dispute.jpg",
    },
  ];

  const grid = document.querySelector(".grid");
  const stepsDisplay = document.querySelector("#steps");
  stepsDisplay.textContent = 0;

  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  var steps = 0;

  function createBoard() {
    cardArray.sort(() => 0.5 - Math.random());
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = [...document.getElementsByTagName("img")];
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].style.pointerEvents = "none";
      cards[optionOneId].setAttribute("src", "images/side.jpg");
      cards[optionTwoId].style.pointerEvents = "none";
      cards[optionTwoId].setAttribute("src", "images/side.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
    }
    cardsChosen = [];
    cardsChosenId = [];
    if (cardsWon.length === cardArray.length / 2) {
      alert("You win! Steps number: " + steps);
    }
  }

  function flipCard() {
    if (cardsChosen.length === 2) {
      return;
    }

    var cardId = this.getAttribute("data-id");

    if (cardsChosenId.includes(cardId)) {
      return;
    }
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      steps = steps + 1;
      stepsDisplay.textContent = steps;
      setTimeout(checkForMatch, 500);
    }
  }

  function restart() {
    var grid = document.getElementsByClassName("grid")[0];
    grid.innerHTML = "";
    cardsWon = [];
    steps = 0;
    stepsDisplay.textContent = steps;
    createBoard();
  }

  document.getElementById("restart").addEventListener("click", restart);

  createBoard();
});