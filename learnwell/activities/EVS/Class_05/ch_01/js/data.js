export const chapter = "Chapter - 1: Family";
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
        question: "Who takes important decisions in Avi’s family?",
        optionA: "Only grandfather",
        optionB: "Everyone together",
        optionC: "Only father",
        correctAnswer: "Everyone together",
      }),
      shuffleOptions({
        question: "What does a family tree show?",
        optionA: "Family members and their relationships",
        optionB: "Animals in the forest",
        optionC: "Neighbours around the house",
        correctAnswer: "Family members and their relationships",
      }),
      shuffleOptions({
        question: "What is the basic unit of society?",
        optionA: "Family",
        optionB: "School",
        optionC: "City",
        correctAnswer: "Family",
      }),
      shuffleOptions({
        question: "Which factor mainly affects the family structure?",
        optionA: "Social, cultural and economic factors",
        optionB: "Festivals",
        optionC: "Hobbies",
        correctAnswer: "Social, cultural and economic factors",
      }),
      shuffleOptions({
        question: "Why do people migrate to cities?",
        optionA: "For better opportunities",
        optionB: "For picnics",
        optionC: "For holidays",
        correctAnswer: "For better opportunities",
      }),
      shuffleOptions({
        question: "Who are called migrants?",
        optionA: "People who move from one place to another for work",
        optionB: "People who never move",
        optionC: "People who travel for fun",
        correctAnswer: "People who move from one place to another for work",
      }),
      shuffleOptions({
        question: "What kind of family includes grandparents and other relatives?",
        optionA: "Joint family",
        optionB: "Nuclear family",
        optionC: "Small family",
        correctAnswer: "Joint family",
      }),
      shuffleOptions({
        question: "Why did Avi’s uncle visit India every three years?",
        optionA: "To meet his family",
        optionB: "To attend school",
        optionC: "To buy property",
        correctAnswer: "To meet his family",
      }),
      shuffleOptions({
        question: "Which disaster can cause people to migrate?",
        optionA: "Flood",
        optionB: "Spring season",
        optionC: "Rainbow",
        correctAnswer: "Flood",
      }),
      shuffleOptions({
        question: "Earlier, the son of a goldsmith became a ________.",
        optionA: "Goldsmith",
        optionB: "Farmer",
        optionC: "Teacher",
        correctAnswer: "Goldsmith",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A family is a group of people ________ to each other.",
        optionA: "related",
        optionB: "opposed",
        optionC: "separate",
        correctAnswer: "related",
      }),
      shuffleOptions({
        question: "A ________ family has only parents and children.",
        optionA: "nuclear",
        optionB: "joint",
        optionC: "large",
        correctAnswer: "nuclear",
      }),
      shuffleOptions({
        question: "A chart showing family relations is called a ________.",
        optionA: "family tree",
        optionB: "timetable",
        optionC: "map",
        correctAnswer: "family tree",
      }),
      shuffleOptions({
        question: "Rising property prices make joint families an ________ necessity.",
        optionA: "economic",
        optionB: "emotional",
        optionC: "cultural",
        correctAnswer: "economic",
      }),
      shuffleOptions({
        question: "People move to cities due to better ________.",
        optionA: "opportunities",
        optionB: "air",
        optionC: "holidays",
        correctAnswer: "opportunities",
      }),
      shuffleOptions({
        question: "The movement in search of a new beginning is called ________.",
        optionA: "migration",
        optionB: "vacation",
        optionC: "education",
        correctAnswer: "migration",
      }),
      shuffleOptions({
        question: "People working in government jobs migrate due to ________.",
        optionA: "transfers",
        optionB: "shopping",
        optionC: "festivals",
        correctAnswer: "transfers",
      }),
      shuffleOptions({
        question: "The process of living and working in cities is called ________.",
        optionA: "urbanisation",
        optionB: "industrialisation",
        optionC: "celebration",
        correctAnswer: "urbanisation",
      }),
      shuffleOptions({
        question: "Education has changed family ________ and ________.",
        optionA: "roles",
        optionB: "values",
        optionC: "numbers",
        correctAnswer: "values",
      }),
      shuffleOptions({
        question: "People who move to other places for work are called ________.",
        optionA: "migrants",
        optionB: "tourists",
        optionC: "teachers",
        correctAnswer: "migrants",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Family is the basic unit of society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Migration is always permanent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Urbanisation means moving from villages to cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Joint families consist only of parents and children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A family tree shows many generations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earlier, the head of the family alone took all decisions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Economic factors can affect the family structure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People may migrate due to floods and earthquakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Education has no role in changing family values.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In modern times, families make decisions with mutual consent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
