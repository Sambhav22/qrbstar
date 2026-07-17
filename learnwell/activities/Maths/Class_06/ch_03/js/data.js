export const chapter = "Chapter - 3: Water - My Life";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who wrote the book Jal Mangata Jeevan?",
        optionA: "Masaru Emoto",
        optionB: "Pankaj Chaturvedi",
        optionC: "A.L. Tennyson",
        correctAnswer: "Pankaj Chaturvedi",
      }),
      shuffleOptions({
        question: "In Hinduism, rivers are often called—",
        optionA: "Mata",
        optionB: "Devi",
        optionC: "Nadi",
        correctAnswer: "Mata",
      }),
      shuffleOptions({
        question: "How much of the earth’s water is in oceans and seas?",
        optionA: "97.3%",
        optionB: "2.7%",
        optionC: "50%",
        correctAnswer: "97.3%",
      }),
      shuffleOptions({
        question: "Who conducted experiments on water?",
        optionA: "A scientist",
        optionB: "Masaru Emoto",
        optionC: "Pankaj Chaturvedi",
        correctAnswer: "Masaru Emoto",
      }),
      shuffleOptions({
        question: "How much water is in the human body?",
        optionA: "50%",
        optionB: "70%",
        optionC: "90%",
        correctAnswer: "70%",
      }),
      shuffleOptions({
        question: "How much salt is present in 1 litre of seawater?",
        optionA: "15 g",
        optionB: "25 g",
        optionC: "35 g",
        correctAnswer: "35 g",
      }),
      shuffleOptions({
        question: "Which process returns water to the ocean?",
        optionA: "Evaporation",
        optionB: "Rivers and streams",
        optionC: "Condensation",
        correctAnswer: "Rivers and streams",
      }),
      shuffleOptions({
        question: "Which vegetable contains 90% water?",
        optionA: "Potato",
        optionB: "Tomato",
        optionC: "Onion",
        correctAnswer: "Tomato",
      }),
      shuffleOptions({
        question: "Which planet is called the blue planet?",
        optionA: "Earth",
        optionB: "Mars",
        optionC: "Jupiter",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "Which water bodies are disappearing and causing concern?",
        optionA: "Hills",
        optionB: "Ponds and lakes",
        optionC: "Mountains",
        correctAnswer: "Ponds and lakes",
      }),
    ]),
  };
}


if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Clouds are formed when water ______.",
        optionA: "Freezes",
        optionB: "Evaporates",
        optionC: "Dissolves",
        correctAnswer: "Evaporates",
      }),
      shuffleOptions({
        question: "Rivers carry ______ particles dissolved in water.",
        optionA: "Sugar",
        optionB: "Salt",
        optionC: "Sand",
        correctAnswer: "Salt",
      }),
      shuffleOptions({
        question: "Masaru Emoto pasted ______ messages on glasses.",
        optionA: "Positive and negative",
        optionB: "Scientific",
        optionC: "Historical",
        correctAnswer: "Positive and negative",
      }),
      shuffleOptions({
        question: "Seawater is ______ because of dissolved salt.",
        optionA: "Sweet",
        optionB: "Saline",
        optionC: "Pure",
        correctAnswer: "Saline",
      }),
      shuffleOptions({
        question: "Water in rivers tastes sweet because the salt is ______.",
        optionA: "In small amount",
        optionB: "Absent",
        optionC: "Frozen",
        correctAnswer: "In small amount",
      }),
      shuffleOptions({
        question: "The disappearing of ______ puts our existence at risk.",
        optionA: "Lakes and ponds",
        optionB: "Oceans",
        optionC: "Hills",
        correctAnswer: "Lakes and ponds",
      }),
      shuffleOptions({
        question: "Rainwater appears sweet but contains ______.",
        optionA: "Dissolved salts",
        optionB: "Sugar",
        optionC: "Air",
        correctAnswer: "Dissolved salts",
      }),
      shuffleOptions({
        question: "The oceans are the ______ store of water.",
        optionA: "Smallest",
        optionB: "Largest",
        optionC: "Limited",
        correctAnswer: "Largest",
      }),
      shuffleOptions({
        question: "In Hinduism, rivers are called ______.",
        optionA: "Dev",
        optionB: "Mata",
        optionC: "Pita",
        correctAnswer: "Mata",
      }),
      shuffleOptions({
        question: "Human life cannot ______ without water.",
        optionA: "Travel",
        optionB: "Thrive",
        optionC: "Eat",
        correctAnswer: "Thrive",
      }),
    ]),
  };
}


if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water has no role in vegetables.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Salt evaporates with seawater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Respecting water helps keep it pure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Clouds bring rain, hail, or snow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seawater is becoming less salty every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The earth’s surface is mostly covered with water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water and life are complementary.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Masaru Emoto was an Indian author.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Industrial pollution is a threat to water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Humans cannot survive even a day without water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
export var activityData;

