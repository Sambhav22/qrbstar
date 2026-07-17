export const chapter = "Chapter - 3: Our Senses";
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
        question: "Which organ helps us to hear different sounds?",
        optionA: "Eye",
        optionB: "Ear",
        optionC: "Nose",
        correctAnswer: "Ear",
      }),
      shuffleOptions({
        question: "Which organ of our body helps us to smell a flower?",
        optionA: "Nose",
        optionB: "Tongue",
        optionC: "Ear",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "Which sense organ helps us to feel whether an object is hot or cold?",
        optionA: "Skin",
        optionB: "Eye",
        optionC: "Nose",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "Which organ has taste buds that detect different flavours?",
        optionA: "Tongue",
        optionB: "Nose",
        optionC: "Skin",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "Which part of our body sends messages to the brain?",
        optionA: "Nerves",
        optionB: "Bones",
        optionC: "Muscles",
        correctAnswer: "Nerves",
      }),
      shuffleOptions({
        question: "Which organ helps us to see everything around us?",
        optionA: "Eye",
        optionB: "Ear",
        optionC: "Tongue",
        correctAnswer: "Eye",
      }),
      shuffleOptions({
        question: "Touch that hurts our body or feelings is called a ________ touch.",
        optionA: "Bad",
        optionB: "Good",
        optionC: "Rough",
        correctAnswer: "Bad",
      }),
      shuffleOptions({
        question: "The sense of smell is possible because of our",
        optionA: "Nose",
        optionB: "Skin",
        optionC: "Tongue",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "Who invented a special reading system called Braille?",
        optionA: "Louis Braille",
        optionB: "Helen Keller",
        optionC: "Neha",
        correctAnswer: "Louis Braille",
      }),
      shuffleOptions({
        question: "Helen Keller was both ________ and ________.",
        optionA: "Blind and Deaf",
        optionB: "Deaf and Mute",
        optionC: "Blind and Dumb",
        correctAnswer: "Blind and Deaf",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ________ helps us to hear sounds.",
        optionA: "Nose",
        optionB: "Ear",
        optionC: "Tongue",
        correctAnswer: "Ear",
      }),
      shuffleOptions({
        question: "The ________ helps us to feel touch.",
        optionA: "Skin",
        optionB: "Nose",
        optionC: "Ear",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "The ________ helps us to see objects.",
        optionA: "Eye",
        optionB: "Tongue",
        optionC: "Ear",
        correctAnswer: "Eye",
      }),
      shuffleOptions({
        question: "The ________ helps us to taste food.",
        optionA: "Tongue",
        optionB: "Eye",
        optionC: "Nose",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "The ________ helps us to smell good or bad odours.",
        optionA: "Nose",
        optionB: "Skin",
        optionC: "Eye",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "The ________ connects the sense organs to the brain.",
        optionA: "Nerves",
        optionB: "Bones",
        optionC: "Muscles",
        correctAnswer: "Nerves",
      }),
      shuffleOptions({
        question: "The brain processes signals in a few ________.",
        optionA: "Microseconds",
        optionB: "Minutes",
        optionC: "Hours",
        correctAnswer: "Microseconds",
      }),
      shuffleOptions({
        question: "People who cannot see are called ________.",
        optionA: "Blind",
        optionB: "Deaf",
        optionC: "Mute",
        correctAnswer: "Blind",
      }),
      shuffleOptions({
        question: "Touch that keeps us safe and loved is a ________ touch.",
        optionA: "Good",
        optionB: "Bad",
        optionC: "Hard",
        correctAnswer: "Good",
      }),
      shuffleOptions({
        question: "The system used by blind people to read is called ________.",
        optionA: "Braille",
        optionB: "Sign Language",
        optionC: "Morse Code",
        correctAnswer: "Braille",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Eyes help us to smell good or bad things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Skin helps us to feel soft or hard things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ear helps us to see different colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tongue helps to detect different tastes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The brain sends and receives messages through nerves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bad touch makes us feel loved and cared.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Good touch keeps us safe and comfortable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People who cannot see are called blind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Helen Keller was blind and deaf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should help differently-abled people to live independently.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
