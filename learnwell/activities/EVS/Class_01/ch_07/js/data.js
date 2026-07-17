export const chapter = "Chapter - 7: My Food";
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
        question: "What gives us energy to work and play?",
        optionA: "Food",
        optionB: "Clothes",
        optionC: "Toys",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Which drink helps us grow strong?",
        optionA: "Milk",
        optionB: "Juice",
        optionC: "Water",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "Which food should we eat to stay healthy?",
        optionA: "Fruits",
        optionB: "Chips",
        optionC: "Cold drink",
        correctAnswer: "Fruits",
      }),
      shuffleOptions({
        question: "What should we never do with food?",
        optionA: "Waste it",
        optionB: "Eat it",
        optionC: "Cook it",
        correctAnswer: "Waste it",
      }),
      shuffleOptions({
        question: "What do we eat in the morning?",
        optionA: "Breakfast",
        optionB: "Lunch",
        optionC: "Dinner",
        correctAnswer: "Breakfast",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Food gives us ______ to do work.",
        optionA: "Energy",
        optionB: "Toys",
        optionC: "Books",
        correctAnswer: "Energy",
      }),
      shuffleOptions({
        question: "We should eat ______ food.",
        optionA: "Healthy",
        optionB: "Dirty",
        optionC: "Stale",
        correctAnswer: "Healthy",
      }),
      shuffleOptions({
        question: "We get milk from a ______.",
        optionA: "Cow",
        optionB: "Dog",
        optionC: "Cat",
        correctAnswer: "Cow",
      }),
      shuffleOptions({
        question: "Rice and wheat are ______.",
        optionA: "Grains",
        optionB: "Fruits",
        optionC: "Vegetables",
        correctAnswer: "Grains",
      }),
      shuffleOptions({
        question: "We take dinner at ______.",
        optionA: "Night",
        optionB: "Morning",
        optionC: "Noon",
        correctAnswer: "Night",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Food gives us energy to work and play.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should waste food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We take three meals in a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fruits and vegetables make us strong.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should eat clean and fresh food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
