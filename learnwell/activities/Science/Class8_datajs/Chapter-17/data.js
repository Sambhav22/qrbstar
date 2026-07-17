export const chapter = "Chapter - 17: Our Universe";
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
        question: "Which heavenly bodies emit their own heat and light?",
        optionA: "Planets",
        optionB: "Stars",
        optionC: "Satellites",
        correctAnswer: "Stars",
      }),
      shuffleOptions({
        question: "Why do stars appear small when seen from Earth?",
        optionA: "They are very close",
        optionB: "They are very far away",
        optionC: "They are very dim",
        correctAnswer: "They are very far away",
      }),
      shuffleOptions({
        question: "Which unit is used to measure huge distances in space?",
        optionA: "Kilometre",
        optionB: "Light year",
        optionC: "Litre",
        correctAnswer: "Light year",
      }),
      shuffleOptions({
        question: "Which star appears fixed in the sky?",
        optionA: "Sirius",
        optionB: "Pole Star (Dhruv Tara)",
        optionC: "Betelgeuse",
        correctAnswer: "Pole Star (Dhruv Tara)",
      }),
      shuffleOptions({
        question: "Which galaxy does the Sun belong to?",
        optionA: "Andromeda",
        optionB: "Milky Way Galaxy",
        optionC: "Whirlpool Galaxy",
        correctAnswer: "Milky Way Galaxy",
      }),
      shuffleOptions({
        question: "What is a group of stars that form a recognisable pattern called?",
        optionA: "Galaxy",
        optionB: "Constellation",
        optionC: "Orbit",
        correctAnswer: "Constellation",
      }),
      shuffleOptions({
        question: "Which constellation is also known as the Great Bear?",
        optionA: "Orion",
        optionB: "Ursa Major",
        optionC: "Scorpius",
        correctAnswer: "Ursa Major",
      }),
      shuffleOptions({
        question: "Which constellation helps in locating the brightest star Sirius?",
        optionA: "Leo",
        optionB: "Orion",
        optionC: "Cassiopeia",
        correctAnswer: "Orion",
      }),
      shuffleOptions({
        question: "Which planet is known as the Red Planet?",
        optionA: "Jupiter",
        optionB: "Mars",
        optionC: "Venus",
        correctAnswer: "Mars",
      }),
      shuffleOptions({
        question: "What do we call a natural body that revolves around a planet?",
        optionA: "Asteroid",
        optionB: "Moon (Natural Satellite)",
        optionC: "Meteor",
        correctAnswer: "Moon (Natural Satellite)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Universe is believed to have begun with the ______.",
        optionA: "supernova",
        optionB: "big bang",
        optionC: "red shift",
        correctAnswer: "big bang",
      }),
      shuffleOptions({
        question: "The star closest to the Earth is the ______.",
        optionA: "Sirius",
        optionB: "Sun",
        optionC: "Vega",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "A huge system of billions of stars held by gravity is called a ______.",
        optionA: "constellation",
        optionB: "galaxy",
        optionC: "pattern",
        correctAnswer: "galaxy",
      }),
      shuffleOptions({
        question: "Ursa Minor is also known as the ______.",
        optionA: "Great Bear",
        optionB: "Little Bear / Little Dipper",
        optionC: "Hunter",
        correctAnswer: "Little Bear / Little Dipper",
      }),
      shuffleOptions({
        question: "Distances of stars are measured in ______.",
        optionA: "joules",
        optionB: "light years",
        optionC: "metres",
        correctAnswer: "light years",
      }),
      shuffleOptions({
        question: "The brightest star in the night sky is ______.",
        optionA: "Rigel",
        optionB: "Sirius (Dog Star)",
        optionC: "Polaris",
        correctAnswer: "Sirius (Dog Star)",
      }),
      shuffleOptions({
        question: "The Sun and its family of planets and other bodies make up the ______.",
        optionA: "star cluster",
        optionB: "solar system",
        optionC: "black hole",
        correctAnswer: "solar system",
      }),
      shuffleOptions({
        question: "Mercury has the shortest ______ around the Sun.",
        optionA: "rotation",
        optionB: "period of revolution",
        optionC: "orbit name",
        correctAnswer: "period of revolution",
      }),
      shuffleOptions({
        question: "Jupiter is the ______ planet of the solar system.",
        optionA: "smallest",
        optionB: "largest",
        optionC: "hottest",
        correctAnswer: "largest",
      }),
      shuffleOptions({
        question: "The changing shapes of the Moon as seen from Earth are the ______.",
        optionA: "eclipses",
        optionB: "phases of the Moon",
        optionC: "movements",
        correctAnswer: "phases of the Moon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Stars twinkle because of the Earth’s atmosphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Light from the Sun takes several hours to reach Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All stars in a constellation are at the same distance from Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Pole Star lies almost in line with the Earth’s axis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Venus shines the brightest among all planets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Inner planets are made mainly of gases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Asteroids are found mostly between Mars and Jupiter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tail of a comet always points away from the Sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Moon shines with its own light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Artificial satellites orbit the Earth for many useful purposes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
