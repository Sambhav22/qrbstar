export const chapter = "Chapter -2: Animal and Their Masters";
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
            "question": "What are examples of pucca houses?",
            "optionA": "Thatched cottages and farm houses",
            "optionB": "Bungalows and havelis",
            "optionC": "Apartments and flats",
            "correctAnswer": "Apartments and flats"
        }),
      shuffleOptions({
            "question": "What materials were commonly used to build houses in olden times?",
            "optionA": "Bricks, cement, and steel",
            "optionB": "Limestone, wood, and stone chips",
            "optionC": "Cement, concrete, and glass",
            "correctAnswer": "Limestone, wood, and stone chips"
        }),
      shuffleOptions({
            "question": "Where do people who are forced to leave their own shelter due to poverty often end up living?",
            "optionA": "In apartments",
            "optionB": "In slums or on footpath",
            "optionC": "In small cottages",
            "correctAnswer": "In slums or on footpath"
        }),
      shuffleOptions({
            "question": "What is Dharavi in Mumbai known as?",
            "optionA": "The first largest slum in Asia",
            "optionB": "The third largest slum in Asia",
            "optionC": "The largest slum in the world",
            "correctAnswer": "The third largest slum in the world"
        }),
      shuffleOptions({
            "question": "What was a common feature of houses in olden days?",
            "optionA": "Large open spaces",
            "optionB": "Small area",
            "optionC": "Advanced technology",
            "correctAnswer": "Large open spaces"
        }),
      shuffleOptions({
            "question": "Which materials are commonly used to build houses in modern times?",
            "optionA": "Mud and wood",
            "optionB": "Bricks and steel",
            "optionC": "Cement and glass",
            "correctAnswer": "Cement and glass"
        }),
      shuffleOptions({
            "question": "What has advanced technology helped achieve in modern houses?",
            "optionA": "Decrease in population",
            "optionB": "Smaller area",
            "optionC": "More facilities",
            "correctAnswer": "More facilities"
        }),
      shuffleOptions({
            "question": "What did people in olden days prefer to have in their houses for family gatherings?",
            "optionA": "Common bathrooms",
            "optionB": "Verandah",
            "optionC": "Bricks and mud",
            "correctAnswer": "Verandah"
        }),
      shuffleOptions({
            "question": "What is a common issue faced by people living in slums?",
            "optionA": "Lack of clean drinking water",
            "optionB": "Strong houses",
            "optionC": "Urban areas",
            "correctAnswer": "Lack of clean drinking water"
        }),
      shuffleOptions({
            "question": "What is a characteristic of modern houses regarding damage from heavy rain or storm?",
            "optionA": "Easily damaged",
            "optionB": "Strong and resistant",
            "optionC": "Made with mud and wood",
            "correctAnswer": "Strong and resistant"
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
            "question": "Beautiful bungalow with modern architectural design is made up of ________, cement, steel, marbles, tiles etc.",
            "optionA": "Limestone",
            "optionB": "Bricks",
            "optionC": "Concrete",
            "correctAnswer": "Bricks"
        }),
      shuffleOptions({
            "question": "Small thatched cottages, farm houses, and havelis were constructed using ________, wood, stone chips, and mud bricks.",
            "optionA": "Cement",
            "optionB": "Limestone",
            "optionC": "Stone chips",
            "correctAnswer": "Limestone"
        }),
      shuffleOptions({
            "question": "People forced to leave their own shelter due to poverty often end up living in ________ or on footpath.",
            "optionA": "Bungalows",
            "optionB": "Slums",
            "optionC": "Apartments",
            "correctAnswer": "Slums"
        }),
      shuffleOptions({
            "question": "Dharavi in Mumbai is known as the ________ largest slum in the world.",
            "optionA": "First",
            "optionB": "Second",
            "optionC": "Third",
            "correctAnswer": "Third"
        }),
      shuffleOptions({
            "question": "In olden days, houses had large open spaces called ________, where family members sat together in the evening.",
            "optionA": "Common bathrooms",
            "optionB": "Verandahs",
            "optionC": "Kitchens",
            "correctAnswer": "Verandahs"
        }),
      shuffleOptions({
            "question": "Modern houses are commonly built using ________ and glass.",
            "optionA": "Mud",
            "optionB": "Bricks",
            "optionC": "Cement",
            "correctAnswer": "Cement"
        }),
      shuffleOptions({
            "question": "Advanced technology has enabled modern houses to have ________ facilities than earlier.",
            "optionA": "Fewer",
            "optionB": "More",
            "optionC": "Similar",
            "correctAnswer": "More"
        }),
      shuffleOptions({
            "question": "People in olden days preferred to have ________ in their houses for family gatherings.",
            "optionA": "Common bathrooms",
            "optionB": "Verandahs",
            "optionC": "Kitchens",
            "correctAnswer": "Verandahs"
        }),
      shuffleOptions({
            "question": "A common issue faced by people living in slums is the lack of ________.",
            "optionA": "Strong houses",
            "optionB": "Urban areas",
            "optionC": "Clean drinking water",
            "correctAnswer": "Clean drinking water"
        }),
      shuffleOptions({
            "question": "Modern houses are characterized by being ________ and resistant to damage from heavy rain or storm.",
            "optionA": "Easily damaged",
            "optionB": "Strong",
            "optionC": "Made with mud and wood",
            "correctAnswer": "Strong"
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
            question: "A family is a group of people who live together and are related to each other.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "True"
        }),
      shuffleOptions({
            "question": "Immediate family members include uncles, aunts, cousins, and nephews.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "In the olden times, houses were commonly built with bricks, cement, and steel.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Slums and footpaths are usually preferred living places for the wealthy.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Dharavi in Mumbai is the largest slum in Asia.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Houses in olden times had large open spaces called verandahs for family gatherings.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Modern houses are commonly built with materials like mud and wood.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Advanced technology has not contributed to providing more facilities in modern houses.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "People living in slums often face issues like lack of clean drinking water.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Modern houses are easily damaged by heavy rain or storm.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }
    ]
    
    ],
  };
}

export var activityData;
