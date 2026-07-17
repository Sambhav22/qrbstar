export const chapter = "Chapter - 5: My Family";
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
        question: "Who lives together in a family?",
        optionA: "Friends",
        optionB: "People who live together",
        optionC: "Teachers",
        correctAnswer: "People who live together",
      }),
      shuffleOptions({
        question: "Whose family has four members?",
        optionA: "Abha’s",
        optionB: "Ram’s",
        optionC: "Ramya’s",
        correctAnswer: "Ram’s",
      }),
      shuffleOptions({
        question: "Whose family is called a joint family?",
        optionA: "Ram’s",
        optionB: "Ramya’s",
        optionC: "Abha’s",
        correctAnswer: "Ramya’s",
      }),
      shuffleOptions({
        question: "How many members are there in Abha’s family?",
        optionA: "Four",
        optionB: "Six",
        optionC: "Two",
        correctAnswer: "Six",
      }),
      shuffleOptions({
        question: "From whom do we learn to walk and talk?",
        optionA: "Friends",
        optionB: "Family members",
        optionC: "Neighbours",
        correctAnswer: "Family members",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ______ is a group of people who live together.",
        optionA: "school",
        optionB: "family",
        optionC: "shop",
        correctAnswer: "family",
      }),
      shuffleOptions({
        question: "Families are of ______ kinds.",
        optionA: "one",
        optionB: "two",
        optionC: "different",
        correctAnswer: "different",
      }),
      shuffleOptions({
        question: "A small family has ______ children.",
        optionA: "one or two",
        optionB: "more than two",
        optionC: "no",
        correctAnswer: "one or two",
      }),
      shuffleOptions({
        question: "A big family has ______ children.",
        optionA: "one",
        optionB: "more than two",
        optionC: "two",
        correctAnswer: "more than two",
      }),
      shuffleOptions({
        question: "Ram’s family is a ______ family.",
        optionA: "joint",
        optionB: "big",
        optionC: "small",
        correctAnswer: "small",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A family means a group of people who live together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ram’s family has six members.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A small family has more than two children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A joint family has only parents and two children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We learn how to talk and behave from our family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
