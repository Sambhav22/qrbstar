export const chapter = "Chapter - 18: Building Bridges";
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
            question:
              "What was one of the earliest methods used by men to cross rivers or streams?",
            options: [
              "Bridges made of bamboo",
              "Concrete bridges",
              "Suspension bridges",
            ],
            answer: "Bridges made of bamboo",
          },
          {
            question:
              "Which tool is used to spread mortar during construction?",
            options: ["Measuring Tape", "Masonry Trowel", "Chisel"],
            answer: "Masonry Trowel",
          },
          {
            question: "What is the purpose of a Plumb Bob in construction?",
            options: [
              "To measure length and breadth",
              "To check vertical alignment",
              "To remove excess concrete",
            ],
            answer: "To check vertical alignment",
          },
          {
            question:
              "Which tool is used to make holes in metal, wood, bricks, etc.?",
            options: ["Concrete Mixer", "Hand Saw", "Drill Machine"],
            answer: "Drill Machine",
          },
          {
            question:
              "What is the primary material required for the construction of bridges?",
            options: [
              "Steel, concrete, stone, bricks, iron, timber, and asphalt",
              "Bamboo logs",
              "Fallen trees",
            ],
            answer: "Steel, concrete, stone, bricks, iron, timber, and asphalt",
          },
          {
            question:
              "Which type of bridge consists of a horizontal beam supported at both ends?",
            options: ["Suspension Bridge", "Beam Bridge", "Arch Bridge"],
            answer: "Beam Bridge",
          },
          {
            question:
              "What was the drawback of bamboo bridges in small towns or rural areas?",
            options: [
              "Lack of durability",
              "Expensive construction",
              "Difficult maintenance",
            ],
            answer: "Lack of durability",
          },
          {
            question: "What does a Cantilever Bridge consist of?",
            options: [
              "Horizontal beam",
              "Independent beams called cantilevers",
              "Long span with steel cables",
            ],
            answer: "Independent beams called cantilevers",
          },
          {
            question: "What is the purpose of an Earth Rammer in construction?",
            options: [
              "To spread mortar",
              "To level the ground",
              "To make holes",
            ],
            answer: "To level the ground",
          },
          {
            question:
              "Who is in charge of overseeing the construction of safe bridge structures?",
            options: ["Construction worker", "Civil engineer", "Mason"],
            answer: "Civil engineer",
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
        fill_in_the_blank_questions: [
          {
            question:
              "Thousands of years ago, men used to live in caves and to cross the rivers or streams, they constructed bridges over them with fallen trees or wooden logs and stepping stones. Later with the invention of construction tools such as earth rammer, drill machine etc., modern bridges are seen over streams or rivers. Bridges are the important structure that helps to connect ____________ parts of the land.",
            options: ["Two", "Three", "Four"],
            answer: "Two",
          },
          {
            question:
              "__________ is used to dig the ground and to place mortar in the head pan.",
            options: ["Head Pan", "Masonry Trowel", "Hoe"],
            answer: "Hoe",
          },
          {
            question:
              "Plumb Bob is a tool used to check the ____________ alignment of civil work.",
            options: ["Horizontal", "Vertical", "Diagonal"],
            answer: "Vertical",
          },
          {
            question:
              "In small towns or rural areas, bamboo bridges were created using logs of bamboo trees as pillars and flat wooden pieces tied to these pillars with ropes. These bridges were not durable, as technically, to construct a bridge, scientific ____________ are required.",
            options: ["Observations", "Measurements", "Calculations"],
            answer: "Measurements",
          },
          {
            question:
              "Cantilever Bridge consists of two or several independent beams called ____________.",
            options: ["Pillars", "Cantilevers", "Trusses"],
            answer: "Cantilevers",
          },
          {
            question:
              "To construct a bridge, materials such as steel, concrete, stone, bricks, iron, timber, and asphalt are required. A civil engineer is in charge, under whose guidance ____________ build safe bridge structures over different locations.",
            options: ["Architects", "Masons", "Carpenters"],
            answer: "Masons",
          },
          {
            question:
              "Beam Bridge consists of a horizontal beam supported at ____________ ends.",
            options: ["One", "Both", "Neither"],
            answer: "Both",
          },
          {
            question:
              "Suspension Bridge has a long span with a roadway that hangs from steel cables supported by ____________ high towers.",
            options: ["One", "Two", "Three"],
            answer: "Two",
          },
          {
            question:
              "Concrete Mixer is used to thoroughly mix the concrete at the ____________.",
            options: ["Factory", "Site", "Laboratory"],
            answer: "Site",
          },
          {
            question: "Earth Rammer is a tool used to ____________ the ground.",
            options: ["Level", "Excavate", "Elevate"],
            answer: "Level",
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
        true_or_false_questions: [
          {
            question:
              "Bridges made of bamboo were durable and technically sound constructions.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The Plumb Bob is a tool used to measure the length and breadth of walls.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Concrete Mixer is a tool used to make holes into or through metal, wood, bricks, etc.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Cantilever Bridge consists of a horizontal beam supported at both ends.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Bamboo bridges in small towns or rural areas were constructed with scientific measurements.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The primary material required for bridge construction includes steel, concrete, and asphalt only.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Suspension Bridge has a roadway that hangs from steel cables supported by three high towers.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Measuring Tape is used to check the vertical alignment of civil work.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Bamboo bridges were created using logs of bamboo trees as pillars and flat wooden pieces tied to these pillars with ropes.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Earth Rammer is a tool used to level the ground.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
