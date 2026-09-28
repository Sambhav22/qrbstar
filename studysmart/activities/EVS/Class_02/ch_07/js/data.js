export const chapter = "Chapter - 7: Animal Kingdom";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which animal is known as the “ship of the desert”?",
        "optionA": "Horse",
        "optionB": "Camel",
        "optionC": "Goat",
        "correctAnswer": "Camel"
      },
      {
        "question": "Which animal makes silk thread?",
        "optionA": "Silkworm",
        "optionB": "Bee",
        "optionC": "Duck",
        "correctAnswer": "Silkworm"
      },
      {
        "question": "Which animal is a carnivorous animal?",
        "optionA": "Deer",
        "optionB": "Cow",
        "optionC": "Lion",
        "correctAnswer": "Lion"
      },
      {
        "question": "Which animal is an omnivorous animal?",
        "optionA": "Bear",
        "optionB": "Goat",
        "optionC": "Elephant",
        "correctAnswer": "Bear"
      },
      {
        "question": "Which animal eats grass and leaves?",
        "optionA": "Tiger",
        "optionB": "Deer",
        "optionC": "Eagle",
        "correctAnswer": "Deer"
      },
      {
        "question": "Which animal can be kept at home for fun and company?",
        "optionA": "Tiger",
        "optionB": "Parrot",
        "optionC": "Zebra",
        "correctAnswer": "Parrot"
      },
      {
        "question": "Which animal works together in teams to make honey?",
        "optionA": "Rabbits",
        "optionB": "Horses",
        "optionC": "Bees",
        "correctAnswer": "Bees"
      },
      {
        "question": "Which animal is an example of a herbivore?",
        "optionA": "Wolf",
        "optionB": "Lion",
        "optionC": "Rabbit",
        "correctAnswer": "Rabbit"
      },
      {
        "question": "Which animal can eat both grains and meat?",
        "optionA": "Crow",
        "optionB": "Cow",
        "optionC": "Goat",
        "correctAnswer": "Crow"
      },
      {
        "question": "Which animal is an example of a wild animal?",
        "optionA": "Dog",
        "optionB": "Zebra",
        "optionC": "Goat",
        "correctAnswer": "Zebra"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Animals that eat only plants are called ______.",
        "optionA": "carnivores",
        "optionB": "omnivores",
        "optionC": "herbivores",
        "correctAnswer": "herbivores"
      },
      {
        "question": "Animals that eat the flesh of other animals are called ______.",
        "optionA": "herbivores",
        "optionB": "carnivores",
        "optionC": "omnivores",
        "correctAnswer": "carnivores"
      },
      {
        "question": "Animals that eat both plants and animals are called ______.",
        "optionA": "carnivores",
        "optionB": "omnivores",
        "optionC": "herbivores",
        "correctAnswer": "omnivores"
      },
      {
        "question": "The sweet food made by bees is called ______.",
        "optionA": "honey",
        "optionB": "milk",
        "optionC": "silk",
        "correctAnswer": "honey"
      },
      {
        "question": "Sheep give us ______ to make warm clothes.",
        "optionA": "silk",
        "optionB": "eggs",
        "optionC": "wool",
        "correctAnswer": "wool"
      },
      {
        "question": "The thread used to make soft shiny clothes is called ______.",
        "optionA": "leather",
        "optionB": "wool",
        "optionC": "silk",
        "correctAnswer": "silk"
      },
      {
        "question": "Animals kept at home for company are called ______ animals.",
        "optionA": "wild",
        "optionB": "pet",
        "optionC": "carnivorous",
        "correctAnswer": "pet"
      },
      {
        "question": "Animals that live far from people are called ______ animals.",
        "optionA": "pet",
        "optionB": "wild",
        "optionC": "domestic",
        "correctAnswer": "wild"
      },
      {
        "question": "Animals raised on farms or near homes are called ______ animals.",
        "optionA": "domestic",
        "optionB": "wild",
        "optionC": "carnivorous",
        "correctAnswer": "domestic"
      },
      {
        "question": "Bees make honey in ______.",
        "optionA": "hives",
        "optionB": "nests",
        "optionC": "holes",
        "correctAnswer": "hives"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Herbivorous animals eat only animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Carnivorous animals eat the flesh of other animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Omnivorous animals eat both plants and animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rabbits are carnivorous animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bears can eat both plants and animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Bees make honey in hives.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Parrots can be pet animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Tigers eat grass and leaves.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Deer eat plants and leaves.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dogs can eat both plant food and meat.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
