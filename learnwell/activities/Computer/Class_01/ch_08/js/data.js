export const chapter = "Chapter - 8: Our Food";
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
        question: "Which food item is used to make cheese?",
        optionA: "Milk",
        optionB: "Rice",
        optionC: "Wheat",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "Which food gives us energy to play?",
        optionA: "Stone",
        optionB: "Food",
        optionC: "Water",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Which meal do we eat at night?",
        optionA: "Dinner",
        optionB: "Lunch",
        optionC: "Breakfast",
        correctAnswer: "Dinner",
      }),
      shuffleOptions({
        question: "Which animal gives us milk?",
        optionA: "Goat",
        optionB: "Tiger",
        optionC: "Dog",
        correctAnswer: "Goat",
      }),
      shuffleOptions({
        question: "Which animal gives us eggs?",
        optionA: "Hen",
        optionB: "Cow",
        optionC: "Cat",
        correctAnswer: "Hen",
      }),
      shuffleOptions({
        question: "Which food makes bones and teeth strong?",
        optionA: "Milk",
        optionB: "Sugar",
        optionC: "Chips",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "Which food protects us from illness?",
        optionA: "Green vegetables",
        optionB: "Ice cream",
        optionC: "Cake",
        correctAnswer: "Green vegetables",
      }),
      shuffleOptions({
        question: "Which food should we avoid?",
        optionA: "Fruits",
        optionB: "Junk food",
        optionC: "Pulses",
        correctAnswer: "Junk food",
      }),
      shuffleOptions({
        question: "Which meal is taken in the morning?",
        optionA: "Breakfast",
        optionB: "Dinner",
        optionC: "Lunch",
        correctAnswer: "Breakfast",
      }),
      shuffleOptions({
        question: "Which drink is called the complete food?",
        optionA: "Milk",
        optionB: "Tea",
        optionC: "Water",
        correctAnswer: "Milk",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We get fruits and vegetables from ______.",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "Water",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "We get meat from ______.",
        optionA: "Fish",
        optionB: "Mango",
        optionC: "Rice",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "We should drink ______ glasses of water daily.",
        optionA: "7–8",
        optionB: "2–3",
        optionC: "1",
        correctAnswer: "7–8",
      }),
      shuffleOptions({
        question: "______ protect us from illness.",
        optionA: "Fruits",
        optionB: "Chocolates",
        optionC: "Ice-cream",
        correctAnswer: "Fruits",
      }),
      shuffleOptions({
        question: "Milk is used to make ______.",
        optionA: "Curd",
        optionB: "Chair",
        optionC: "Pen",
        correctAnswer: "Curd",
      }),
      shuffleOptions({
        question: "Food gives us ______ to run and play.",
        optionA: "Energy",
        optionB: "Toys",
        optionC: "Clothes",
        correctAnswer: "Energy",
      }),
      shuffleOptions({
        question: "Carrots improve our ______.",
        optionA: "Eyesight",
        optionB: "Hair",
        optionC: "Teeth",
        correctAnswer: "Eyesight",
      }),
      shuffleOptions({
        question: "Wheat and rice are examples of ______.",
        optionA: "Cereals",
        optionB: "Fruits",
        optionC: "Pulses",
        correctAnswer: "Cereals",
      }),
      shuffleOptions({
        question: "Pulses are obtained from ______.",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "Rocks",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "We get eggs from ______.",
        optionA: "Duck",
        optionB: "Goat",
        optionC: "Buffalo",
        correctAnswer: "Duck",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Milk is known as complete food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should always eat junk food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Green vegetables keep us healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We get milk from horse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Food makes us strong and healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should never wash hands before eating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We eat three meals a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Carrots improve our eyesight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We get food only from plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should not waste food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
