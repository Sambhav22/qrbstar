export const chapter = "Chapter - 1: The Jungle Boy";
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
        question: "Who found a human child under the tree?",
        optionA: "Bagheera",
        optionB: "Father Wolf",
        optionC: "Akela",
        correctAnswer: "Father Wolf",
      }),
      shuffleOptions({
        question: "Who was the black panther in the story?",
        optionA: "Bagheera",
        optionB: "Baloo",
        optionC: "Sherkhan",
        correctAnswer: "Bagheera",
      }),
      shuffleOptions({
        question: "Who was the chief of elephants?",
        optionA: "Tabaki",
        optionB: "Hathi",
        optionC: "Mor",
        correctAnswer: "Hathi",
      }),
      shuffleOptions({
        question: "Who was the wicked python?",
        optionA: "Kaa",
        optionB: "Sahi",
        optionC: "Mang",
        correctAnswer: "Kaa",
      }),
      shuffleOptions({
        question: "What did Mowgli bring in a hollow stone?",
        optionA: "Water",
        optionB: "Burning embers",
        optionC: "Honey",
        correctAnswer: "Burning embers",
      }),
      shuffleOptions({
        question: "Who advised Mowgli to bring the red flower?",
        optionA: "Akela",
        optionB: "Bagheera",
        optionC: "Baloo",
        correctAnswer: "Bagheera",
      }),
      shuffleOptions({
        question: "Which animal had insatiable hunger?",
        optionA: "Sherkhan",
        optionB: "Baloo",
        optionC: "Akela",
        correctAnswer: "Sherkhan",
      }),
      shuffleOptions({
        question: "What were the monkeys in the story called?",
        optionA: "Bander Log",
        optionB: "Rikitikitai",
        optionC: "Mor",
        correctAnswer: "Bander Log",
      }),
      shuffleOptions({
        question: "Who taught Mowgli the law of the jungle?",
        optionA: "Father Wolf",
        optionB: "Baloo",
        optionC: "Tabaki",
        correctAnswer: "Baloo",
      }),
      shuffleOptions({
        question: "What was the red flower?",
        optionA: "Water",
        optionB: "Fire",
        optionC: "Fruit",
        correctAnswer: "Fire",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mowgli lived in the forest for nearly ______.",
        optionA: "two years",
        optionB: "five years",
        optionC: "ten years",
        correctAnswer: "ten years",
      }),
      shuffleOptions({
        question: "Baloo was a ______.",
        optionA: "bear",
        optionB: "tiger",
        optionC: "panther",
        correctAnswer: "bear",
      }),
      shuffleOptions({
        question: "Sherkhan was a ______.",
        optionA: "wolf",
        optionB: "tiger",
        optionC: "jackal",
        correctAnswer: "tiger",
      }),
      shuffleOptions({
        question: "Tabaki was a ______.",
        optionA: "mongoose",
        optionB: "jackal",
        optionC: "python",
        correctAnswer: "jackal",
      }),
      shuffleOptions({
        question: "Mang was a ______.",
        optionA: "bat",
        optionB: "porcupine",
        optionC: "snake",
        correctAnswer: "bat",
      }),
      shuffleOptions({
        question: "Mor was a ______.",
        optionA: "peacock",
        optionB: "elephant",
        optionC: "monkey",
        correctAnswer: "peacock",
      }),
      shuffleOptions({
        question: "Rikitikitai was a ______.",
        optionA: "mongoose",
        optionB: "bear",
        optionC: "wolf",
        correctAnswer: "mongoose",
      }),
      shuffleOptions({
        question: "Sahi was a ______.",
        optionA: "porcupine",
        optionB: "jackal",
        optionC: "tiger",
        correctAnswer: "porcupine",
      }),
      shuffleOptions({
        question: "The animals told Mowgli to bring the ______.",
        optionA: "red flower",
        optionB: "golden fruit",
        optionC: "black stone",
        correctAnswer: "red flower",
      }),
      shuffleOptions({
        question: "The red flower was kept in a ______.",
        optionA: "hollow stone",
        optionB: "clay pot",
        optionC: "bamboo",
        correctAnswer: "hollow stone",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Akela was the great lone wolf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bagheera often watched Mowgli’s lessons secretly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The animals hunted for fun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mowgli learnt to swim, run, and climb.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The animals were happy when Akela fell ill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mowgli carried fire in a hollow stone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The animals feared the red flower.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bagheera said, “You are a human, and humans have tears.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mowgli promised to return to the forest one day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Akela declared that Mowgli would be the master of animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
