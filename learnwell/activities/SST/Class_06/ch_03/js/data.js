export const chapter = "Chapter - 3: Motions of the Earth";
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
        question: "Which motion of the earth causes the cycle of day and night?",
        optionA: "Revolution",
        optionB: "Rotation",
        optionC: "Orbiting",
        correctAnswer: "Rotation",
      }),
      shuffleOptions({
        question: "What do we call the faint light that appears before sunrise?",
        optionA: "Noon",
        optionB: "Dusk",
        optionC: "Dawn",
        correctAnswer: "Dawn",
      }),
      shuffleOptions({
        question: "Which line separates the illuminated part of the earth from the dark part?",
        optionA: "Equator",
        optionB: "Circle of illumination",
        optionC: "Horizon",
        correctAnswer: "Circle of illumination",
      }),
      shuffleOptions({
        question: "What is the shape of the earth’s orbital path around the sun?",
        optionA: "Circular",
        optionB: "Elliptical (ellipse)",
        optionC: "Rectangular",
        correctAnswer: "Elliptical (ellipse)",
      }),
      shuffleOptions({
        question: "What happens when the sun is directly overhead?",
        optionA: "Morning",
        optionB: "Evening",
        optionC: "Noon",
        correctAnswer: "Noon",
      }),
      shuffleOptions({
        question: "What causes different regions of the earth to get differing amounts of sunlight?",
        optionA: "Earth’s distance from the sun",
        optionB: "Earth’s tilt on its axis",
        optionC: "Earth’s speed of rotation",
        correctAnswer: "Earth’s tilt on its axis",
      }),
      shuffleOptions({
        question: "Which position of the earth makes it farthest from the sun?",
        optionA: "Perihelion",
        optionB: "Aphelion",
        optionC: "Equinox",
        correctAnswer: "Aphelion",
      }),
      shuffleOptions({
        question: "What do we call the time when daylight gradually fades before night?",
        optionA: "Dusk",
        optionB: "Dawn",
        optionC: "Noon",
        correctAnswer: "Dusk",
      }),
      shuffleOptions({
        question: "Which season occurs in the Northern Hemisphere when it tilts towards the sun?",
        optionA: "Winter",
        optionB: "Summer",
        optionC: "Autumn",
        correctAnswer: "Summer",
      }),
      shuffleOptions({
        question: "What would happen if the earth stopped rotating?",
        optionA: "Seasons would stop",
        optionB: "One side would be extremely hot and the other extremely cold",
        optionC: "Days would become shorter",
        correctAnswer: "One side would be extremely hot and the other extremely cold",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The earth completes one full rotation in ______.",
        optionA: "12 hours",
        optionB: "24 hours",
        optionC: "48 hours",
        correctAnswer: "24 hours",
      }),
      shuffleOptions({
        question: "The path of the earth around the sun is called its ______.",
        optionA: "equator",
        optionB: "orbit",
        optionC: "axis",
        correctAnswer: "orbit",
      }),
      shuffleOptions({
        question: "The earth’s axis is tilted at an angle of ______.",
        optionA: "23.5°",
        optionB: "33.5°",
        optionC: "45°",
        correctAnswer: "23.5°",
      }),
      shuffleOptions({
        question: "The longest day in the Northern Hemisphere occurs around ______.",
        optionA: "23 September",
        optionB: "21 June",
        optionC: "22 December",
        correctAnswer: "21 June",
      }),
      shuffleOptions({
        question: "When the earth is closest to the sun, it is at ______.",
        optionA: "aphelion",
        optionB: "tropic",
        optionC: "perihelion",
        correctAnswer: "perihelion",
      }),
      shuffleOptions({
        question: "During ______, all places on earth experience equal day and night.",
        optionA: "solstice",
        optionB: "equinox",
        optionC: "eclipse",
        correctAnswer: "equinox",
      }),
      shuffleOptions({
        question: "The sun shines vertically over the Tropic of Capricorn on ______.",
        optionA: "21 March",
        optionB: "22 December",
        optionC: "21 June",
        correctAnswer: "22 December",
      }),
      shuffleOptions({
        question: "The slightly elongated path of the earth around the sun is called an ______.",
        optionA: "ellipse",
        optionB: "oval",
        optionC: "arc",
        correctAnswer: "ellipse",
      }),
      shuffleOptions({
        question: "The part of the day when the sun begins to rise and becomes clearly visible is called ______.",
        optionA: "sunset",
        optionB: "morning",
        optionC: "noon",
        correctAnswer: "morning",
      }),
      shuffleOptions({
        question: "The continuous change in seasons occurs due to the earth’s ______.",
        optionA: "rotation",
        optionB: "revolution",
        optionC: "shadow",
        correctAnswer: "revolution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The earth rotates from west to east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dawn occurs after sunrise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The earth’s revolution is responsible for the change in seasons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aphelion is the position where the earth is nearest to the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "During summer solstice, the Northern Hemisphere has the longest day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The earth’s orbit is a perfect circle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tilt of the earth affects the length of day and night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dusk is the period just before nightfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If the earth stopped rotating, day and night would continue normally.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sun shines vertically over the equator during equinox.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
