export const chapter = "Chapter - 11: Respect Our Helpers";
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
        question: "Who brings milk to our homes every morning?",
        optionA: "Postman",
        optionB: "Milkman",
        optionC: "Policeman",
        correctAnswer: "Milkman",
      }),
      shuffleOptions({
        question: "Who cuts and styles our hair?",
        optionA: "Barber",
        optionB: "Tailor",
        optionC: "Carpenter",
        correctAnswer: "Barber",
      }),
      shuffleOptions({
        question: "Who teaches children in school?",
        optionA: "Teacher",
        optionB: "Doctor",
        optionC: "Shopkeeper",
        correctAnswer: "Teacher",
      }),
      shuffleOptions({
        question: "Who keeps us safe from robbers and thieves?",
        optionA: "Policeman",
        optionB: "Milkman",
        optionC: "Barber",
        correctAnswer: "Policeman",
      }),
      shuffleOptions({
        question: "Who delivers letters to our homes?",
        optionA: "Postman",
        optionB: "Carpenter",
        optionC: "Doctor",
        correctAnswer: "Postman",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A _______ cuts our hair.",
        optionA: "Tailor",
        optionB: "Barber",
        optionC: "Policeman",
        correctAnswer: "Barber",
      }),
      shuffleOptions({
        question: "A _______ sells things in a shop.",
        optionA: "Shopkeeper",
        optionB: "Doctor",
        optionC: "Carpenter",
        correctAnswer: "Shopkeeper",
      }),
      shuffleOptions({
        question: "A _______ teaches children.",
        optionA: "Teacher",
        optionB: "Greengrocer",
        optionC: "Milkman",
        correctAnswer: "Teacher",
      }),
      shuffleOptions({
        question: "A _______ treats the sick.",
        optionA: "Doctor",
        optionB: "Tailor",
        optionC: "Postman",
        correctAnswer: "Doctor",
      }),
      shuffleOptions({
        question: "A _______ makes wooden furniture.",
        optionA: "Carpenter",
        optionB: "Barber",
        optionC: "Teacher",
        correctAnswer: "Carpenter",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A tailor makes wooden furniture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A doctor helps sick people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A greengrocer sells vegetables.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A policeman teaches in school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A teacher teaches children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
