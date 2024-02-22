export const chapter = "Chapter - 9: Food for plants and Animals";
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
              "What is the process by which green plants make their own food?",
            options: ["Respiration", "Photosynthesis", "Digestion"],
            answer: "Photosynthesis",
          },
          {
            question:
              "Which components are essential for photosynthesis in plants?",
            options: [
              "Nitrogen, Sunlight, Oxygen",
              "Carbon dioxide, Water, Sunlight",
              "Oxygen, Water, Chlorophyll",
            ],
            answer: "Carbon dioxide, Water, Sunlight",
          },
          {
            question:
              "What are autotrophs also known as in the context of plant nutrition?",
            options: ["Consumers", "Heterotrophs", "Producers"],
            answer: "Producers",
          },
          {
            question:
              "What is the primary product of photosynthesis in plants?",
            options: ["Starch", "Oxygen", "Water vapour"],
            answer: "Starch",
          },
          {
            question: "Which animals are classified as herbivores?",
            options: [
              "Lion, Tiger, Fox",
              "Camel, Buffalo, Goat",
              "Dog, Monkey, Bear",
            ],
            answer: "Camel, Buffalo, Goat",
          },
          {
            question: "What do carnivores eat?",
            options: [
              "Only plants",
              "Flesh of other animals",
              "Both plants and animals",
            ],
            answer: "Flesh of other animals",
          },
          {
            question:
              "Animals that eat both plants and flesh of other animals are called:",
            options: ["Herbivores", "Carnivores", "Omnivores"],
            answer: "Omnivores",
          },
          {
            question: "What do scavengers eat to keep the environment clean?",
            options: [
              "Plants",
              "Flesh of dead animals",
              "Other animals' leftovers",
            ],
            answer: "Flesh of dead animals",
          },
          {
            question:
              "Which organisms are considered decomposers in a food chain?",
            options: ["Plants", "Fungi, Bacteria, Worms", "Herbivores"],
            answer: "Fungi, Bacteria, Worms",
          },
          {
            question:
              "What is the network of interconnected food chains called in nature?",
            options: ["Food Circle", "Food Web", "Food Line"],
            answer: "Food Web",
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
        fillInTheBlankQuestions: [
          {
            question:
              "Plants prepare their food through the process of ________________.",
            options: [
              "Cellular Respiration",
              "Photosynthesis",
              "Transpiration",
            ],
            answer: "Photosynthesis",
          },
          {
            question:
              "The green plants that make their own food are also known as ________________.",
            options: ["Consumers", "Autotrophs", "Decomposers"],
            answer: "Autotrophs",
          },
          {
            question:
              "The products of photosynthesis are ________________, ________________, and ________________.",
            options: [
              "Glucose, Nitrogen, Water",
              "Starch, Oxygen, Water Vapour",
              "Proteins, Carbon Dioxide, Sunlight",
            ],
            answer: "Starch, Oxygen, Water Vapour",
          },
          {
            question:
              "Herbivores are animals that primarily eat ________________.",
            options: [
              "Flesh of other animals",
              "Both plants and animals",
              "Only plants",
            ],
            answer: "Only plants",
          },
          {
            question:
              "Carnivores are also known as ________________ consumers.",
            options: ["Primary", "Secondary", "Tertiary"],
            answer: "Secondary",
          },
          {
            question:
              "Animals that eat both plants and the flesh of other animals are called ________________.",
            options: ["Herbivores", "Carnivores", "Omnivores"],
            answer: "Omnivores",
          },
          {
            question:
              "Scavengers play a role in keeping the environment clean by eating the ________________ of dead animals.",
            options: ["Flesh", "Bones", "Feathers"],
            answer: "Flesh",
          },
          {
            question:
              "Parasites depend on other living animals for ________________.",
            options: ["Oxygen", "Food", "Water"],
            answer: "Food",
          },
          {
            question:
              "Producers in a food chain are typically represented by ________________.",
            options: ["Animals", "Fungi", "Plants"],
            answer: "Plants",
          },
          {
            question:
              "A network of interconnected food chains is called a ________________.",
            options: ["Food Circle", "Food Web", "Food Line"],
            answer: "Food Web",
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
        trueOrFalseQuestions: [
          {
            question:
              "Plants prepare their food through the process of photosynthesis.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Autotrophs are also known as consumers.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The primary products of photosynthesis are Glucose, Nitrogen, and Water.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Carnivores are animals that primarily eat plants.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Herbivores are also known as Secondary consumers.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Omnivores eat both plants and the flesh of other animals.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Scavengers play a role in keeping the environment clean by eating the bones of dead animals.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Parasites depend on other living animals for water.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Producers in a food chain are typically represented by fungi.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "A network of interconnected food chains is called a Food Line.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
