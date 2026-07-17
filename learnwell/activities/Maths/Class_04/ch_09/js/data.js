export const chapter = "Chapter - 9: Adventure";
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
        question: "Who discovered America?",
        optionA: "Vasco da Gama",
        optionB: "Columbus",
        optionC: "Galileo",
        correctAnswer: "Columbus",
      }),
      shuffleOptions({
        question: "Who discovered the sea route to India?",
        optionA: "Columbus",
        optionB: "Vasco da Gama",
        optionC: "Newton",
        correctAnswer: "Vasco da Gama",
      }),
      shuffleOptions({
        question: "What was the first boat made of?",
        optionA: "Iron",
        optionB: "Stone",
        optionC: "Wood",
        correctAnswer: "Wood",
      }),
      shuffleOptions({
        question: "What does adventure make life?",
        optionA: "Boring",
        optionB: "Joyful",
        optionC: "Painful",
        correctAnswer: "Joyful",
      }),
      shuffleOptions({
        question: "The aeroplane was invented after people tried to fly like which creature?",
        optionA: "Birds",
        optionB: "Fish",
        optionC: "Horses",
        correctAnswer: "Birds",
      }),
      shuffleOptions({
        question: "Adventure is not a ______ act.",
        optionA: "Thoughtful",
        optionB: "Reckless",
        optionC: "Careful",
        correctAnswer: "Reckless",
      }),
      shuffleOptions({
        question: "Where did divers discover new animals?",
        optionA: "Forest",
        optionB: "Oceans",
        optionC: "Deserts",
        correctAnswer: "Oceans",
      }),
      shuffleOptions({
        question: "Astronauts proved that the earth is what shape?",
        optionA: "Flat",
        optionB: "Square",
        optionC: "Spherical",
        correctAnswer: "Spherical",
      }),
      shuffleOptions({
        question: "Adventure sports can be learnt only with proper what?",
        optionA: "Toys",
        optionB: "Training",
        optionC: "Food",
        correctAnswer: "Training",
      }),
      shuffleOptions({
        question: "What did mountaineers explore?",
        optionA: "Rivers",
        optionB: "Mountains",
        optionC: "Deserts",
        correctAnswer: "Mountains",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Adventure is a ______ to your resources, mental toughness and physical strength.",
        optionA: "Game",
        optionB: "Challenge",
        optionC: "Fun",
        correctAnswer: "Challenge",
      }),
      shuffleOptions({
        question: "Those who seek adventure are ______ in the world.",
        optionA: "Respected",
        optionB: "Ignored",
        optionC: "Punished",
        correctAnswer: "Respected",
      }),
      shuffleOptions({
        question: "Adventure takes us away from our ______ life.",
        optionA: "Monotonous",
        optionB: "Happy",
        optionC: "Exciting",
        correctAnswer: "Monotonous",
      }),
      shuffleOptions({
        question: "A tree trunk was seen ______ in the river.",
        optionA: "Sinking",
        optionB: "Floating",
        optionC: "Breaking",
        correctAnswer: "Floating",
      }),
      shuffleOptions({
        question: "Vasco da Gama discovered the sea route to ______.",
        optionA: "India",
        optionB: "America",
        optionC: "Africa",
        correctAnswer: "India",
      }),
      shuffleOptions({
        question: "Columbus went on a long ______.",
        optionA: "Voyage",
        optionB: "Car ride",
        optionC: "Walk",
        correctAnswer: "Voyage",
      }),
      shuffleOptions({
        question: "Adventure always gives a new ______.",
        optionA: "Experience",
        optionB: "Problem",
        optionC: "Mistake",
        correctAnswer: "Experience",
      }),
      shuffleOptions({
        question: "Astronauts proved that the earth is ______.",
        optionA: "Flat",
        optionB: "Square",
        optionC: "Spherical",
        correctAnswer: "Spherical",
      }),
      shuffleOptions({
        question: "Adventure cultivates many new ______ in you.",
        optionA: "Qualities",
        optionB: "Problems",
        optionC: "Mistakes",
        correctAnswer: "Qualities",
      }),
      shuffleOptions({
        question: "Adventure is different from ______.",
        optionA: "Stupidity",
        optionB: "Courage",
        optionC: "Fun",
        correctAnswer: "Stupidity",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Adventure makes life exciting and joyful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adventure always guarantees success.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Columbus discovered America.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vasco da Gama discovered America.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A child who has seen many places has more knowledge.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adventure is the same as stupidity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Astronauts confirmed that the earth is spherical.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The boat was invented because stone floated on water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Adventure sports do not need any training.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Adventure means new experiences.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
