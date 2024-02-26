export const chapter = "Chapter - 14: Drop of Water ";
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
            question: "What is a Persian wheel used for in agriculture?",
            options: [
              "a) Lifting water manually",
              "b) Rotating buckets to bring water to the field",
              "c) Drawing water with a tube well",
            ],
            answer: "b) Rotating buckets to bring water to the field",
          },
          {
            question:
              "What is another name for the Denkli device used in agriculture?",
            options: ["a) Paecottah", "b) Shaduf", "c) Counter weighter"],
            answer: "b) Shaduf",
          },
          {
            question:
              "In which countries is the Denkli device still used for irrigation?",
            options: [
              "a) China and Japan",
              "b) India, Egypt, and some others",
              "c) USA and Canada",
            ],
            answer: "b) India, Egypt, and some others",
          },
          {
            question:
              "What is the modern method used for lifting groundwater for irrigation?",
            options: ["a) Persian wheel", "b) Tube wells", "c) Denkli"],
            answer: "b) Tube wells",
          },
          {
            question:
              "How much water does a standard grass crop grown in a semi-arid climate with a mean temperature of 20°C need per day?",
            options: ["a) 6.5 mm", "b) 20 mm", "c) 75 mm"],
            answer: "a) 6.5 mm",
          },
          {
            question:
              "What percentage of total water consumption does the industry account for worldwide?",
            options: ["a) 19%", "b) 50%", "c) 75%"],
            answer: "a) 19%",
          },
          {
            question:
              "What are some uses of water in domestic life mentioned in the text?",
            options: [
              "a) Cooking and gardening",
              "b) Allowing stagnation for mosquito breeding",
              "c) Personal hygiene and washing of clothes",
            ],
            answer: "c) Personal hygiene and washing of clothes",
          },
          {
            question:
              "What is mentioned as the major source of water in many parts of the world?",
            options: ["a) Rivers", "b) Groundwater", "c) Canals"],
            answer: "b) Groundwater",
          },
          {
            question:
              "What dangerous insects breed in stagnant water and spread diseases?",
            options: ["a) Ants", "b) Bees", "c) Mosquitoes"],
            answer: "c) Mosquitoes",
          },
          {
            question:
              "According to the text, why has groundwater been continuously depleting in many parts of the world?",
            options: [
              "a) Due to the scarcity of water",
              "b) Overexploitation by rising human population and industrialization",
              "c) Lack of awareness about water conservation",
            ],
            answer:
              "b) Overexploitation by rising human population and industrialization",
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
              "Farmers in the olden times were dependent on ______ as a source of water for their crop production.",
            options: ["a) Tube wells", "b) Rivers", "c) Rain"],
            answer: "c) Rain",
          },
          {
            question:
              "The Persian wheel is turned using a ______ to bring water to the field.",
            options: ["a) Motor", "b) Bullock", "c) Human"],
            answer: "b) Bullock",
          },
          {
            question:
              "Denkli, also known as paecottah or shaduf, is a hand-operated device used for lifting water, with a pole mounted as a see-saw and a ______ attached at one end.",
            options: ["a) Counter weight", "b) Bucket", "c) Tube well"],
            answer: "b) Bucket",
          },
          {
            question:
              "In a semi-arid climate with a mean temperature of 20°C, a standard grass crop needs approximately ______ of water per day.",
            options: ["a) 3 mm", "b) 6.5 mm", "c) 10 mm"],
            answer: "b) 6.5 mm",
          },
          {
            question:
              "Industries worldwide account for ______ of total water consumption.",
            options: ["a) 10%", "b) 19%", "c) 30%"],
            answer: "b) 19%",
          },
          {
            question:
              "In domestic life, water is extensively used for personal hygiene, washing of clothes, and ______.",
            options: ["a) Cooking", "b) Gardening", "c) Both a and b"],
            answer: "c) Both a and b",
          },
          {
            question:
              "________ is the major source of water in many parts of the world.",
            options: ["a) Canals", "b) Groundwater", "c) Rivers"],
            answer: "b) Groundwater",
          },
          {
            question:
              "Stagnant water around localities or houses serves as a breeding place for dangerous insects like ______.",
            options: ["a) Bees", "b) Mosquitoes", "c) Ants"],
            answer: "b) Mosquitoes",
          },
          {
            question:
              "Worldwide, the industry uses water as a raw material, coolant, solvent, transport agent, and source of ______.",
            options: ["a) Fuel", "b) Energy", "c) Light"],
            answer: "b) Energy",
          },
          {
            question:
              "Groundwater depletion is attributed to overexploitation by rising human population and rapid rise in ______.",
            options: [
              "a) Agricultural production",
              "b) Urbanization and industrialization",
              "c) Environmental conservation",
            ],
            answer: "b) Urbanization and industrialization",
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
            question: "Water is not essential for all living beings.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The Persian wheel is a hand-operated device used for lifting water in agriculture.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Denkli, also known as paecottah or shaduf, is still widely used in modern agricultural practices.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Tube wells are pumps that help pull groundwater for irrigation.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Industries worldwide account for less than 10% of total water consumption.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Water in domestic life is not used for personal hygiene and washing of clothes.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Rivers are the major source of water in many parts of the world.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Stagnant water around localities or houses is not a breeding place for mosquitoes.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The industry does not use water as a raw material, coolant, solvent, transport agent, or source of energy.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Groundwater depletion is not attributed to overexploitation by rising human population and rapid urbanization and industrialization.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
