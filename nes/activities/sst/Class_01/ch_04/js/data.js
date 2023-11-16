export const chapter = "Chapter - 4: Homes of Animals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the primary purpose of shelters for animals?",
        optionA: "To find food",
        optionB: "To protect themselves and their babies",
        optionC: "To socialize",
        correctAnswer: "To protect themselves and their babies",
      },
      {
        question: "Which of the following animals makes a nest as its shelter?",
        optionA: "Elephants",
        optionB: "Birds",
        optionC: "Snakes",
        correctAnswer: "Birds",
      },
      {
        question:
          "What type of shelter do rabbits typically create for themselves?",
        optionA: "Tree holes",
        optionB: "Burrows",
        optionC: "Dens",
        correctAnswer: "Burrows",
      },
      {
        question: "Where do lions, tigers, bears, and foxes commonly live?",
        optionA: "In tree holes",
        optionB: "On trees",
        optionC: "In dens",
        correctAnswer: "In dens",
      },
      {
        question: "Snakes and owls are known to live in which type of shelter?",
        optionA: "Burrows",
        optionB: "Tree holes",
        optionC: "Dens",
        correctAnswer: "Tree holes",
      },
      {
        question: "Which animals live on trees as their natural shelter?",
        optionA: "Elephants",
        optionB: "Monkeys",
        optionC: "Giraffes",
        correctAnswer: "Monkeys",
      },
      {
        question: "What type of shelter is commonly used for dogs?",
        optionA: "Burrows",
        optionB: "Tree holes",
        optionC: "Kennels",
        correctAnswer: "Kennels",
      },
      {
        question: "What type of shelter is suitable for horses?",
        optionA: "Burrows",
        optionB: "Kennels",
        optionC: "Stables",
        correctAnswer: "Stables",
      },
      {
        question:
          "People who keep cattle often provide them with what type of shelter?",
        optionA: "Stables",
        optionB: "Tree holes",
        optionC: "Dens",
        correctAnswer: "Stables",
      },
      {
        question:
          "Where do elephants, giraffes, zebras, and deer commonly seek shelter?",
        optionA: "In dens",
        optionB: "Under trees",
        optionC: "Tree holes",
        correctAnswer: "Under trees",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "All animals need a shelter to stay and protect themselves and their ____________.",
        optionA: "Families",
        optionB: "Offspring",
        optionC: "Babies",
        correctAnswer: "Babies",
      },
      {
        question: "A bird makes a ____________ as its shelter.",
        optionA: "Hole",
        optionB: "Nest",
        optionC: "Den",
        correctAnswer: "Nest",
      },
      {
        question: "A rabbit digs a ____________ for its shelter.",
        optionA: "Nest",
        optionB: "Hole",
        optionC: "Burrow",
        correctAnswer: "Burrow",
      },
      {
        question:
          "Lions, tigers, bears, and foxes commonly live in ____________.",
        optionA: "Trees",
        optionB: "Dens",
        optionC: "Burrows",
        correctAnswer: "Dens",
      },
      {
        question: "Snakes and owls live in ____________.",
        optionA: "Burrows",
        optionB: "Trees",
        optionC: "Caves",
        correctAnswer: "Trees",
      },
      {
        question: "Monkeys, lemurs, and koalas live ____________.",
        optionA: "In nests",
        optionB: "In burrows",
        optionC: "On trees",
        correctAnswer: "On trees",
      },
      {
        question: "Elephants, giraffes, zebras, deer, etc. live ____________.",
        optionA: "In dens",
        optionB: "Under trees",
        optionC: "In caves",
        correctAnswer: "Under trees",
      },
      {
        question:
          "People who keep different animals with them, make different shelters for these animals, such as a shed for ____________.",
        optionA: "Dogs",
        optionB: "Cattle",
        optionC: "Horses",
        correctAnswer: "Cattle",
      },
      {
        question: "Kennels are commonly used as shelters for ____________.",
        optionA: "Snakes",
        optionB: "Cats",
        optionC: "Dogs",
        correctAnswer: "Dogs",
      },
      {
        question: "A stable is a shelter typically used for ____________.",
        optionA: "Horses",
        optionB: "Monkeys",
        optionC: "Elephants",
        correctAnswer: "Horses",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "All animals need shelter to protect themselves and their babies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Birds make nests as their shelters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Snakes and owls live in burrows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Monkeys, lemurs, and koalas live on trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Elephants, giraffes, zebras, and deer live in tree holes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "People who keep different animals with them make kennels for dogs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Horses commonly live in stables.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Cattle are usually kept in dens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Ants make anthills as their shelters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Lions, tigers, and bears live in caves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
