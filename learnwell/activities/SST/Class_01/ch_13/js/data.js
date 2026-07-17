export const chapter = "Chapter - 13: Plants and Animals Around Us";
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
        question: "Which plant is known for giving a lot of shade?",
        optionA: "Mint",
        optionB: "Banyan",
        optionC: "Rose",
        correctAnswer: "Banyan",
      }),
      shuffleOptions({
        question: "Which animal do we usually keep at home for enjoyment?",
        optionA: "Dog",
        optionB: "Tiger",
        optionC: "Bear",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which of these is a very small plant?",
        optionA: "Grass",
        optionB: "Mango",
        optionC: "Banyan",
        correctAnswer: "Grass",
      }),
      shuffleOptions({
        question: "Which animal lives in forests away from people?",
        optionA: "Cow",
        optionB: "Goat",
        optionC: "Lion",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "Which plant is an example of a shrub?",
        optionA: "Jasmine",
        optionB: "Peepal",
        optionC: "Grass",
        correctAnswer: "Jasmine",
      }),
      shuffleOptions({
        question: "Which animal is kept at home as a pet?",
        optionA: "Parrot",
        optionB: "Tiger",
        optionC: "Bear",
        correctAnswer: "Parrot",
      }),
      shuffleOptions({
        question: "Which of these is a herb?",
        optionA: "Mint",
        optionB: "Banyan",
        optionC: "Mango",
        correctAnswer: "Mint",
      }),
      shuffleOptions({
        question: "Which animal helps us by giving milk?",
        optionA: "Lion",
        optionB: "Cow",
        optionC: "Dog",
        correctAnswer: "Cow",
      }),
      shuffleOptions({
        question: "Which plant is tall and strong?",
        optionA: "Tree",
        optionB: "Herb",
        optionC: "Grass",
        correctAnswer: "Tree",
      }),
      shuffleOptions({
        question: "Which animal can be seen on a farm?",
        optionA: "Goat",
        optionB: "Bear",
        optionC: "Cat",
        correctAnswer: "Goat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A big and tall plant is called a ________.",
        optionA: "shrub",
        optionB: "tree",
        optionC: "herb",
        correctAnswer: "tree",
      }),
      shuffleOptions({
        question: "Plants make their food with the help of ________.",
        optionA: "sunlight",
        optionB: "rain",
        optionC: "wind",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "A very small plant is called a ________.",
        optionA: "shrub",
        optionB: "tree",
        optionC: "herb",
        correctAnswer: "herb",
      }),
      shuffleOptions({
        question: "A ________ animal lives with us in our homes.",
        optionA: "wild",
        optionB: "pet",
        optionC: "domestic",
        correctAnswer: "pet",
      }),
      shuffleOptions({
        question: "A ________ is a domestic animal.",
        optionA: "buffalo",
        optionB: "lion",
        optionC: "parrot",
        correctAnswer: "buffalo",
      }),
      shuffleOptions({
        question: "A ________ is an example of a shrub.",
        optionA: "jasmine",
        optionB: "mint",
        optionC: "banyan",
        correctAnswer: "jasmine",
      }),
      shuffleOptions({
        question: "We get fresh ________ from plants.",
        optionA: "air",
        optionB: "plastic",
        optionC: "stones",
        correctAnswer: "air",
      }),
      shuffleOptions({
        question: "________ animals live in forests.",
        optionA: "Wild",
        optionB: "Pet",
        optionC: "Domestic",
        correctAnswer: "Wild",
      }),
      shuffleOptions({
        question: "We should take good ________ of animals.",
        optionA: "care",
        optionB: "fun",
        optionC: "time",
        correctAnswer: "care",
      }),
      shuffleOptions({
        question: "A ________ is kept on farms and helps us.",
        optionA: "tiger",
        optionB: "goat",
        optionC: "parrot",
        correctAnswer: "goat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Grass is a herb.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A lion is a domestic animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shrubs are very small plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Parrot is a pet animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants give us fresh air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cow is a wild animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trees are the smallest plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Animals help us in many ways.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants cannot make their own food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should never tease animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
