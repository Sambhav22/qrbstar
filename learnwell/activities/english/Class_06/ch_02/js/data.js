export const chapter = "Chapter - 2: Federigo’s Falcon";
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
        question: "Where did the story take place?",
        optionA: "Rome",
        optionB: "Florence",
        optionC: "Venice",
        correctAnswer: "Florence",
      }),
      shuffleOptions({
        question: "What was Federigo famous for besides wealth?",
        optionA: "Music",
        optionB: "Courtliness",
        optionC: "Medicine",
        correctAnswer: "Courtliness",
      }),
      shuffleOptions({
        question: "Whose death made Monna Giovanna a widow?",
        optionA: "Her brother",
        optionB: "Her husband",
        optionC: "Her father",
        correctAnswer: "Her husband",
      }),
      shuffleOptions({
        question: "Where did Monna Giovanna shift after her husband’s death?",
        optionA: "City mansion",
        optionB: "Countryside near Campi",
        optionC: "Rome",
        correctAnswer: "Countryside near Campi",
      }),
      shuffleOptions({
        question: "The boy admired Federigo’s –",
        optionA: "Dog",
        optionB: "Falcon",
        optionC: "Horse",
        correctAnswer: "Falcon",
      }),
      shuffleOptions({
        question: "What did Monna Giovanna promise her son?",
        optionA: "She would buy him toys",
        optionB: "She would get Federigo’s falcon",
        optionC: "She would take him to Rome",
        correctAnswer: "She would get Federigo’s falcon",
      }),
      shuffleOptions({
        question: "What did Federigo use to cover the dining table?",
        optionA: "Red cloth",
        optionB: "Whitest tablecloth",
        optionC: "Woollen cloth",
        correctAnswer: "Whitest tablecloth",
      }),
      shuffleOptions({
        question: "What proof did Federigo show that he had cooked the falcon?",
        optionA: "Bones",
        optionB: "Feathers, feet, beak",
        optionC: "Ashes",
        correctAnswer: "Feathers, feet, beak",
      }),
      shuffleOptions({
        question: "What happened to the boy after not getting the falcon?",
        optionA: "He recovered",
        optionB: "He died",
        optionC: "He left for Florence",
        correctAnswer: "He died",
      }),
      shuffleOptions({
        question: "How did Federigo manage finances after marriage?",
        optionA: "Carelessly",
        optionB: "With prudence",
        optionC: "Recklessly",
        correctAnswer: "With prudence",
      }),
    ]),
  };
}
export var activityData;

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Federigo fell in love with ______.",
        optionA: "Monna Lisa",
        optionB: "Monna Giovanna",
        optionC: "Monna Clara",
        correctAnswer: "Monna Giovanna",
      }),
      shuffleOptions({
        question: "Federigo lost all his wealth by ______.",
        optionA: "saving wisely",
        optionB: "spending extravagantly",
        optionC: "farming",
        correctAnswer: "spending extravagantly",
      }),
      shuffleOptions({
        question: "Monna Giovanna went to the ______ with her son after becoming a widow.",
        optionA: "countryside",
        optionB: "market",
        optionC: "city",
        correctAnswer: "countryside",
      }),
      shuffleOptions({
        question: "The boy admired birds and ______.",
        optionA: "dogs",
        optionB: "cats",
        optionC: "sheep",
        correctAnswer: "dogs",
      }),
      shuffleOptions({
        question: "Federigo wrung the neck of his ______ to cook for Monna Giovanna.",
        optionA: "Falcon",
        optionB: "Hen",
        optionC: "Duck",
        correctAnswer: "Falcon",
      }),
      shuffleOptions({
        question: "Federigo’s falcon was considered among the best in the ______.",
        optionA: "country",
        optionB: "world",
        optionC: "kingdom",
        correctAnswer: "world",
      }),
      shuffleOptions({
        question: "Monna Giovanna visited Federigo’s house with her ______.",
        optionA: "servant",
        optionB: "friend",
        optionC: "son",
        correctAnswer: "friend",
      }),
      shuffleOptions({
        question: "Federigo cursed himself because he had wasted all his ______.",
        optionA: "wealth",
        optionB: "land",
        optionC: "cattle",
        correctAnswer: "wealth",
      }),
      shuffleOptions({
        question: "Monna Giovanna’s brothers mocked her decision to marry ______.",
        optionA: "A rich nobleman",
        optionB: "Federigo",
        optionC: "A king",
        correctAnswer: "Federigo",
      }),
      shuffleOptions({
        question: "The story “Federigo’s Falcon” was written by ______.",
        optionA: "William Shakespeare",
        optionB: "Giovanni Boccaccio",
        optionC: "Homer",
        correctAnswer: "Giovanni Boccaccio",
      }),
    ]),
  };
}
export var activityData;

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Federigo lived lavishly in Campi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Monna Giovanna’s son directly asked Federigo for the falcon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Federigo killed the falcon to serve as a meal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Monna Giovanna was touched by Federigo’s generosity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The boy recovered after receiving the falcon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Monna Giovanna chose Federigo as her second husband.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Federigo had many servants in his countryside home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Monna Giovanna initially refused to marry again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Federigo became rich again after marriage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story reflects themes of love, sacrifice, and irony.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
export var activityData;
