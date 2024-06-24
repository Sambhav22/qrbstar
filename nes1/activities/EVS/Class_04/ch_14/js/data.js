export const chapter = "Chapter -14: Travel-A Fun";
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
            "question": "What is the primary mode of private transport mentioned in the text?",
            "optionA": "Scooters",
            "optionB": "Trains",
            "optionC": "Aeroplanes",
            "correctAnswer": "Scooters"
        }),
      shuffleOptions({
            "question": "Which side of a coin usually contains its value and the year of minting?",
            "optionA": "Head",
            "optionB": "Tail",
            "optionC": "Edge",
            "correctAnswer": "Head"
        }),
      shuffleOptions({
            "question": "What was the reason behind the demonetisation announced by the Government of India in 2016?",
            "optionA": "To introduce new currency notes",
            "optionB": "To withdraw 500 and 1000 rupee notes from circulation",
            "optionC": "To increase the value of rupee",
            "correctAnswer": "To withdraw 500 and 1000 rupee notes from circulation"
        }),
      shuffleOptions({
            "question": "What is imprinted on the front side of Indian currency notes to discourage the making of fake notes?",
            "optionA": "Watermark",
            "optionB": "Serial number",
            "optionC": "Signature of the Governor of Reserve Bank of India",
            "correctAnswer": "Watermark"
        }),
      shuffleOptions({
            "question": "Which animal mentioned in the text was commonly used for travelling in rural areas of India?",
            "optionA": "Camel",
            "optionB": "Elephant",
            "optionC": "Horse",
            "correctAnswer": "Horse"
        }),
      shuffleOptions({
            "question": "What is the value of the withdrawn 2000 rupee note?",
            "optionA": "200",
            "optionB": "500",
            "optionC": "2000",
            "correctAnswer": "2000"
        }),
      shuffleOptions({
            "question": "Which side of a bank note usually contains a picture of national importance?",
            "optionA": "Front side",
            "optionB": "Back side",
            "optionC": "Edge",
            "correctAnswer": "Back side"
        }),
      shuffleOptions({
            "question": "What is the primary mode of public transport mentioned in the text?",
            "optionA": "Cars",
            "optionB": "Trains",
            "optionC": "Scooters",
            "correctAnswer": "Trains"
        }),
      shuffleOptions({
            "question": "What is the currency of India called?",
            "optionA": "Dollar",
            "optionB": "Rupee",
            "optionC": "Euro",
            "correctAnswer": "Rupee"
        }),
      shuffleOptions({
            "question": "Which animal mentioned in the text was commonly used to draw carts or buggies?",
            "optionA": "Oxen",
            "optionB": "Horse",
            "optionC": "Camel",
            "correctAnswer": "Oxen"
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
            "question": "Coins are made of ___________.",
            "optionA": "Metal",
            "optionB": "Plastic",
            "optionC": "Paper",
            "correctAnswer": "Metal"
        }),
      shuffleOptions({
            "question": "Bank notes are made of special ___________.",
            "optionA": "Plastic",
            "optionB": "Metal",
            "optionC": "Paper",
            "correctAnswer": "Paper"
        }),
      shuffleOptions({
            "question": "The Indian currency is called ___________.",
            "optionA": "Dollar",
            "optionB": "Rupee",
            "optionC": "Euro",
            "correctAnswer": "Rupee"
        }),
      shuffleOptions({
            "question": "The value of the withdrawn 2000 rupee note is ___________.",
            "optionA": "200",
            "optionB": "500",
            "optionC": "2000",
            "correctAnswer": "2000"
        }),
      shuffleOptions({
            "question": "Coins have two sides: Head and ___________.",
            "optionA": "Tail",
            "optionB": "Edge",
            "optionC": "Face",
            "correctAnswer": "Tail"
        }),
      shuffleOptions({
            "question": "The side of a bank note that usually contains the picture of national importance is the ___________ side.",
            "optionA": "Front",
            "optionB": "Back",
            "optionC": "Top",
            "correctAnswer": "Back"
        }),
      shuffleOptions({
            "question": "A straight line across the width of a bank note, visible when held against light, is called ___________.",
            "optionA": "Serial number",
            "optionB": "Security thread",
            "optionC": "Watermark",
            "correctAnswer": "Security thread"
        }),
      shuffleOptions({
            "question": "The value of a bank note is given in how many Indian languages on its left side?",
            "optionA": "10",
            "optionB": "15",
            "optionC": "20",
            "correctAnswer": "15"
        }),
      shuffleOptions({
            "question": "The Indian currency notes have a watermark showing the face of ___________.",
            "optionA": "Nehru",
            "optionB": "Gandhiji",
            "optionC": "Indira Gandhi",
            "correctAnswer": "Gandhiji"
        }),
      shuffleOptions({
            "question": "Which animal was commonly used for travelling in rural areas of India?",
            "optionA": "Elephant",
            "optionB": "Horse",
            "optionC": "Camel",
            "correctAnswer": "Horse"
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
            "question": "Coins are made of plastic.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Bank notes are made of metal.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The Indian currency is called Dollar.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The value of the withdrawn 2000 rupee note is 500.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Coins have two sides: Head and Face.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The side of a bank note that usually contains the picture of national importance is the Front side.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "A straight line across the width of a bank note, visible when held against light, is called Serial number.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The value of a bank note is given in 10 Indian languages on its left side.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The Indian currency notes have a watermark showing the face of Nehru.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Elephant was commonly used for travelling in rural areas of India.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }
    ],
      ],
  };
}

export var activityData;
