export const chapter = "Chapter - 1: Plant More Trees ";
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
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What do trees provide to humans?",
            optionA: "Fruits and fresh air",
            optionB: "Vegetables and sunlight",
            optionC: "Fish and water",
            correctAnswer: "a) Fruits and fresh air",
          },
          {
            question:
              "In addition to fruits and fresh air, what else do trees give us?",
            optionA: "Nuts and wood",
            optionB: "Rocks and metals",
            optionC: "Plastic and electronics",
            correctAnswer: "a) Nuts and wood",
          },
          {
            question: "What role do trees play in providing shelter?",
            optionA: "They provide shelter to humans only",
            optionB: "They provide shelter to birds and animals",
            optionC: "They don't provide any shelter",
            correctAnswer: "b) They provide shelter to birds and animals",
          },
          {
            question:
              "How do trees contribute to keeping our surroundings clean and green?",
            optionA: "By producing pollution",
            optionB: "By absorbing carbon dioxide and releasing oxygen",
            optionC: "By cutting down trees regularly",
            correctAnswer:
              "b) By absorbing carbon dioxide and releasing oxygen",
          },
          {
            question: "What action is recommended to make surroundings green?",
            optionA: "Remove all trees",
            optionB: "Paint buildings green",
            optionC: "Plant more trees",
            correctAnswer: "c) Plant more trees",
          },
          {
            question:
              "Apart from fruits, what other product can be derived from trees?",
            optionA: "Electronics",
            optionB: "Plastics",
            optionC: "Paper",
            correctAnswer: "c) Paper",
          },
          {
            question:
              "What is one of the benefits of trees mentioned in the text?",
            optionA: "Producing plastic",
            optionB: "Making surroundings dirty",
            optionC: "Making surroundings clean",
            correctAnswer: "c) Making surroundings clean",
          },
          {
            question:
              "Which of the following is NOT mentioned as something trees give us?",
            optionA: "Fresh air",
            optionB: "Sunlight",
            optionC: "Minerals",
            correctAnswer: "c) Minerals",
          },
          {
            question: "What is the main reason given for planting trees?",
            optionA: "To make surroundings noisy",
            optionB: "To make surroundings green",
            optionC: "To reduce the number of trees",
            correctAnswer: "b) To make surroundings green",
          },
          {
            question:
              "What natural resource do trees provide that is essential for human life?",
            optionA: "Coal",
            optionB: "Oxygen",
            optionC: "Plastic",
            correctAnswer: "b) Oxygen",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        questions: [
          {
            question:
              "Trees provide us with various resources such as _______, fresh air, nuts, wood, and paper.",
            optionA: "Fruits",
            optionB: "Vegetables",
            optionC: "Stones",
            correctAnswer: "Fruits",
          },
          {
            question: "Trees offer shelter to _______, and animals.",
            optionA: "Cars",
            optionB: "Birds",
            optionC: "Rockets",
            correctAnswer: "Birds",
          },
          {
            question:
              "Trees play a vital role in making our surroundings ______ and green.",
            optionA: "Yellow",
            optionB: "Brown",
            optionC: "Clean",
            correctAnswer: "Clean",
          },
          {
            question:
              "To contribute to a greener environment, we should ______ more trees.",
            optionA: "Cut down",
            optionB: "Plant",
            optionC: "Paint",
            correctAnswer: "Plant",
          },
          {
            question: "One of the resources obtained from trees is ______.",
            optionA: "Gold",
            optionB: "Silver",
            optionC: "Wood",
            correctAnswer: "Wood",
          },
          {
            question: "Trees are our best friends because they give us ______.",
            optionA: "Candy",
            optionB: "Hugs",
            optionC: "Fresh air",
            correctAnswer: "Fresh air",
          },
          {
            question: "Trees also provide ______ to birds and animals.",
            optionA: "Computers",
            optionB: "Housing",
            optionC: "Submarines",
            correctAnswer: "Housing",
          },
          {
            question: "Trees are beneficial in keeping our environment ______.",
            optionA: "Noisy",
            optionB: "Clean",
            optionC: "Crowded",
            correctAnswer: "Clean",
          },
          {
            question: "Besides fresh air, trees give us ______.",
            optionA: "Ice cream",
            optionB: "Nuts",
            optionC: "Television",
            correctAnswer: "Nuts",
          },
          {
            question:
              "Trees are important because they contribute to a ______ environment.",
            optionA: "Grey",
            optionB: "Blue",
            optionC: "Green",
            correctAnswer: "Green",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "Trees provide us with fresh air, nuts, wood, and paper.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "True",
          },
          {
            question: "Trees only give shelter to birds, not animals.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "Trees play a role in making our surroundings dirty and brown.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "To contribute to a greener environment, we should cut down more trees.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question: "One of the resources obtained from trees is plastic.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question: "Trees are our best friends because they give us hugs.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question: "Trees provide computers to birds and animals.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question: "Trees contribute to a noisy environment.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question: "Besides fresh air, trees give us ice cream.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "Trees are important because they contribute to a blue environment.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
