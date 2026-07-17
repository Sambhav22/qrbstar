export const chapter = "Chapter - 13: Houses – Then and Now";
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
        question: "What protects us from heat, rain and cold?",
        optionA: "Park",
        optionB: "House",
        optionC: "School",
        correctAnswer: "House",
      }),
      shuffleOptions({
        question: "Who built the havelis in olden times?",
        optionA: "Labourers",
        optionB: "Zamindars",
        optionC: "Farmers",
        correctAnswer: "Zamindars",
      }),
      shuffleOptions({
        question: "What were the roofs of huts generally made of?",
        optionA: "Thatch",
        optionB: "Plastic",
        optionC: "Cement",
        correctAnswer: "Thatch",
      }),
      shuffleOptions({
        question: "Which material is not used in modern house construction?",
        optionA: "Cement",
        optionB: "Bricks",
        optionC: "Cowdung",
        correctAnswer: "Cowdung",
      }),
      shuffleOptions({
        question: "In which type of area are multistoreyed buildings mostly found?",
        optionA: "Urban areas",
        optionB: "Rural areas",
        optionC: "Forest areas",
        correctAnswer: "Urban areas",
      }),
      shuffleOptions({
        question: "Which type of house is made of snow?",
        optionA: "Caravan",
        optionB: "Igloo",
        optionC: "Tent",
        correctAnswer: "Igloo",
      }),
      shuffleOptions({
        question: "What do people in slums usually lack?",
        optionA: "Clean drinking water",
        optionB: "Gold",
        optionC: "Computers",
        correctAnswer: "Clean drinking water",
      }),
      shuffleOptions({
        question: "Who in the story moved to Mumbai in 2000 for a better life?",
        optionA: "Mr Shankar",
        optionB: "Mr Verma",
        optionC: "Mr Rao",
        correctAnswer: "Mr Shankar",
      }),
      shuffleOptions({
        question: "Which place in Mumbai is the third largest slum in the world?",
        optionA: "Dharavi",
        optionB: "Andheri",
        optionC: "Bandra",
        correctAnswer: "Dharavi",
      }),
      shuffleOptions({
        question: "What do we call a moving or mobile house?",
        optionA: "Tent",
        optionB: "Caravan",
        optionC: "Hut",
        correctAnswer: "Caravan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A house gives us ______ from bad weather.",
        optionA: "Joy",
        optionB: "Shelter",
        optionC: "Food",
        correctAnswer: "Shelter",
      }),
      shuffleOptions({
        question: "Havelis were built with carved stones and big ______.",
        optionA: "Courtyards",
        optionB: "Gardens",
        optionC: "Doors",
        correctAnswer: "Courtyards",
      }),
      shuffleOptions({
        question: "The walls of huts were plastered with mud and ______.",
        optionA: "Clay",
        optionB: "Cowdung",
        optionC: "Paint",
        correctAnswer: "Cowdung",
      }),
      shuffleOptions({
        question: "People ______ to cities in search of better living.",
        optionA: "Travel",
        optionB: "Migrate",
        optionC: "Invite",
        correctAnswer: "Migrate",
      }),
      shuffleOptions({
        question: "Modern houses are built using bricks, cement and ______.",
        optionA: "Iron",
        optionB: "Paper",
        optionC: "Bamboo",
        correctAnswer: "Iron",
      }),
      shuffleOptions({
        question: "Slums lack basic amenities such as clean ______ water.",
        optionA: "Drinking",
        optionB: "Hot",
        optionC: "River",
        correctAnswer: "Drinking",
      }),
      shuffleOptions({
        question: "Huts are ______ houses made of mud and straw.",
        optionA: "Temporary",
        optionB: "Permanent",
        optionC: "Luxurious",
        correctAnswer: "Temporary",
      }),
      shuffleOptions({
        question: "The roofs of huts were often made up of ______.",
        optionA: "Thatch",
        optionB: "Cement",
        optionC: "Glass",
        correctAnswer: "Thatch",
      }),
      shuffleOptions({
        question: "Havelis belonged to the ______ people of society.",
        optionA: "Poor",
        optionB: "Rich",
        optionC: "Working",
        correctAnswer: "Rich",
      }),
      shuffleOptions({
        question: "Mr Shankar made his jhuggi using bricks, tirpaal and ______ sticks.",
        optionA: "Iron",
        optionB: "Wooden",
        optionC: "Plastic",
        correctAnswer: "Wooden",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Houses in olden times were made of bricks and cement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Havelis had big airy rooms and courtyards.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Modern houses have proper sanitation facilities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Slums are clean and well-planned residential areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A tent is a temporary house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People migrate to villages for higher education.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mr Shankar lived comfortably in a bungalow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Multistoreyed buildings are common in urban areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dharavi in Mumbai is the third largest slum in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A house provides safety from wild animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
