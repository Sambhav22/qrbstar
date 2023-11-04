export const chapter = "Chapter - 5: The King as Servant";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the main issue discussed in the text?",
        optionA: "Forest preservation",
        optionB: "The spread of a terrible disease",
        optionC: "Hunting techniques",
        correctAnswer: "The spread of a terrible disease",
      },
      {
        question:
          "Who is suggested as the one responsible for finding a solution to the disease?",
        optionA: "The shepherd",
        optionB: "The bear",
        optionC: "The zebra",
        correctAnswer: "The bear",
      },
      {
        question:
          "What is the proposed solution to rid the forest of the disease?",
        optionA: "Sacrifice the one who committed the most sins",
        optionB: "Sacrifice the weakest animal",
        optionC: "Sacrifice the largest animal",
        correctAnswer: "Sacrifice the one who committed the most sins",
      },
      {
        question:
          "Which animal confesses to having killed sheep and the shepherd?",
        optionA: "The bear",
        optionB: "The zebra",
        optionC: "The lion",
        correctAnswer: "The lion",
      },
      {
        question: "Why does the lion believe he has committed a sin?",
        optionA: "For eating ants",
        optionB: "For devouring deer",
        optionC: "For killing the shepherd",
        correctAnswer: "For killing the shepherd",
      },
      {
        question:
          "Who defends the lion's actions and argues that it is not a sin?",
        optionA: "The zebra",
        optionB: "The donkey",
        optionC: "The bear",
        correctAnswer: "The donkey",
      },
      {
        question:
          "Which animal admits to stealing eggs and consuming young birds?",
        optionA: "The lion",
        optionB: "The bear",
        optionC: "The zebra",
        correctAnswer: "The zebra",
      },
      {
        question: "What does the zebra believe is the gravest sin?",
        optionA: "Killing the shepherd",
        optionB: "Swooping down on snakes",
        optionC: "Stealing eggs",
        correctAnswer: "Swooping down on snakes",
      },
      {
        question: "What sin does the donkey confess to committing?",
        optionA: "Eating sugarcanes",
        optionB: "Killing the shepherd",
        optionC: "Destroying nests",
        correctAnswer: "Eating sugarcanes",
      },
      {
        question: "Why is the donkey ultimately chosen to be sacrificed?",
        optionA: "For confessing to a grave sin",
        optionB: "For not confessing any sins",
        optionC: "For being the weakest animal",
        correctAnswer: "For not confessing any sins",
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
          "My lord! It appears that one of us has committed a horrible _______. If we sacrifice him, the disease can be eradicated.",
        optionA: "crime",
        optionB: "sin",
        optionC: "act",
        correctAnswer: "sin",
      },
      {
        question:
          "I confess that I have committed ________ sins. I have often killed sheep and even the shepherd.",
        optionA: "terrible",
        optionB: "numerous",
        optionC: "grave",
        correctAnswer: "grave",
      },
      {
        question:
          "My lord! You have the complete right to hunt animals and people of your choice. Even the shepherd belongs to the race that thinks themselves our _______.",
        optionA: "masters",
        optionB: "enemies",
        optionC: "friends",
        correctAnswer: "masters",
      },
      {
        question:
          "Bear, it is nothing like a sin. Sin is mine because I have killed mice and rabbits for food and game. It cannot be called a sin. Sin is mine when I eat up even small ________.",
        optionA: "birds",
        optionB: "creatures",
        optionC: "nestlings",
        correctAnswer: "nestlings",
      },
      {
        question:
          "I steal eggs and gulp down young _________. I think my sin is greater than yours.",
        optionA: "rabbits",
        optionB: "sheep",
        optionC: "birds",
        correctAnswer: "birds",
      },
      {
        question:
          "I have killed even the animals of our carnivorous race, so my sin should be _________.",
        optionA: "graver",
        optionB: "lighter",
        optionC: "justified",
        correctAnswer: "graver",
      },
      {
        question:
          "This is no sin, dear. I not only eat eggs, but also destroy nests. Many birds die due to my ________.",
        optionA: "kindness",
        optionB: "actions",
        optionC: "enjoyment",
        correctAnswer: "actions",
      },
      {
        question:
          "Sin is committed by me when I swoop down on the innocent _________.",
        optionA: "rabbits",
        optionB: "snakes",
        optionC: "zebras",
        correctAnswer: "snakes",
      },
      {
        question:
          "Donkey, I can see that you have not confessed your ________ as yet.",
        optionA: "sins",
        optionB: "actions",
        optionC: "guilt",
        correctAnswer: "sins",
      },
      {
        question:
          "Sir, I have never killed an animal, I eat only grass. Once I committed a small sin when I entered the farmer's field and ate up his ________.",
        optionA: "crops",
        optionB: "animals",
        optionC: "sugarcanes",
        correctAnswer: "sugarcanes",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Elephants can fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Water is composed of two atoms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Bananas are a type of berry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Mount Everest is the tallest mountain on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The Atlantic Ocean is the largest ocean in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Jupiter is the smallest planet in our solar system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Gold is a liquid at room temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Earth is flat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Mercury is the closest planet to the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
