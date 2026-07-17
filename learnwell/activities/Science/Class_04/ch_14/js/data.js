export const chapter = "Chapter - 14: The Waste";
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
        question: "Which type of waste is produced in our homes?",
        optionA: "Industrial waste",
        optionB: "Domestic waste",
        optionC: "Agricultural waste",
        correctAnswer: "Domestic waste",
      }),
      shuffleOptions({
        question: "Which type of waste comes from factories?",
        optionA: "Municipal waste",
        optionB: "Industrial waste",
        optionC: "Domestic waste",
        correctAnswer: "Industrial waste",
      }),
      shuffleOptions({
        question: "Which type of waste is collected from roads and public places?",
        optionA: "Agricultural waste",
        optionB: "Municipal waste",
        optionC: "Domestic waste",
        correctAnswer: "Municipal waste",
      }),
      shuffleOptions({
        question: "Which waste comes from farms and poultry houses?",
        optionA: "Agricultural waste",
        optionB: "Industrial waste",
        optionC: "Domestic waste",
        correctAnswer: "Agricultural waste",
      }),
      shuffleOptions({
        question: "What kind of waste pollutes water and soil if not treated?",
        optionA: "Domestic waste",
        optionB: "Industrial waste",
        optionC: "Agricultural waste",
        correctAnswer: "Industrial waste",
      }),
      shuffleOptions({
        question: "Which bin is used for leftover food and vegetable peels?",
        optionA: "Blue bin",
        optionB: "Green bin",
        optionC: "Red bin",
        correctAnswer: "Green bin",
      }),
      shuffleOptions({
        question: "Which bin is used for cans and bottles?",
        optionA: "Green bin",
        optionB: "Blue bin",
        optionC: "Yellow bin",
        correctAnswer: "Blue bin",
      }),
      shuffleOptions({
        question: "Which of these causes air pollution?",
        optionA: "Factories and vehicles",
        optionB: "Parks and gardens",
        optionC: "Lakes and ponds",
        correctAnswer: "Factories and vehicles",
      }),
      shuffleOptions({
        question: "Which of the following means “use less”?",
        optionA: "Reuse",
        optionB: "Reduce",
        optionC: "Recycle",
        correctAnswer: "Reduce",
      }),
      shuffleOptions({
        question: "Which of the following means “use old things to make new goods”?",
        optionA: "Reduce",
        optionB: "Reuse",
        optionC: "Recycle",
        correctAnswer: "Recycle",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Any material which is discarded after use is called _______.",
        optionA: "Pollution",
        optionB: "Waste",
        optionC: "Soil",
        correctAnswer: "Waste",
      }),
      shuffleOptions({
        question: "_______ waste is produced in our houses.",
        optionA: "Domestic",
        optionB: "Industrial",
        optionC: "Municipal",
        correctAnswer: "Domestic",
      }),
      shuffleOptions({
        question: "_______ waste is collected from streets and parks.",
        optionA: "Municipal",
        optionB: "Industrial",
        optionC: "Agricultural",
        correctAnswer: "Municipal",
      }),
      shuffleOptions({
        question: "_______ waste is produced from farms and poultry houses.",
        optionA: "Agricultural",
        optionB: "Industrial",
        optionC: "Domestic",
        correctAnswer: "Agricultural",
      }),
      shuffleOptions({
        question: "Industrial waste contains harmful _______.",
        optionA: "Chemicals",
        optionB: "Food",
        optionC: "Paper",
        correctAnswer: "Chemicals",
      }),
      shuffleOptions({
        question: "The green bin is for _______ waste like food and peels.",
        optionA: "Wet",
        optionB: "Dry",
        optionC: "Metallic",
        correctAnswer: "Wet",
      }),
      shuffleOptions({
        question: "The blue bin is for _______ waste like cans and bottles.",
        optionA: "Dry",
        optionB: "Wet",
        optionC: "Kitchen",
        correctAnswer: "Dry",
      }),
      shuffleOptions({
        question: "Throwing waste in open areas pollutes the _______.",
        optionA: "Soil",
        optionB: "Sky",
        optionC: "Wind",
        correctAnswer: "Soil",
      }),
      shuffleOptions({
        question: "_______ means finding new ways to use things before throwing them.",
        optionA: "Reuse",
        optionB: "Reduce",
        optionC: "Recycle",
        correctAnswer: "Reuse",
      }),
      shuffleOptions({
        question: "We should follow the rule of _______ R’s to manage waste.",
        optionA: "3",
        optionB: "2",
        optionC: "4",
        correctAnswer: "3",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Waste is any material which is of no use.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Domestic waste is produced in factories.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Industrial waste is harmful to the environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Municipal waste comes from public places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Throwing waste in open areas keeps the surroundings clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Green bin is used for dry waste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Blue bin is used for wet waste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Burning plastic waste produces harmful smoke.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "“Reduce, Reuse and Recycle” are the 3Rs of waste management.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Composting helps to convert kitchen waste into manure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
