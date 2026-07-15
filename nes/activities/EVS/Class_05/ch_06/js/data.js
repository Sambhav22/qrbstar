export const chapter = "Chapter -6: Forests and Forest Life";
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
        [
            {
                "question": "What is the primary function of forests?",
                "optionA": "Maintain ecological balance",
                "optionB": "Provide housing for humans",
                "optionC": "Increase pollution",
                "correctAnswer": "Maintain ecological balance"
            },
            {
                "question": "Which of the following is NOT a function of forests?",
                "optionA": "Help in purification of air",
                "optionB": "Decrease the amount of rainfall on Earth",
                "optionC": "Prevent soil erosion",
                "correctAnswer": "Decrease the amount of rainfall on Earth"
            },
            {
                "question": "Who are the people who live in or near forests and are dependent on them for sustenance?",
                "optionA": "Farmers",
                "optionB": "Tribal people",
                "optionC": "Industrialists",
                "correctAnswer": "Tribal people"
            },
            {
                "question": "What is the farming method practiced by many tribal people, involving cutting or burning trees to clear land for crop production?",
                "optionA": "Slash-and-burn",
                "optionB": "Terrace farming",
                "optionC": "Hydroponics",
                "correctAnswer": "Slash-and-burn"
            },
            {
                "question": "Which tribe is known for their occupation in tea plantation and their craftsmanship with bamboo?",
                "optionA": "Bodos",
                "optionB": "Gonds",
                "optionC": "Mundas",
                "correctAnswer": "Bodos"
            },
            {
                "question": "What activity involves recognising and gathering abundant forest plants yielding various products for daily needs?",
                "optionA": "Farming",
                "optionB": "Hunting",
                "optionC": "Gathering forest produce",
                "correctAnswer": "Gathering forest produce"
            },
            {
                "question": "What is the term for the removal or destruction of large areas of forests?",
                "optionA": "Reforestation",
                "optionB": "Deforestation",
                "optionC": "Conservation",
                "correctAnswer": "Deforestation"
            },
            {
                "question": "Which of the following is NOT a cause of deforestation?",
                "optionA": "Farming",
                "optionB": "Recycling",
                "optionC": "Mining",
                "correctAnswer": "Recycling"
            },
            {
                "question": "What is the purpose of social forestry?",
                "optionA": "Increase pollution",
                "optionB": "Protect and manage forests by planting more trees",
                "optionC": "Destroy natural habitats",
                "correctAnswer": "Protect and manage forests by planting more trees"
            },
            {
                "question": "What do national parks and sanctuaries aim to provide?",
                "optionA": "Natural habitat and protection to wildlife",
                "optionB": "Urban housing",
                "optionC": "Industrial development zones",
                "correctAnswer": "Natural habitat and protection to wildlife"
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
        [
            {
                "question": "_________ is a large area of land densely covered with trees and bushes.",
                "optionA": "Desert",
                "optionB": "Forest",
                "optionC": "Ocean",
                "correctAnswer": "Forest"
            },
            {
                "question": "Adivasis or tribal are the people who live in or near the forests and are totally dependent on forests for their sustenance. Many of them practise _______ farming or slash-and-burn.",
                "optionA": "Terrace",
                "optionB": "Swidden",
                "optionC": "Hydroponic",
                "correctAnswer": "Swidden"
            },
            {
                "question": "Many tribals move in small groups and _______ animals for their food.",
                "optionA": "Protect",
                "optionB": "Hunt",
                "optionC": "Domesticate",
                "correctAnswer": "Hunt"
            },
            {
                "question": "_________ involves recognising and gathering abundant forest plants yielding many products like oils, gums, and medicines.",
                "optionA": "Farming",
                "optionB": "Hunting",
                "optionC": "Gathering forest produce",
                "correctAnswer": "Gathering forest produce"
            },
            {
                "question": "Deforestation is the removal or destruction of large areas of _______.",
                "optionA": "Deserts",
                "optionB": "Forests",
                "optionC": "Mountains",
                "correctAnswer": "Forests"
            },
            {
                "question": "Farming, grazing of livestock, and mining are some of the causes of _______.",
                "optionA": "Reforestation",
                "optionB": "Deforestation",
                "optionC": "Conservation",
                "correctAnswer": "Deforestation"
            },
            {
                "question": "Recycling materials like paper, cloth, and glass is a recommended step to prevent _______.",
                "optionA": "Reforestation",
                "optionB": "Deforestation",
                "optionC": "Conservation",
                "correctAnswer": "Deforestation"
            },
            {
                "question": "_________ involves the protection and management of forests by planting more trees on barren and deforested lands.",
                "optionA": "Social forestry",
                "optionB": "Deforestation",
                "optionC": "Reforestation",
                "correctAnswer": "Social forestry"
            },
            {
                "question": "National parks and sanctuaries aim to provide natural habitat and protection to _______.",
                "optionA": "Wildlife",
                "optionB": "Industrial development zones",
                "optionC": "Urban housing",
                "correctAnswer": "Wildlife"
            },
            {
                "question": "Forests help in purification of air and _______ of water.",
                "optionA": "Pollution",
                "optionB": "Contamination",
                "optionC": "Conservation",
                "correctAnswer": "Conservation"
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
        [
            {
                "question": "Forests support a large variety of life forms such as humans, animals, birds, etc.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Tribal people form about 8% of the Indian population.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Shifting cultivation is a farming method practiced by tribals involving the continuous use of the same plot of land.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Hunting animals is not a common practice among tribal people.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Gathering forest produce involves recognising and gathering abundant forest plants yielding various products for daily needs.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Deforestation refers to the protection and conservation of forests.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Farming, grazing of livestock, and mining are some of the causes of deforestation.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Recycling materials like paper, cloth, and glass is a recommended step to prevent deforestation.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Social forestry involves the protection and management of forests by planting more trees on barren lands.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "National parks and sanctuaries do not aim to provide natural habitat and protection to wildlife.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            }
        ]
        

    ],
  };
}

export var activityData;
