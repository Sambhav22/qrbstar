export const chapter = "Chapter - 12: Our National Flag";
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
  const optionsArray = [optionA, optionB, optionC];

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];
  object.optionC = optionsArray[2];

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What is the name of our National Flag?",
        optionA: "Rainbow",
        optionB: "Tricolour",
        optionC: "Map",
        correctAnswer: "Tricolour",
      }),
      shuffleOptions({
        question: "How many stripes does the Tricolour have?",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "What colour is at the top of the flag?",
        optionA: "Green",
        optionB: "White",
        optionC: "Saffron",
        correctAnswer: "Saffron",
      }),
      shuffleOptions({
        question: "What is present in the middle stripe of the flag?",
        optionA: "Moon",
        optionB: "Ashok Chakra",
        optionC: "Star",
        correctAnswer: "Ashok Chakra",
      }),
      shuffleOptions({
        question: "How many spokes are there in the Ashok Chakra?",
        optionA: "18",
        optionB: "24",
        optionC: "30",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "The green colour stands for –",
        optionA: "Anger",
        optionB: "Wealth",
        optionC: "Harmony",
        correctAnswer: "Harmony",
      }),
      shuffleOptions({
        question: "The white colour represents –",
        optionA: "Noise",
        optionB: "Peace",
        optionC: "Power",
        correctAnswer: "Peace",
      }),
      shuffleOptions({
        question: "What does the saffron colour symbolise?",
        optionA: "Courage",
        optionB: "Purity",
        optionC: "Music",
        correctAnswer: "Courage",
      }),
      shuffleOptions({
        question: "When is the National Anthem sung?",
        optionA: "When eating",
        optionB: "When the flag is hoisted",
        optionC: "When dancing",
        correctAnswer: "When the flag is hoisted",
      }),
      shuffleOptions({
        question: "On which day can people hoist the flag at home?",
        optionA: "National Festivals",
        optionB: "Sports Day",
        optionC: "Exam Day",
        correctAnswer: "National Festivals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Our National Flag is called the _______.",
        optionA: "Banner",
        optionB: "Tricolour",
        optionC: "Curtain",
        correctAnswer: "Tricolour",
      }),
      shuffleOptions({
        question: "The white colour stands for _______.",
        optionA: "Peace",
        optionB: "Anger",
        optionC: "Money",
        correctAnswer: "Peace",
      }),
      shuffleOptions({
        question: "The green stripe is at the ______ of the flag.",
        optionA: "Top",
        optionB: "Middle",
        optionC: "Bottom",
        correctAnswer: "Bottom",
      }),
      shuffleOptions({
        question: "The ______ Chakra is in the centre of the flag.",
        optionA: "Sun",
        optionB: "Ashok",
        optionC: "Wheel",
        correctAnswer: "Ashok",
      }),
      shuffleOptions({
        question: "The Ashok Chakra has ______ spokes.",
        optionA: "24",
        optionB: "14",
        optionC: "20",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "The ratio of the National Flag is 2 to ______.",
        optionA: "3",
        optionB: "4",
        optionC: "2",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "The flag is a mark of our ______.",
        optionA: "Identity",
        optionB: "Sleep",
        optionC: "Colour",
        correctAnswer: "Identity",
      }),
      shuffleOptions({
        question: "We ______ the National Flag when it is hoisted.",
        optionA: "Dance",
        optionB: "Salute",
        optionC: "Wave",
        correctAnswer: "Salute",
      }),
      shuffleOptions({
        question: "The saffron colour teaches us ______.",
        optionA: "Anger",
        optionB: "Courage",
        optionC: "Running",
        correctAnswer: "Courage",
      }),
      shuffleOptions({
        question: "The flag is hoisted on ______ buildings.",
        optionA: "Government",
        optionB: "School",
        optionC: "Market",
        correctAnswer: "Government",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The National Flag is called the Tricolour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Tricolour has four colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The green colour is at the top.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The white stripe is in the middle of the flag.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ashok Chakra has 20 spokes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We hoist the flag only on birthdays.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The flag represents our honour and identity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People must salute the flag when it is hoisted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The flag's ratio is 3:2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Ashok Chakra is a symbol of piety and justice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;