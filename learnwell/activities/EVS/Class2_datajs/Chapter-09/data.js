export const chapter = "Chapter - 9: My Locality";
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
        question: "What do we call the area around our house?",
        optionA: "Country",
        optionB: "Locality",
        optionC: "Market",
        correctAnswer: "Locality",
      }),
      shuffleOptions({
        question: "Who helps sick and injured people?",
        optionA: "Policeman",
        optionB: "Doctor",
        optionC: "Teacher",
        correctAnswer: "Doctor",
      }),
      shuffleOptions({
        question: "Where do we keep our money safely?",
        optionA: "School",
        optionB: "Bank",
        optionC: "Park",
        correctAnswer: "Bank",
      }),
      shuffleOptions({
        question: "Where can we play and enjoy with our friends?",
        optionA: "Park",
        optionB: "Market",
        optionC: "Bank",
        correctAnswer: "Park",
      }),
      shuffleOptions({
        question: "Who maintains law and order in our locality?",
        optionA: "Policeman",
        optionB: "Doctor",
        optionC: "Shopkeeper",
        correctAnswer: "Policeman",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We buy fruits and vegetables from the ________.",
        optionA: "park",
        optionB: "market",
        optionC: "bank",
        correctAnswer: "market",
      }),
      shuffleOptions({
        question: "A ________ treats people who are sick.",
        optionA: "doctor",
        optionB: "policeman",
        optionC: "teacher",
        correctAnswer: "doctor",
      }),
      shuffleOptions({
        question: "Children study in a ________.",
        optionA: "park",
        optionB: "school",
        optionC: "bank",
        correctAnswer: "school",
      }),
      shuffleOptions({
        question: "We play on swings in the ________.",
        optionA: "park",
        optionB: "market",
        optionC: "hospital",
        correctAnswer: "park",
      }),
      shuffleOptions({
        question: "Policemen work in a ________.",
        optionA: "police station",
        optionB: "hospital",
        optionC: "salon",
        correctAnswer: "police station",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A doctor gives medicines to sick people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We go to the park to study and read.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A policeman protects us and keeps law and order.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We buy vegetables from the police station.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "There are trees and swings in the park.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
