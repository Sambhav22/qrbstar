export const chapter = "Chapter - 6: Clothes We Wear ";
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
            question: "What type of clothes do we usually wear in summer?",
            options: [
              "a) Woolen clothes",
              "b) Raincoat and gumboots",
              "c) Cotton clothes",
            ],
            answer: "c) Cotton clothes",
          },
          {
            question: "In which season do we wear raincoat and gumboots?",
            options: ["a) Summer", "b) Winter", "c) Rainy season"],
            answer: "c) Rainy season",
          },
          {
            question:
              "Besides seasonal clothes, where do we commonly wear uniforms?",
            options: ["a) Parties", "b) School and work", "c) Celebrations"],
            answer: "b) School and work",
          },
          {
            question: "What is mentioned as an example of a uniform?",
            options: ["a) Doctor", "b) Students", "c) Policeman"],
            answer: "c) Policeman",
          },
          {
            question:
              "On what occasions do people wear nice and fancy party clothes?",
            options: [
              "a) Everyday activities",
              "b) Special occasions and parties",
              "c) Uniformed events",
            ],
            answer: "b) Special occasions and parties",
          },
          {
            question: "Which type of clothes is typically worn in winter?",
            options: ["a) Cotton clothes", "b) Raincoat", "c) Woolen clothes"],
            answer: "c) Woolen clothes",
          },
          {
            question:
              "What kind of clothes are mentioned for a birthday party?",
            options: [
              "a) Uniforms",
              "b) Raincoat and gumboots",
              "c) Nice and fancy party clothes",
            ],
            answer: "c) Nice and fancy party clothes",
          },
          {
            question: "Who is mentioned as wearing a uniform?",
            options: ["a) Students", "b) Helpers at work", "c) Doctors"],
            answer: "b) Helpers at work",
          },
          {
            question: "Why do we wear clothes?",
            options: [
              "a) To look smart",
              "b) To protect the body",
              "c) Both a and b",
            ],
            answer: "c) Both a and b",
          },
          {
            question: "What is the primary purpose of raincoat and gumboots?",
            options: [
              "a) To celebrate special occasions",
              "b) To look fancy",
              "c) To protect from rain in the rainy season",
            ],
            answer: "c) To protect from rain in the rainy season",
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
            question: "Clothes protect our body and give us a ________ look.",
            optionA: "Casual",
            optionB: "Formal",
            optionC: "Smart",
            correctAnswer: "Smart",
          },
          {
            question: "We wear ________ clothes in summer.",
            optionA: "Winter",
            optionB: "Summer",
            optionC: "Rainy season",
            correctAnswer: "Summer",
          },
          {
            question: "Raincoat and gumboots are worn in the ________ season.",
            optionA: "Summer",
            optionB: "Winter",
            optionC: "Rainy",
            correctAnswer: "Rainy",
          },
          {
            question: "Apart from seasonal clothes, we also wear ________.",
            optionA: "Uniforms",
            optionB: "Party clothes",
            optionC: "Traditional attire",
            correctAnswer: "Uniforms",
          },
          {
            question:
              "We wear uniforms to school, and helpers also wear uniforms at ________.",
            optionA: "Parties",
            optionB: "Work",
            optionC: "Celebrations",
            correctAnswer: "Work",
          },
          {
            question:
              "Let's go to a birthday party. Everyone has worn nice and fancy ________.",
            optionA: "Everyday clothes",
            optionB: "Party clothes",
            optionC: "Casual attire",
            correctAnswer: "Party clothes",
          },
          {
            question:
              "We wear such clothes when we attend parties or celebrate special ________.",
            optionA: "Occasions",
            optionB: "Meetings",
            optionC: "Ceremonies",
            correctAnswer: "Occasions",
          },
          {
            question:
              "Besides seasonal clothes, we also wear uniforms to ________.",
            optionA: "Events",
            optionB: "School",
            optionC: "Workplaces",
            correctAnswer: "Workplaces",
          },
          {
            question:
              "Wow! Everyone has worn nice and fancy party clothes at the ________.",
            optionA: "School",
            optionB: "Office",
            optionC: "Birthday party",
            correctAnswer: "Birthday party",
          },
          {
            question: "Clothes protect our body and give us a ________ look.",
            optionA: "Smart",
            optionB: "Formal",
            optionC: "Sporty",
            correctAnswer: "Smart",
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
            question: "Clothes protect our body and give us a smart look.",
            options: ["Smart", "Casual"],
            answer: "Smart",
          },
          {
            question: "Cotton clothes are typically worn in winter.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Raincoat and gumboots are suitable for the summer season.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Uniforms are worn only during special occasions.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Party clothes are commonly worn at work.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Winter clothes are usually made of lightweight materials.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Everyone wears fancy party clothes at a birthday party.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Uniforms are worn exclusively by students.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "People wear clothes to look smart and protect their bodies.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Raincoat and gumboots protect from rain in the rainy season.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
