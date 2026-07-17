export const chapter = "Chapter - 13: The Universe";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What is the closest star to the Earth?",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Sirius",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "What are groups of stars forming patterns called?",
        optionA: "Galaxies",
        optionB: "Constellations",
        optionC: "Orbits",
        correctAnswer: "Constellations",
      }),
      shuffleOptions({
        question: "Who invented the telescope?",
        optionA: "Galileo",
        optionB: "Newton",
        optionC: "Aryabhata",
        correctAnswer: "Galileo",
      }),
      shuffleOptions({
        question: "What is the fixed path in which planets move around the Sun called?",
        optionA: "Axis",
        optionB: "Orbit",
        optionC: "Galaxy",
        correctAnswer: "Orbit",
      }),
      shuffleOptions({
        question: "Which planet is the smallest and closest to the Sun?",
        optionA: "Mercury",
        optionB: "Venus",
        optionC: "Earth",
        correctAnswer: "Mercury",
      }),
      shuffleOptions({
        question: "Which planet is known as the red planet?",
        optionA: "Mars",
        optionB: "Saturn",
        optionC: "Neptune",
        correctAnswer: "Mars",
      }),
      shuffleOptions({
        question: "Which planet has shining rings around it?",
        optionA: "Venus",
        optionB: "Saturn",
        optionC: "Uranus",
        correctAnswer: "Saturn",
      }),
      shuffleOptions({
        question: "Which planet is called the blue planet?",
        optionA: "Earth",
        optionB: "Neptune",
        optionC: "Jupiter",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "Which is the natural satellite of the Earth?",
        optionA: "The Moon",
        optionB: "Mars",
        optionC: "Mercury",
        correctAnswer: "The Moon",
      }),
      shuffleOptions({
        question: "Which heavenly bodies revolve around planets?",
        optionA: "Stars",
        optionB: "Satellites",
        optionC: "Galaxies",
        correctAnswer: "Satellites",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Sun is a ball of hot _______.",
        optionA: "Rocks",
        optionB: "Water",
        optionC: "Gases",
        correctAnswer: "Gases",
      }),
      shuffleOptions({
        question: "The Sun is made up of _______ and helium.",
        optionA: "Hydrogen",
        optionB: "Nitrogen",
        optionC: "Oxygen",
        correctAnswer: "Hydrogen",
      }),
      shuffleOptions({
        question: "Planets move around the Sun in fixed paths called _______.",
        optionA: "Orbits",
        optionB: "Circles",
        optionC: "Lines",
        correctAnswer: "Orbits",
      }),
      shuffleOptions({
        question: "_______ is the brightest and hottest planet.",
        optionA: "Earth",
        optionB: "Venus",
        optionC: "Jupiter",
        correctAnswer: "Venus",
      }),
      shuffleOptions({
        question: "_______ is called the water or blue planet.",
        optionA: "Earth",
        optionB: "Mars",
        optionC: "Neptune",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "_______ is the planet with beautiful rings.",
        optionA: "Uranus",
        optionB: "Venus",
        optionC: "Saturn",
        correctAnswer: "Saturn",
      }),
      shuffleOptions({
        question: "_______ is the largest planet in the Solar System.",
        optionA: "Jupiter",
        optionB: "Neptune",
        optionC: "Earth",
        correctAnswer: "Jupiter",
      }),
      shuffleOptions({
        question: "_______ is the instrument used to see heavenly bodies.",
        optionA: "Microscope",
        optionB: "Telescope",
        optionC: "Binocular",
        correctAnswer: "Telescope",
      }),
      shuffleOptions({
        question: "The Moon has no _______ and no _______.",
        optionA: "Air, water",
        optionB: "Clouds, land",
        optionC: "Rocks, soil",
        correctAnswer: "Air, water",
      }),
      shuffleOptions({
        question: "_______ satellites are man-made and revolve around planets.",
        optionA: "Artificial",
        optionB: "Natural",
        optionC: "Space",
        correctAnswer: "Artificial",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Sun is a planet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Venus is called the morning or evening star.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earth is the only planet that supports life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mars is known as the blue planet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jupiter is the smallest planet in the Solar System.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Moon has its own light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Artificial satellites are used for weather forecasting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Galileo invented the telescope.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sun gives heat and light to all planets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mercury and Venus have no satellites.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
