
const storyA = {
  title: "A Good Day Out",
  description: "Getting ready, catching up with a friend, and heading home.",
  order: [0, 1, 2],
  captions: [
    "You get ready to head out.",
    "You meet a friend and have a great time.",
    "You get home feeling happy and relaxed."
  ],
  headings: [
    "Getting ready",
    "Meeting up",
    "Back home"
  ]
};

const storyB = {
  title: "Feeling Left Out",
  description: "The same moments feel different when you see them in another order.",
  order: [2, 1, 0],
  captions: [
    "You end up at home, watching everyone else get on with their day.",
    "You see people meeting up and spending time together.",
    "You get ready, wondering if you should have gone out earlier."
  ],
  headings: [
    "At home",
    "Everyone else",
    "Getting ready"
  ]
};

const images = [
  "images/getting-ready.jpg",
  "images/cafe.jpg",
  "images/at-home.jpg"
];

const altTexts = [
  "Someone getting ready to go out",
  "People sitting and talking in a cafe",
  "Family relaxing together in a living room"
];

const scenes = document.querySelectorAll(".scene");
const title = document.getElementById("storyTitle");
const description = document.getElementById("storyDescription");
const storyNumber = document.getElementById("storyNumber");
const storyStatus = document.getElementById("storyStatus");
const storyAButton = document.getElementById("storyAButton");
const storyBButton = document.getElementById("storyBButton");
const switchButton = document.getElementById("switchButton");

let currentStory = 0;

function showStory(number) {
  currentStory = number;

  let selectedStory;

  if (number === 0) {
    selectedStory = storyA;
  } else {
    selectedStory = storyB;
  }

  title.textContent = selectedStory.title;
  description.textContent = selectedStory.description;
  storyNumber.textContent = "STORY 0" + (number + 1);
  storyStatus.textContent = "You're viewing story " + (number + 1) + " of 2.";

  scenes.forEach(function(scene, index) {
    const image = scene.querySelector("img");
    const heading = scene.querySelector("h3");
    const caption = scene.querySelector(".scene-text p");
    const label = scene.querySelector(".scene-text span");
    const imageNumber = selectedStory.order[index];

    image.src = images[imageNumber];
    image.alt = altTexts[imageNumber];
    heading.textContent = selectedStory.headings[index];
    caption.textContent = selectedStory.captions[index];

    const positions = ["BEGINNING", "MIDDLE", "END"];
    label.textContent = "0" + (index + 1) + " / " + positions[index];
  });

  storyAButton.classList.toggle("active", number === 0);
  storyBButton.classList.toggle("active", number === 1);
}

storyAButton.addEventListener("click", function() {
  showStory(0);
});

storyBButton.addEventListener("click", function() {
  showStory(1);
});

switchButton.addEventListener("click", function() {
  if (currentStory === 0) {
    showStory(1);
  } else {
    showStory(0);
  }
});

showStory(0);
