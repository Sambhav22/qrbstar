export const chapter = "Chapter - 11: Air Around Us";
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
        question: "What happens to a balloon when we blow air into it?",
        optionA: "It becomes smaller",
        optionB: "It grows bigger",
        optionC: "It breaks",
        correctAnswer: "It grows bigger",
      }),
      shuffleOptions({
        question: "Which of these toys works with air?",
        optionA: "Doll",
        optionB: "Tyre",
        optionC: "Book",
        correctAnswer: "Tyre",
      }),
      shuffleOptions({
        question: "Which of these is used to fly in the sky with wind?",
        optionA: "Kite",
        optionB: "Stone",
        optionC: "Chair",
        correctAnswer: "Kite",
      }),
      shuffleOptions({
        question: "Which wind can uproot trees?",
        optionA: "Breeze",
        optionB: "Storm",
        optionC: "Air",
        correctAnswer: "Storm",
      }),
      shuffleOptions({
        question: "Which of these rotates with the help of wind?",
        optionA: "Windmill",
        optionB: "Clock",
        optionC: "Fan",
        correctAnswer: "Windmill",
      }),
      shuffleOptions({
        question: "Which of these is filled with air to play?",
        optionA: "Football",
        optionB: "Pencil",
        optionC: "Eraser",
        correctAnswer: "Football",
      }),
      shuffleOptions({
        question: "Which of these needs air to fly?",
        optionA: "Aeroplane",
        optionB: "Train",
        optionC: "Bicycle",
        correctAnswer: "Aeroplane",
      }),
      shuffleOptions({
        question: "Which of these happens because of storm?",
        optionA: "Uprooting trees",
        optionB: "Reading books",
        optionC: "Eating food",
        correctAnswer: "Uprooting trees",
      }),
      shuffleOptions({
        question: "Which of these helps clothes to dry?",
        optionA: "Air",
        optionB: "Water",
        optionC: "Light",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "Which of these is felt but not seen?",
        optionA: "Air",
        optionB: "Stone",
        optionC: "Water",
        correctAnswer: "Air",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "______ makes parachutes fly.",
        optionA: "Air",
        optionB: "Wind",
        optionC: "Sunlight",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "A balloon with air is ______ than a balloon without air.",
        optionA: "Lighter",
        optionB: "Heavier",
        optionC: "Same",
        correctAnswer: "Heavier",
      }),
      shuffleOptions({
        question: "When wind moves slowly, it is called ______.",
        optionA: "Storm",
        optionB: "Breeze",
        optionC: "Thunder",
        correctAnswer: "Breeze",
      }),
      shuffleOptions({
        question: "______ helps a sailboat to move.",
        optionA: "Water",
        optionB: "Wind",
        optionC: "Fire",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "Clothes dry with the help of ______.",
        optionA: "Food",
        optionB: "Air",
        optionC: "Light",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "______ rotates the blades of a windmill.",
        optionA: "Storm",
        optionB: "Wind",
        optionC: "Water",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "______ is all around us.",
        optionA: "Air",
        optionB: "Stone",
        optionC: "Fire",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "We cannot see air but we can ______ it.",
        optionA: "Taste",
        optionB: "Feel",
        optionC: "Hear",
        correctAnswer: "Feel",
      }),
      shuffleOptions({
        question: "Air is used to fill ______.",
        optionA: "Books",
        optionB: "Tyres",
        optionC: "Tables",
        correctAnswer: "Tyres",
      }),
      shuffleOptions({
        question: "Storm mostly comes with ______.",
        optionA: "Thunder and rain",
        optionB: "Sunshine",
        optionC: "Silence",
        correctAnswer: "Thunder and rain",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air is all around us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can see air clearly with our eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A balloon without air is heavier than a balloon with air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Breeze is a gentle wind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wind helps kites to fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air is not needed for breathing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air has no weight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Windmills can be used to draw water from wells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aeroplanes can fly without air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Storm can uproot trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
