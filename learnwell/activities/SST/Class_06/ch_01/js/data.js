export const chapter = "Chapter - 1: Exploring the Solar System";
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
        question: "What event is believed to have started the expansion of the universe?",
        optionA: "Solar eruption",
        optionB: "Big Bang",
        optionC: "Star collapse",
        correctAnswer: "Big Bang",
      }),
      shuffleOptions({
        question: "Which force keeps planets and other bodies bound in the Solar System?",
        optionA: "Magnetism",
        optionB: "Gravity",
        optionC: "Rotation",
        correctAnswer: "Gravity",
      }),
      shuffleOptions({
        question: "Which constellation is also known as the Great Bear?",
        optionA: "Ursa Major",
        optionB: "Orion",
        optionC: "Gemini",
        correctAnswer: "Ursa Major",
      }),
      shuffleOptions({
        question: "Which planet completes its revolution around the Sun in the shortest time?",
        optionA: "Venus",
        optionB: "Mercury",
        optionC: "Earth",
        correctAnswer: "Mercury",
      }),
      shuffleOptions({
        question: "Which planet is famous for its iron-rich red soil?",
        optionA: "Neptune",
        optionB: "Mars",
        optionC: "Jupiter",
        correctAnswer: "Mars",
      }),
      shuffleOptions({
        question: "Which gas forms most of the Sun?",
        optionA: "Hydrogen",
        optionB: "Oxygen",
        optionC: "Carbon dioxide",
        correctAnswer: "Hydrogen",
      }),
      shuffleOptions({
        question: "Which planet is the coldest because it is farthest from the Sun?",
        optionA: "Uranus",
        optionB: "Neptune",
        optionC: "Saturn",
        correctAnswer: "Neptune",
      }),
      shuffleOptions({
        question: "What name is given to a group of millions of stars held together?",
        optionA: "Constellation",
        optionB: "Galaxy",
        optionC: "Cluster",
        correctAnswer: "Galaxy",
      }),
      shuffleOptions({
        question: "Which constellation in India is known as Saptarishi?",
        optionA: "Orion",
        optionB: "Ursa Major",
        optionC: "Leo",
        correctAnswer: "Ursa Major",
      }),
      shuffleOptions({
        question: "How many minutes does sunlight take to reach Earth?",
        optionA: "5 minutes",
        optionB: "8 minutes 20 seconds",
        optionC: "15 minutes",
        correctAnswer: "8 minutes 20 seconds",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Sun’s diameter is about ______ times the diameter of Earth.",
        optionA: "10",
        optionB: "50",
        optionC: "109",
        correctAnswer: "109",
      }),
      shuffleOptions({
        question: "Venus completes one orbit around the Sun in ______ days.",
        optionA: "88",
        optionB: "255",
        optionC: "365",
        correctAnswer: "255",
      }),
      shuffleOptions({
        question: "Mars is known as the ______ Planet.",
        optionA: "Blue",
        optionB: "Red",
        optionC: "Orange",
        correctAnswer: "Red",
      }),
      shuffleOptions({
        question: "A light-year is the distance travelled by ______ in one year.",
        optionA: "Heat",
        optionB: "Light",
        optionC: "Sound",
        correctAnswer: "Light",
      }),
      shuffleOptions({
        question: "The Moon is about ______ km away from Earth.",
        optionA: "3,84,000 km",
        optionB: "1,00,000 km",
        optionC: "7,00,000 km",
        correctAnswer: "3,84,000 km",
      }),
      shuffleOptions({
        question: "The Milky Way galaxy is called ______ in India.",
        optionA: "Dhruv Tara",
        optionB: "Akash Ganga",
        optionC: "Nakshatra Path",
        correctAnswer: "Akash Ganga",
      }),
      shuffleOptions({
        question: "The planet with more than 1,00,000 rings is ______.",
        optionA: "Jupiter",
        optionB: "Saturn",
        optionC: "Neptune",
        correctAnswer: "Saturn",
      }),
      shuffleOptions({
        question: "Neptune takes ______ years to revolve around the Sun.",
        optionA: "84",
        optionB: "165",
        optionC: "200",
        correctAnswer: "165",
      }),
      shuffleOptions({
        question: "The phase in which the bright part of the Moon decreases is called ______.",
        optionA: "Waxing",
        optionB: "Waning",
        optionC: "Dimming",
        correctAnswer: "Waning",
      }),
      shuffleOptions({
        question: "The dwarf planet located in the asteroid belt is ______.",
        optionA: "Ceres",
        optionB: "Eris",
        optionC: "Pluto",
        correctAnswer: "Ceres",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Sun rotates on its own axis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Stars appear tiny because they are extremely far from Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Uranus appears greenish because of the gases covering it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Moon has its own heat and light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ceres is one of the dwarf planets of the Solar System.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Asteroids are found between the orbits of Mars and Jupiter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Comets always have visible tails.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Saturn is the second largest planet in the Solar System.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A crescent Moon appears soon after a new Moon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Meteorites can create craters when they fall on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
