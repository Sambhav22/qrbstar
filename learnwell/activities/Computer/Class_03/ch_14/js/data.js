export const chapter = "Chapter - 14: The Sun, Moon and Stars";
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
        question: "Which heavenly body gives us heat and light?",
        optionA: "Earth",
        optionB: "Sun",
        optionC: "Moon",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "Who was the first man to step on the Moon?",
        optionA: "Galileo",
        optionB: "Neil Armstrong",
        optionC: "Newton",
        correctAnswer: "Neil Armstrong",
      }),
      shuffleOptions({
        question: "Which instrument helps us to see the stars and planets clearly?",
        optionA: "Microscope",
        optionB: "Telescope",
        optionC: "Binoculars",
        correctAnswer: "Telescope",
      }),
      shuffleOptions({
        question: "What are groups of stars forming patterns in the sky called?",
        optionA: "Planets",
        optionB: "Constellations",
        optionC: "Satellites",
        correctAnswer: "Constellations",
      }),
      shuffleOptions({
        question: "Which star is always seen in the north direction?",
        optionA: "Sirius",
        optionB: "Pole Star",
        optionC: "Orion",
        correctAnswer: "Pole Star",
      }),
      shuffleOptions({
        question: "Who first studied the Moon and the stars using a telescope?",
        optionA: "Einstein",
        optionB: "Galileo",
        optionC: "Copernicus",
        correctAnswer: "Galileo",
      }),
      shuffleOptions({
        question: "The Moon takes about how many days to go around the Earth once?",
        optionA: "15",
        optionB: "29.5",
        optionC: "40",
        correctAnswer: "29.5",
      }),
      shuffleOptions({
        question: "Light from the Sun reaches the Earth in about how many minutes?",
        optionA: "5",
        optionB: "8",
        optionC: "10",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "What is the study of the Sun, Moon, stars and planets called?",
        optionA: "Geography",
        optionB: "Astronomy",
        optionC: "Geology",
        correctAnswer: "Astronomy",
      }),
      shuffleOptions({
        question: "Which constellation is also known as the Great Bear?",
        optionA: "Orion",
        optionB: "Ursa Major",
        optionC: "Leo",
        correctAnswer: "Ursa Major",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Sun is a huge ball of hot ______.",
        optionA: "rocks",
        optionB: "gases",
        optionC: "water",
        correctAnswer: "gases",
      }),
      shuffleOptions({
        question: "The Moon is the natural ______ of the Earth.",
        optionA: "planet",
        optionB: "satellite",
        optionC: "star",
        correctAnswer: "satellite",
      }),
      shuffleOptions({
        question: "The Moon looks bright because it reflects the light of the ______.",
        optionA: "stars",
        optionB: "Sun",
        optionC: "Earth",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "The Moon is about ______ kilometres away from the Earth.",
        optionA: "38 400",
        optionB: "3 84 400",
        optionC: "4 00 000",
        correctAnswer: "3 84 400",
      }),
      shuffleOptions({
        question: "The fully visible Moon is called the ______ Moon.",
        optionA: "new",
        optionB: "full",
        optionC: "half",
        correctAnswer: "full",
      }),
      shuffleOptions({
        question: "Groups of stars forming patterns in the sky are called ______.",
        optionA: "planets",
        optionB: "constellations",
        optionC: "galaxies",
        correctAnswer: "constellations",
      }),
      shuffleOptions({
        question: "The bright star seen in the north is called the ______ Star.",
        optionA: "Evening",
        optionB: "Pole",
        optionC: "Morning",
        correctAnswer: "Pole",
      }),
      shuffleOptions({
        question: "Light from the Sun reaches the Earth in about ______ minutes.",
        optionA: "6",
        optionB: "8",
        optionC: "10",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "The Moon has no ______ of its own.",
        optionA: "heat",
        optionB: "light",
        optionC: "air",
        correctAnswer: "light",
      }),
      shuffleOptions({
        question: "Galileo was a famous ______.",
        optionA: "astronaut",
        optionB: "astronomer",
        optionC: "philosopher",
        correctAnswer: "astronomer",
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
        question: "The Moon is the natural satellite of the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Moon has light of its own.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Stars look small because they are very far away.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Moon changes its shape every night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Neil Armstrong travelled in Apollo-II.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pole Star is seen in the north direction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Galileo was the first to use a telescope to study the Moon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Light from the Sun takes about 8 minutes to reach the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are about 88 constellations in the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
