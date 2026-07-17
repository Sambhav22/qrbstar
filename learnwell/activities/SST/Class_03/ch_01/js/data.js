export const chapter = "Chapter - 1: The Universe";
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
        question: "Which theory explains how the universe was formed?",
        optionA: "Solar Theory",
        optionB: "Big Bang Theory",
        optionC: "Heat Theory",
        correctAnswer: "Big Bang Theory",
      }),
      shuffleOptions({
        question: "What holds stars, gases and dust together in a galaxy?",
        optionA: "Magnetic power",
        optionB: "Gravitational force",
        optionC: "Water vapour",
        correctAnswer: "Gravitational force",
      }),
      shuffleOptions({
        question: "Which galaxy is the home of our Solar System?",
        optionA: "Milky Way Galaxy",
        optionB: "Andromeda",
        optionC: "Red Spiral Galaxy",
        correctAnswer: "Milky Way Galaxy",
      }),
      shuffleOptions({
        question: "Why does the Sun appear brighter than other stars?",
        optionA: "Because it is made of metal",
        optionB: "Because it is nearer to Earth",
        optionC: "Because it is bigger than the universe",
        correctAnswer: "Because it is nearer to Earth",
      }),
      shuffleOptions({
        question: "What are planets mainly made to do around the Sun?",
        optionA: "Hop",
        optionB: "Stand still",
        optionC: "Revolve in their orbits",
        correctAnswer: "Revolve in their orbits",
      }),
      shuffleOptions({
        question: "What does the Moon do around the Earth?",
        optionA: "It floats randomly",
        optionB: "It revolves around it in a fixed path",
        optionC: "It rotates around the Sun only",
        correctAnswer: "It revolves around it in a fixed path",
      }),
      shuffleOptions({
        question: "Why does the Moon shine at night?",
        optionA: "It has fire inside",
        optionB: "It has its own bright gases",
        optionC: "It reflects sunlight",
        correctAnswer: "It reflects sunlight",
      }),
      shuffleOptions({
        question: "Which is the only planet in our Solar System known to support life?",
        optionA: "Mars",
        optionB: "Jupiter",
        optionC: "Earth",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "Which two planets in the Solar System have no satellites?",
        optionA: "Mercury and Venus",
        optionB: "Mars and Earth",
        optionC: "Jupiter and Saturn",
        correctAnswer: "Mercury and Venus",
      }),
      shuffleOptions({
        question: "What is a star made of?",
        optionA: "Burning gases",
        optionB: "Ice",
        optionC: "Soil",
        correctAnswer: "Burning gases",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A galaxy is a collection of stars, dust and ______.",
        optionA: "gases",
        optionB: "wood",
        optionC: "metals",
        correctAnswer: "gases",
      }),
      shuffleOptions({
        question: "The Solar System formed after the ______.",
        optionA: "Waterfall",
        optionB: "Big Bang",
        optionC: "Earthquake",
        correctAnswer: "Big Bang",
      }),
      shuffleOptions({
        question: "The Sun is the only body in the Solar System that has its own ______.",
        optionA: "wind",
        optionB: "soil",
        optionC: "light and heat",
        correctAnswer: "light and heat",
      }),
      shuffleOptions({
        question: "Earth is called the ______ planet because life exists on it.",
        optionA: "shining",
        optionB: "unique",
        optionC: "dusty",
        correctAnswer: "unique",
      }),
      shuffleOptions({
        question: "Planets revolve around the Sun in fixed ______ orbits.",
        optionA: "elliptical",
        optionB: "square",
        optionC: "straight",
        correctAnswer: "elliptical",
      }),
      shuffleOptions({
        question: "The Moon completes one revolution around Earth in ______ days.",
        optionA: "27.3 days",
        optionB: "50 days",
        optionC: "10 days",
        correctAnswer: "27.3 days",
      }),
      shuffleOptions({
        question: "Planets shine because they reflect ______.",
        optionA: "moonlight",
        optionB: "sunlight",
        optionC: "firelight",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "Besides planets and satellites, the Solar System also contains asteroids and ______.",
        optionA: "mountains",
        optionB: "comets",
        optionC: "rivers",
        correctAnswer: "comets",
      }),
      shuffleOptions({
        question: "The Moon has no ______ of its own.",
        optionA: "shape",
        optionB: "water",
        optionC: "light",
        correctAnswer: "light",
      }),
      shuffleOptions({
        question: "All planets rotate on their own ______.",
        optionA: "axis",
        optionB: "rope",
        optionC: "stick",
        correctAnswer: "axis",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Planets have their own heat and light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Milky Way Galaxy is also called Akash Ganga.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Stars are visible during daytime, but the Sun’s brightness hides them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Moon shines because it produces its own light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Earth is the only planet in the Solar System that has life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All planets in the Solar System have many satellites.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Sun is made of burning gases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A satellite moves around a planet in a fixed manner.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Moon rotates and revolves in almost the same amount of time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Solar System is in the Milky Way Galaxy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
