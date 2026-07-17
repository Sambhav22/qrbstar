export const chapter = "Chapter - 13: Plants Around Us";
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
        question: "Which plant grows in water and has large beautiful flowers?",
        optionA: "Rose",
        optionB: "Lily",
        optionC: "Mint",
        correctAnswer: "Lily",
      }),
      shuffleOptions({
        question: "Which plant has a tall strong stem and stands straight?",
        optionA: "Tulsi",
        optionB: "Mango tree",
        optionC: "Cotton",
        correctAnswer: "Mango tree",
      }),
      shuffleOptions({
        question: "Which plant is bushy and small in size?",
        optionA: "Coconut",
        optionB: "Shrub like jasmine",
        optionC: "Pea plant",
        correctAnswer: "Shrub like jasmine",
      }),
      shuffleOptions({
        question: "Which plant is known to climb with support?",
        optionA: "Grapevine",
        optionB: "Neem",
        optionC: "Tulsi",
        correctAnswer: "Grapevine",
      }),
      shuffleOptions({
        question: "Which plant is very small and has soft stems?",
        optionA: "Banyan",
        optionB: "Herb like coriander",
        optionC: "Coconut",
        correctAnswer: "Herb like coriander",
      }),
      shuffleOptions({
        question: "Which tree has no branches?",
        optionA: "Palm tree",
        optionB: "Rose",
        optionC: "Mint",
        correctAnswer: "Palm tree",
      }),
      shuffleOptions({
        question: "Which plant is commonly grown at home for its medicinal use?",
        optionA: "Tulsi plant",
        optionB: "Lily",
        optionC: "Cotton",
        correctAnswer: "Tulsi plant",
      }),
      shuffleOptions({
        question: "Which plant is a woody, medium-height plant?",
        optionA: "Shrub like cotton",
        optionB: "Coconut",
        optionC: "Lotus",
        correctAnswer: "Shrub like cotton",
      }),
      shuffleOptions({
        question: "Which plant needs support to grow along walls?",
        optionA: "Money plant",
        optionB: "Jasmine",
        optionC: "Mango",
        correctAnswer: "Money plant",
      }),
      shuffleOptions({
        question: "Which group of plants helps to keep the air fresh?",
        optionA: "Chairs",
        optionB: "Plants and trees around us",
        optionC: "Toys",
        correctAnswer: "Plants and trees around us",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Palm and coconut trees usually have no ________.",
        optionA: "leaves",
        optionB: "branches",
        optionC: "flowers",
        correctAnswer: "branches",
      }),
      shuffleOptions({
        question: "Tulsi and mint are examples of ________.",
        optionA: "herbs",
        optionB: "shrubs",
        optionC: "trees",
        correctAnswer: "herbs",
      }),
      shuffleOptions({
        question: "Cotton and jasmine are ________ plants.",
        optionA: "climbers",
        optionB: "shrubs",
        optionC: "herbs",
        correctAnswer: "shrubs",
      }),
      shuffleOptions({
        question: "Lily grows in ________.",
        optionA: "sand",
        optionB: "forests",
        optionC: "water",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Money plant climbs with the help of ________.",
        optionA: "support",
        optionB: "fruits",
        optionC: "roots",
        correctAnswer: "support",
      }),
      shuffleOptions({
        question: "Banyan and mango are ________ plants.",
        optionA: "herbs",
        optionB: "trees",
        optionC: "shrubs",
        correctAnswer: "trees",
      }),
      shuffleOptions({
        question: "Coriander has ________ stems.",
        optionA: "soft",
        optionB: "thick",
        optionC: "no",
        correctAnswer: "soft",
      }),
      shuffleOptions({
        question: "Plants help to make the air ________.",
        optionA: "dirty",
        optionB: "fresh",
        optionC: "warm",
        correctAnswer: "fresh",
      }),
      shuffleOptions({
        question: "We should water plants ________.",
        optionA: "daily",
        optionB: "sometimes",
        optionC: "never",
        correctAnswer: "daily",
      }),
      shuffleOptions({
        question: "Manure is added to the soil to help plants ________.",
        optionA: "sleep",
        optionB: "grow better",
        optionC: "float",
        correctAnswer: "grow better",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Coconut tree is a tall plant with a strong trunk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mint is a small plant with soft stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shrubs are very tall plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lotus grows on dry land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Money plant needs support to grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Trees make our surroundings healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rose is a herb.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Grapevine can climb on walls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adding manure helps plants grow well.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Herbs have very hard stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
