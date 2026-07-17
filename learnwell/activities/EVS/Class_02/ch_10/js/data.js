export const chapter = "Chapter - 10: Care of Surroundings";
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
        question: "What should we do to keep our surroundings green?",
        optionA: "Cut trees",
        optionB: "Plant trees",
        optionC: "Throw waste",
        correctAnswer: "Plant trees",
      }),
      shuffleOptions({
        question: "What makes our surroundings dirty and smelly?",
        optionA: "Clean drains",
        optionB: "Standing water",
        optionC: "Fresh air",
        correctAnswer: "Standing water",
      }),
      shuffleOptions({
        question: "What should we do with garbage?",
        optionA: "Throw it on the road",
        optionB: "Put it in the dustbin",
        optionC: "Keep it at home",
        correctAnswer: "Put it in the dustbin",
      }),
      shuffleOptions({
        question: "Who should help in cleaning the surroundings?",
        optionA: "Everyone",
        optionB: "Only teachers",
        optionC: "Only cleaners",
        correctAnswer: "Everyone",
      }),
      shuffleOptions({
        question: "What happens when drains are not cleaned?",
        optionA: "Mosquitoes grow",
        optionB: "Flowers bloom",
        optionC: "Air becomes fresh",
        correctAnswer: "Mosquitoes grow",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should keep our surroundings ______.",
        optionA: "dirty",
        optionB: "clean",
        optionC: "smelly",
        correctAnswer: "clean",
      }),
      shuffleOptions({
        question: "Standing ______ on roads makes them dirty.",
        optionA: "water",
        optionB: "mud",
        optionC: "flowers",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "______ helps to make the air fresh.",
        optionA: "Waste",
        optionB: "Tree planting",
        optionC: "Dust",
        correctAnswer: "Tree planting",
      }),
      shuffleOptions({
        question: "Garbage should be thrown in a ______.",
        optionA: "dustbin",
        optionB: "drain",
        optionC: "garden",
        correctAnswer: "dustbin",
      }),
      shuffleOptions({
        question: "______ surroundings help us live a healthy life.",
        optionA: "Dirty",
        optionB: "Well-cared",
        optionC: "Messy",
        correctAnswer: "Well-cared",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Clean surroundings keep us healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should dump waste on roads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Standing water breeds mosquitoes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Trees help to keep the air clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "It is good to waste water while cleaning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
