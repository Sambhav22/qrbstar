export const chapter = "Chapter - 9: Animals Around Us";
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
              "What body feature do birds and insects that can fly have?",
            options: {
              A: "Horns",
              B: "Fins",
              C: "Wings",
            },
            answer: "C",
          },
          {
            question:
              "Which animals use their tails for jumping long distances?",
            options: {
              A: "Cow",
              B: "Kangaroo",
              C: "Squirrel",
            },
            answer: "B",
          },
          {
            question:
              "What unique pattern or scale do animals like crocodile, snake, and turtle have on their bodies?",
            options: {
              A: "Hair",
              B: "Hoofs",
              C: "Scales",
            },
            answer: "C",
          },
          {
            question:
              "What is the behavior of animals that live in groups generally called?",
            options: {
              A: "Solitary",
              B: "Shy",
              C: "Group",
            },
            answer: "C",
          },
          {
            question:
              "Which animals are known to be aggressive and attacking in nature due to spending most of their lives without other members of the species?",
            options: {
              A: "Zebras",
              B: "Snow leopards",
              C: "Monkeys",
            },
            answer: "B",
          },
          {
            question:
              "What is the ability of an animal to change its body color as a defense mechanism called?",
            options: {
              A: "Camouflage",
              B: "Hibernation",
              C: "Mimicry",
            },
            answer: "A",
          },
          {
            question:
              "What do plant-eating animals like cows and buffaloes use to cut stems and leaves?",
            options: {
              A: "Sharp front teeth",
              B: "Beaks",
              C: "Hoofs",
            },
            answer: "A",
          },
          {
            question:
              "What type of teeth do flesh-eating animals like lions and tigers have for tearing flesh?",
            options: {
              A: "Grinding teeth",
              B: "Sharp front teeth",
              C: "Beaks",
            },
            answer: "B",
          },
          {
            question: "How do frogs and lizards catch insects?",
            options: {
              A: "Sharp front teeth",
              B: "Beaks",
              C: "Long and sticky tongue",
            },
            answer: "C",
          },
          {
            question: "What do butterflies primarily feed on?",
            options: {
              A: "Flesh",
              B: "Nectar from flowers",
              C: "Seeds",
            },
            answer: "B",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
}
activityData = activity;
"Fill in the blanks:",
  {
    questions: [
      {
        questions: [
          {
            question:
              "Most animals have __________ legs. Some have hoofs, paws, or claws.",
            options: {
              A: "Two",
              B: "Four",
              C: "Six",
            },
            answer: "B",
          },
          {
            question: "Birds and insects use their __________ to fly.",
            options: {
              A: "Horns",
              B: "Fins",
              C: "Wings",
            },
            answer: "C",
          },
          {
            question: "Water animals use their __________ to swim.",
            options: {
              A: "Tails",
              B: "Hoofs",
              C: "Beaks",
            },
            answer: "A",
          },
          {
            question:
              "Animals that live in groups are called __________ animals.",
            options: {
              A: "Solitary",
              B: "Shy",
              C: "Group",
            },
            answer: "C",
          },
          {
            question:
              "Snow leopards, puma, lynx, and fox are examples of __________ animals.",
            options: {
              A: "Group",
              B: "Solitary",
              C: "Shy",
            },
            answer: "B",
          },
          {
            question:
              "The ability of an animal to change its body color is called __________.",
            options: {
              A: "Camouflage",
              B: "Hibernation",
              C: "Mimicry",
            },
            answer: "A",
          },
          {
            question:
              "Flesh-eating animals like lions and tigers have sharp, pointed, and slightly curved __________ for tearing flesh.",
            options: {
              A: "Beaks",
              B: "Front teeth",
              C: "Hoofs",
            },
            answer: "B",
          },
          {
            question:
              "Animals that spend a majority of their lives without other members of the species are known as __________ animals.",
            options: {
              A: "Group",
              B: "Solitary",
              C: "Shy",
            },
            answer: "B",
          },
          {
            question:
              "Different animals eat different kinds of food based on their __________.",
            options: {
              A: "Size",
              B: "Color",
              C: "Preferences",
            },
            answer: "C",
          },
          {
            question:
              "Frogs and lizards use their long and sticky __________ to catch insects.",
            options: {
              A: "Beaks",
              B: "Front teeth",
              C: "Tongue",
            },
            answer: "C",
          },
        ],
      },
    ],
  };

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Elephants are small animals.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question: "All animals have four legs.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question: "Water animals use their tails and fins to fly.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question: "Group animals are generally aggressive and attacking.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question:
          "Camouflage is the ability of an animal to change its body color.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "A",
      },
      {
        question:
          "Plant-eating animals like lions and tigers have sharp front teeth.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question: "Solitary animals live in groups for their safety.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question: "All animals have the same pattern of eating.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "B",
      },
      {
        question: "Animals use their tails to jump long distances.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "A",
      },
      {
        question:
          "Friendly animals interact with humans and enjoy their company.",
        options: {
          A: "True",
          B: "False",
        },
        answer: "A",
      },
    ],
  };

export var activityData;
