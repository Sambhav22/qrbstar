export const chapter = "Chapter -7: Planet Around Us";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "What are big and tall plants called?",
            "optionA": "Shrubs",
            "optionB": "Trees",
            "optionC": "Herbs",
            "correctAnswer": "Trees"
        }),
      shuffleOptions({
            "question": "What is the stem of a tree called?",
            "optionA": "Branch",
            "optionB": "Trunk",
            "optionC": "Root",
            "correctAnswer": "Trunk"
        }),
      shuffleOptions({
            "question": "Which type of plants have thin and woody stems?",
            "optionA": "Shrubs",
            "optionB": "Herbs",
            "optionC": "Trees",
            "correctAnswer": "Shrubs"
        }),
      shuffleOptions({
            "question": "What is the color of a tree's trunk usually?",
            "optionA": "Green",
            "optionB": "Brown",
            "optionC": "White",
            "correctAnswer": "Brown"
        }),
      shuffleOptions({
            "question": "What problem arises when trees are cut down and soil washes away with rainwater?",
            "optionA": "Drought",
            "optionB": "Floods",
            "optionC": "Wildfires",
            "correctAnswer": "Floods"
        }),
      shuffleOptions({
            "question": "What do trees help in reducing when they are not cut down?",
            "optionA": "Water pollution",
            "optionB": "Air pollution",
            "optionC": "Noise pollution",
            "correctAnswer": "Air pollution"
        }),
      shuffleOptions({
            "question": "What should we do after planting trees to help them grow?",
            "optionA": "Ignore them",
            "optionB": "Water and manure them",
            "optionC": "Let weeds grow around them",
            "correctAnswer": "Water and manure them"
        }),
      shuffleOptions({
            "question": "Who owns the fruits, vegetables, and flowers grown in small lawns?",
            "optionA": "Local government",
            "optionB": "Neighbors",
            "optionC": "Family",
            "correctAnswer": "Family"
        }),
      shuffleOptions({
            "question": "What are plants that grow in forests without much care called?",
            "optionA": "Garden plants",
            "optionB": "Wild plants",
            "optionC": "Indoor plants",
            "correctAnswer": "Wild plants"
        }),
      shuffleOptions({
            "question": "What do forests provide to tribal people?",
            "optionA": "Books",
            "optionB": "Houses",
            "optionC": "Food and resources",
            "correctAnswer": "Food and resources"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Plants with thin and woody stems are called __________.",
            "optionA": "Trees",
            "optionB": "Shrubs",
            "optionC": "Herbs",
            "correctAnswer": "Shrubs"
        }),
      shuffleOptions({
            "question": "The stem of a tree is called __________.",
            "optionA": "Branch",
            "optionB": "Trunk",
            "optionC": "Root",
            "correctAnswer": "Trunk"
        }),
      shuffleOptions({
            "question": "Trees usually have a __________ trunk.",
            "optionA": "Green",
            "optionB": "Brown",
            "optionC": "White",
            "correctAnswer": "Brown"
        }),
      shuffleOptions({
            "question": "Cutting down trees causes __________ problems.",
            "optionA": "Drought",
            "optionB": "Floods",
            "optionC": "Wildfires",
            "correctAnswer": "Floods"
        }),
      shuffleOptions({
            "question": "Trees help in reducing __________ pollution.",
            "optionA": "Water",
            "optionB": "Air",
            "optionC": "Noise",
            "correctAnswer": "Air"
        }),
      shuffleOptions({
            "question": "After planting trees, we should provide them with water and __________.",
            "optionA": "Sunlight",
            "optionB": "Fertilizer",
            "optionC": "Manure",
            "correctAnswer": "Manure"
        }),
      shuffleOptions({
            "question": "The fruits, vegetables, and flowers grown in small lawns belong to the __________.",
            "optionA": "Local government",
            "optionB": "Neighbors",
            "optionC": "Family",
            "correctAnswer": "Family"
        }),
      shuffleOptions({
            "question": "Plants that grow in forests without much care are called __________ plants.",
            "optionA": "Garden",
            "optionB": "Wild",
            "optionC": "Indoor",
            "correctAnswer": "Wild"
        }),
      shuffleOptions({
            "question": "Forests provide food and resources to __________ people.",
            "optionA": "Bookstore",
            "optionB": "Tribal",
            "optionC": "City",
            "correctAnswer": "Tribal"
        }),
      shuffleOptions({
            "question": "Plants give us oxygen and take in __________ dioxide.",
            "optionA": "Hydrogen",
            "optionB": "Oxygen",
            "optionC": "Carbon",
            "correctAnswer": "Carbon"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Plants with thin and woody stems are called __________.",
            "optionA": "Trees",
            "optionB": "Shrubs",
            "optionC": "Herbs",
            "correctAnswer": "Shrubs"
        }),
      shuffleOptions({
            "question": "The stem of a tree is called __________.",
            "optionA": "Branch",
            "optionB": "Trunk",
            "optionC": "Root",
            "correctAnswer": "Trunk"
        }),
      shuffleOptions({
            "question": "Trees usually have a __________ trunk.",
            "optionA": "Green",
            "optionB": "Brown",
            "optionC": "White",
            "correctAnswer": "Brown"
        }),
      shuffleOptions({
            "question": "Cutting down trees causes __________ problems.",
            "optionA": "Drought",
            "optionB": "Floods",
            "optionC": "Wildfires",
            "correctAnswer": "Floods"
        }),
      shuffleOptions({
            "question": "Trees help in reducing __________ pollution.",
            "optionA": "Water",
            "optionB": "Air",
            "optionC": "Noise",
            "correctAnswer": "Air"
        }),
      shuffleOptions({
            "question": "After planting trees, we should provide them with water and __________.",
            "optionA": "Sunlight",
            "optionB": "Fertilizer",
            "optionC": "Manure",
            "correctAnswer": "Manure"
        }),
      shuffleOptions({
            "question": "The fruits, vegetables, and flowers grown in small lawns belong to the __________.",
            "optionA": "Local government",
            "optionB": "Neighbors",
            "optionC": "Family",
            "correctAnswer": "Family"
        }),
      shuffleOptions({
            "question": "Plants that grow in forests without much care are called __________ plants.",
            "optionA": "Garden",
            "optionB": "Wild",
            "optionC": "Indoor",
            "correctAnswer": "Wild"
        }),
      shuffleOptions({
            "question": "Forests provide food and resources to __________ people.",
            "optionA": "Bookstore",
            "optionB": "Tribal",
            "optionC": "City",
            "correctAnswer": "Tribal"
        }),
      shuffleOptions({
            "question": "Plants give us oxygen and take in __________ dioxide.",
            "optionA": "Hydrogen",
            "optionB": "Oxygen",
            "optionC": "Carbon",
            "correctAnswer": "Carbon"
        }
    ],

    ],
  };
}

export var activityData;
