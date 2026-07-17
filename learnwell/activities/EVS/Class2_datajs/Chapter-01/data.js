export const chapter = "Chapter - 1: My Body";
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
        question: "Which organ helps us to breathe in and out air?",
        optionA: "Heart",
        optionB: "Lungs",
        optionC: "Ears",
        correctAnswer: "Lungs",
      }),
      shuffleOptions({
        question: "Which part of our body helps us to write and hold things?",
        optionA: "Hands",
        optionB: "Legs",
        optionC: "Nose",
        correctAnswer: "Hands",
      }),
      shuffleOptions({
        question: "Which body part helps us to move from one place to another?",
        optionA: "Ears",
        optionB: "Legs",
        optionC: "Eyes",
        correctAnswer: "Legs",
      }),
      shuffleOptions({
        question: "Which organ helps us to know the taste of food?",
        optionA: "Tongue",
        optionB: "Nose",
        optionC: "Skin",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "Which sense organ helps us to feel whether something is hot or cold?",
        optionA: "Eyes",
        optionB: "Skin",
        optionC: "Nose",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "Which internal organ pumps blood all over the body?",
        optionA: "Lungs",
        optionB: "Heart",
        optionC: "Brain",
        correctAnswer: "Heart",
      }),
      shuffleOptions({
        question: "Which sense organ helps us to enjoy a song?",
        optionA: "Eyes",
        optionB: "Ears",
        optionC: "Nose",
        correctAnswer: "Ears",
      }),
      shuffleOptions({
        question: "Which organ helps us to smell a flower?",
        optionA: "Nose",
        optionB: "Tongue",
        optionC: "Skin",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "Which body part helps us to see things around us?",
        optionA: "Eyes",
        optionB: "Nose",
        optionC: "Ears",
        correctAnswer: "Eyes",
      }),
      shuffleOptions({
        question: "Which of the following is not a sense organ?",
        optionA: "Tongue",
        optionB: "Heart",
        optionC: "Skin",
        correctAnswer: "Heart",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We walk and run with our ______.",
        optionA: "Hands",
        optionB: "Legs",
        optionC: "Eyes",
        correctAnswer: "Legs",
      }),
      shuffleOptions({
        question: "We hold a pencil with our ______.",
        optionA: "Nose",
        optionB: "Hands",
        optionC: "Ears",
        correctAnswer: "Hands",
      }),
      shuffleOptions({
        question: "We smell perfumes with our ______.",
        optionA: "Eyes",
        optionB: "Nose",
        optionC: "Tongue",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "We taste mangoes with our ______.",
        optionA: "Tongue",
        optionB: "Ears",
        optionC: "Nose",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "We feel soft and hard things with our ______.",
        optionA: "Skin",
        optionB: "Eyes",
        optionC: "Nose",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "The ______ pumps blood in our body.",
        optionA: "Heart",
        optionB: "Lungs",
        optionC: "Legs",
        correctAnswer: "Heart",
      }),
      shuffleOptions({
        question: "The ______ help air to go in and out.",
        optionA: "Legs",
        optionB: "Lungs",
        optionC: "Ears",
        correctAnswer: "Lungs",
      }),
      shuffleOptions({
        question: "Our body needs food, water and ______ to work properly.",
        optionA: "Rest",
        optionB: "Toys",
        optionC: "Music",
        correctAnswer: "Rest",
      }),
      shuffleOptions({
        question: "The ______ help us to hear sounds around us.",
        optionA: "Ears",
        optionB: "Eyes",
        optionC: "Nose",
        correctAnswer: "Ears",
      }),
      shuffleOptions({
        question: "The ______ helps us to see things clearly.",
        optionA: "Eyes",
        optionB: "Skin",
        optionC: "Tongue",
        correctAnswer: "Eyes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The eyes help us to see objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lungs help us to smell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The heart is an internal organ.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The nose helps us to taste food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tongue helps us to taste food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Legs help us to walk and run.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The skin helps us to feel things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lungs are external body parts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We can see our heart easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We need food, water and rest to stay healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
