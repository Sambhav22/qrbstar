export const chapter = "Chapter - 5: Our Body";
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
        question: "Which part of the body is covered with hair?",
        optionA: "Head",
        optionB: "Legs",
        optionC: "Hands",
        correctAnswer: "Head",
      }),
      shuffleOptions({
        question: "Which organ controls the working of the whole body?",
        optionA: "Stomach",
        optionB: "Brain",
        optionC: "Heart",
        correctAnswer: "Brain",
      }),
      shuffleOptions({
        question: "Which organ is found in the chest and works like a pump?",
        optionA: "Heart",
        optionB: "Lungs",
        optionC: "Stomach",
        correctAnswer: "Heart",
      }),
      shuffleOptions({
        question: "Which organ is like two air bags?",
        optionA: "Brain",
        optionB: "Lungs",
        optionC: "Stomach",
        correctAnswer: "Lungs",
      }),
      shuffleOptions({
        question: "Which part is not visible from outside?",
        optionA: "Nose",
        optionB: "Ear",
        optionC: "Stomach",
        correctAnswer: "Stomach",
      }),
      shuffleOptions({
        question: "Which part beats faster when we run?",
        optionA: "Brain",
        optionB: "Heart",
        optionC: "Lungs",
        correctAnswer: "Heart",
      }),
      shuffleOptions({
        question: "Which organ helps in digestion?",
        optionA: "Stomach",
        optionB: "Brain",
        optionC: "Heart",
        correctAnswer: "Stomach",
      }),
      shuffleOptions({
        question: "Which organ sends messages to the whole body?",
        optionA: "Brain",
        optionB: "Heart",
        optionC: "Lungs",
        correctAnswer: "Brain",
      }),
      shuffleOptions({
        question: "Which body part helps us to hear?",
        optionA: "Eyes",
        optionB: "Ears",
        optionC: "Legs",
        correctAnswer: "Ears",
      }),
      shuffleOptions({
        question: "Which organ is located slightly to the left in our chest?",
        optionA: "Heart",
        optionB: "Stomach",
        optionC: "Brain",
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
        question: "Our ______ is smaller on the left side.",
        optionA: "Lung",
        optionB: "Heart",
        optionC: "Brain",
        correctAnswer: "Lung",
      }),
      shuffleOptions({
        question: "The ______ beats without stopping.",
        optionA: "Heart",
        optionB: "Lungs",
        optionC: "Brain",
        correctAnswer: "Heart",
      }),
      shuffleOptions({
        question: "The ______ helps us remember things.",
        optionA: "Stomach",
        optionB: "Brain",
        optionC: "Heart",
        correctAnswer: "Brain",
      }),
      shuffleOptions({
        question: "The ______ fill with air when we breathe.",
        optionA: "Heart",
        optionB: "Lungs",
        optionC: "Stomach",
        correctAnswer: "Lungs",
      }),
      shuffleOptions({
        question: "The ______ helps us digest food.",
        optionA: "Stomach",
        optionB: "Heart",
        optionC: "Brain",
        correctAnswer: "Stomach",
      }),
      shuffleOptions({
        question: "The ______ pumps blood all around the body.",
        optionA: "Heart",
        optionB: "Lungs",
        optionC: "Brain",
        correctAnswer: "Heart",
      }),
      shuffleOptions({
        question: "The ______ is inside our head.",
        optionA: "Brain",
        optionB: "Stomach",
        optionC: "Lungs",
        correctAnswer: "Brain",
      }),
      shuffleOptions({
        question: "The ______ are external parts.",
        optionA: "Legs",
        optionB: "Lungs",
        optionC: "Stomach",
        correctAnswer: "Legs",
      }),
      shuffleOptions({
        question: "The ______ is called the pumping station.",
        optionA: "Heart",
        optionB: "Brain",
        optionC: "Lungs",
        correctAnswer: "Heart",
      }),
      shuffleOptions({
        question: "All body parts must work properly to keep us ______.",
        optionA: "Alive",
        optionB: "Asleep",
        optionC: "Still",
        correctAnswer: "Alive",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Stomach is an external part.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The brain helps us to think.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We have two lungs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Our heart is on the right side of the chest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hair is an external part.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lungs help in breathing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The brain controls all body functions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Food goes into the stomach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Our body parts keep us alive when they work together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The left lung is bigger than the right lung.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
