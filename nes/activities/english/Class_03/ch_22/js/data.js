export const chapter = "Chapter -22: The Clever Bat";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What animal is the central character of the story?",
          optionA: "Cat",
          optionB: "Bat",
          optionC: "Weasel",
          correctAnswer: "Bat",
        },
        {
          question: "What is the main characteristic of a bat's body?",
          optionA: "Feathers",
          optionB: "Wings without feathers",
          optionC: "Fur",
          correctAnswer: "Wings without feathers",
        },
        {
          question: "What reason does the bat give the cat to spare his life?",
          optionA: "He is a mouse",
          optionB: "He is a bird",
          optionC: "He is a bat",
          correctAnswer: "He is a bird",
        },
        {
          question: "Who catches the bat after he escapes from the cat?",
          optionA: "Cat",
          optionB: "Dog",
          optionC: "Weasel",
          correctAnswer: "Weasel",
        },
        {
          question: "How many times does the bat trick his captors?",
          optionA: "Once",
          optionB: "Twice",
          optionC: "Thrice",
          correctAnswer: "Twice",
        },
        {
          question: "What does the weasel initially mistake the bat for?",
          optionA: "Bird",
          optionB: "Mouse",
          optionC: "Cat",
          correctAnswer: "Bird",
        },
        {
          question:
            "What reason does the bat give the weasel to spare his life?",
          optionA: "He is a bird",
          optionB: "He is a mouse",
          optionC: "He is a bat",
          correctAnswer: "He is a mouse",
        },
        {
          question: "What is the main lesson from the story?",
          optionA: "Bats are clever",
          optionB: "Cats are easily fooled",
          optionC: "Adaptation to situations",
          correctAnswer: "Adaptation to situations",
        },
        {
          question: "How does the bat save himself from the weasel?",
          optionA: "By flying away",
          optionB: "By pretending to be a bird",
          optionC: "By pretending to be a mouse",
          correctAnswer: "By pretending to be a mouse",
        },
        {
          question: "What is the ultimate fate of the bat?",
          optionA: "Eaten by the cat",
          optionB: "Eaten by the weasel",
          optionC: "Escapes",
          correctAnswer: "Escapes",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question: "Bats catch their prey at _________.",
          optionA: "day",
          optionB: "night",
          optionC: "dawn",
          correctAnswer: "night",
        },
        {
          question: "Bats have wings but without _________.",
          optionA: "fur",
          optionB: "feathers",
          optionC: "scales",
          correctAnswer: "feathers",
        },
        {
          question:
            "In some parts of the world, bats are also eaten as _________.",
          optionA: "pets",
          optionB: "food",
          optionC: "companions",
          correctAnswer: "food",
        },
        {
          question: "The bat begged the cat for its _________.",
          optionA: "paws",
          optionB: "wings",
          optionC: "life",
          correctAnswer: "life",
        },
        {
          question: "The cat mistook the bat for a _________.",
          optionA: "bird",
          optionB: "mouse",
          optionC: "weasel",
          correctAnswer: "mouse",
        },
        {
          question: "The bat tricked the weasel by claiming to be a _________.",
          optionA: "bird",
          optionB: "mouse",
          optionC: "cat",
          correctAnswer: "mouse",
        },
        {
          question: "The bat claimed to be a bird to the _________.",
          optionA: "weasel",
          optionB: "cat",
          optionC: "dog",
          correctAnswer: "cat",
        },
        {
          question:
            "The cat spared the bat's life because it thought the bat was a _________.",
          optionA: "bird",
          optionB: "mouse",
          optionC: "weasel",
          correctAnswer: "bird",
        },
        {
          question: "The weasel believed the bat to be a _________.",
          optionA: "cat",
          optionB: "bird",
          optionC: "mouse",
          correctAnswer: "mouse",
        },
        {
          question: "The bat used _________ to save its life twice.",
          optionA: "tricks",
          optionB: "force",
          optionC: "intelligence",
          correctAnswer: "tricks",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "Bats catch their prey during the day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Bats have feathers on their wings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Bats are never eaten as food in any part of the world.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The cat wanted to eat the bat because it thought the bat was a mouse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The weasel believed the bat to be a bird.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The cat spared the bat's life because it didn't like birds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The weasel hated mice because they smell bad.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The bat used force to save its life twice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The cat believed the bat to be a mouse because of its appearance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The weasel spared the bat's life because it didn't like birds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
