export const chapter = "Chapter - 7: Our Body";
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
        question: "What do our hands help us to do?",
        optionA: "Smell",
        optionB: "Write",
        optionC: "Taste",
        correctAnswer: "Write",
      }),
      shuffleOptions({
        question: "What do our legs help us to do?",
        optionA: "Run",
        optionB: "Taste",
        optionC: "Smell",
        correctAnswer: "Run",
      }),
      shuffleOptions({
        question: "What does our skin help us to do?",
        optionA: "Smell",
        optionB: "See",
        optionC: "Feel",
        correctAnswer: "Feel",
      }),
      shuffleOptions({
        question: "What does our nose help us to do?",
        optionA: "Walk",
        optionB: "Smell",
        optionC: "Write",
        correctAnswer: "Smell",
      }),
      shuffleOptions({
        question: "What do our eyes help us to do?",
        optionA: "See",
        optionB: "Hear",
        optionC: "Taste",
        correctAnswer: "See",
      }),
      shuffleOptions({
        question: "What do our ears help us to do?",
        optionA: "Taste",
        optionB: "Hear",
        optionC: "Run",
        correctAnswer: "Hear",
      }),
      shuffleOptions({
        question: "What does our tongue help us to do?",
        optionA: "Taste",
        optionB: "Walk",
        optionC: "Smell",
        correctAnswer: "Taste",
      }),
      shuffleOptions({
        question: "What do we use to kick a ball?",
        optionA: "Nose",
        optionB: "Legs",
        optionC: "Hands",
        correctAnswer: "Legs",
      }),
      shuffleOptions({
        question: "Which part of our body covers us fully?",
        optionA: "Hair",
        optionB: "Skin",
        optionC: "Tongue",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "Which organ also helps us in body balance?",
        optionA: "Nose",
        optionB: "Ears",
        optionC: "Hands",
        correctAnswer: "Ears",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We walk with our ______.",
        optionA: "Hands",
        optionB: "Legs",
        optionC: "Eyes",
        correctAnswer: "Legs",
      }),
      shuffleOptions({
        question: "We clap with our ______.",
        optionA: "Hands",
        optionB: "Legs",
        optionC: "Nose",
        correctAnswer: "Hands",
      }),
      shuffleOptions({
        question: "We write with our ______.",
        optionA: "Legs",
        optionB: "Hands",
        optionC: "Ears",
        correctAnswer: "Hands",
      }),
      shuffleOptions({
        question: "We taste with our ______.",
        optionA: "Nose",
        optionB: "Tongue",
        optionC: "Skin",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "We hear with our ______.",
        optionA: "Ears",
        optionB: "Eyes",
        optionC: "Tongue",
        correctAnswer: "Ears",
      }),
      shuffleOptions({
        question: "We smell with our ______.",
        optionA: "Nose",
        optionB: "Hands",
        optionC: "Legs",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "The ______ is the largest organ of our body.",
        optionA: "Skin",
        optionB: "Eyes",
        optionC: "Nose",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "We see with our ______.",
        optionA: "Tongue",
        optionB: "Eyes",
        optionC: "Hands",
        correctAnswer: "Eyes",
      }),
      shuffleOptions({
        question: "We kick the ball with our ______.",
        optionA: "Nose",
        optionB: "Legs",
        optionC: "Hands",
        correctAnswer: "Legs",
      }),
      shuffleOptions({
        question: "Our ______ helps us to feel things.",
        optionA: "Skin",
        optionB: "Nose",
        optionC: "Eyes",
        correctAnswer: "Skin",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Skin is the largest organ of our body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We hear with our ears.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nose helps us to taste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We write with our legs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Eyes help us to see things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tongue helps us to taste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We walk with our ears.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Our body has five sense organs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We clap with our legs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Neck helps the head to move.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
