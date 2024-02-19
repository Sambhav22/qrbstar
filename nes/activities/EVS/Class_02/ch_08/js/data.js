export const chapter = "Chapter - 8: Animal's World ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "Where can animals like giraffe, tiger, lion, hippopotamus, panda, and monkey be seen?",
          optionA: "In the mountains",
          optionB: "In the zoo",
          optionC: "In the deserts",
          correctAnswer: "In the zoo",
        },
        {
          question:
            "What is the natural home of wild animals like giraffe, tiger, and lion?",
          optionA: "Farms",
          optionB: "Seas",
          optionC: "Forests",
          correctAnswer: "Forests",
        },
        {
          question:
            "Which of the following animals are considered domestic animals?",
          optionA: "Giraffe and lion",
          optionB: "Cow and goat",
          optionC: "Panda and monkey",
          correctAnswer: "Cow and goat",
        },
        {
          question:
            "What day is it suggested to go out and visit the zoo in the text?",
          optionA: "Monday",
          optionB: "Saturday",
          optionC: "Sunday",
          correctAnswer: "Sunday",
        },
        {
          question:
            "What do we get from animals, such as cows, goats, and sheep?",
          optionA: "Fruits",
          optionB: "Milk, eggs, flesh, wool, etc.",
          optionC: "Vegetables",
          correctAnswer: "Milk, eggs, flesh, wool, etc.",
        },
        {
          question: "How should we treat animals according to the text?",
          optionA: "Be cruel to them",
          optionB: "Ignore them",
          optionC: "Treat them with love and care",
          correctAnswer: "Treat them with love and care",
        },
        {
          question:
            "What is suggested to keep pet and domestic animals healthy in the text?",
          optionA: "Take them for proper medical check-ups regularly",
          optionB: "Feed them only once a week",
          optionC: "Never clean their living spaces",
          correctAnswer: "Take them for proper medical check-ups regularly",
        },
        {
          question: "Which animals are mentioned as living in farms?",
          optionA: "Giraffe, tiger, lion",
          optionB: "Cow, goat, sheep, hen, horse",
          optionC: "Panda, monkey, hippopotamus",
          correctAnswer: "Cow, goat, sheep, hen, horse",
        },
        {
          question:
            "Why are forests mentioned as important for certain animals in the text?",
          optionA: "Because they are scary",
          optionB: "Because they are their natural home",
          optionC: "Because they are noisy",
          correctAnswer: "Because they are their natural home",
        },
        {
          question: "What day is suggested to visit the zoo in the text?",
          optionA: "Friday",
          optionB: "Saturday",
          optionC: "Sunday",
          correctAnswer: "Sunday",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "Like us, animals also live on the _______.",
          optionA: "Sky",
          optionB: "Earth",
          optionC: "Moon",
          correctAnswer: "Earth",
        },
        {
          question:
            "Animals like giraffe, tiger, lion, hippopotamus, panda, monkey, etc. can be seen in the _______.",
          optionA: "Farm",
          optionB: "Zoo",
          optionC: "Forest",
          correctAnswer: "Zoo",
        },
        {
          question: "Forests are the _______ home for many wild animals.",
          optionA: "Temporary",
          optionB: "Natural",
          optionC: "Artificial",
          correctAnswer: "Natural",
        },
        {
          question:
            "Some animals like cow, goat, sheep, hen, horse, etc. are kept in _______.",
          optionA: "Zoos",
          optionB: "Farms",
          optionC: "Forests",
          correctAnswer: "Farms",
        },
        {
          question: "Animals are our true _______.",
          optionA: "Enemies",
          optionB: "Friends",
          optionC: "Pets",
          correctAnswer: "Friends",
        },
        {
          question:
            "We get many things from animals, such as milk, eggs, flesh, wool, etc. Animals cannot _______.",
          optionA: "Speak",
          optionB: "Fly",
          optionC: "Swim",
          correctAnswer: "Speak",
        },
        {
          question:
            "To take care of them, we should keep our pet and domestic animals _______.",
          optionA: "Dirty",
          optionB: "Tied",
          optionC: "Clean",
          correctAnswer: "Clean",
        },
        {
          question: "We should treat animals with _______ and care.",
          optionA: "Neglect",
          optionB: "Cruelty",
          optionC: "Love",
          correctAnswer: "Love",
        },
        {
          question:
            "Animals like giraffe, tiger, lion, etc. are known as _______ animals.",
          optionA: "Tame",
          optionB: "Domestic",
          optionC: "Wild",
          correctAnswer: "Wild",
        },
        {
          question:
            "It is suggested to take pet and domestic animals for proper medical check-ups _______.",
          optionA: "Occasionally",
          optionB: "Regularly",
          optionC: "Never",
          correctAnswer: "Regularly",
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
            "Animals like giraffe, tiger, lion, hippopotamus, panda, monkey, etc. can be seen in the zoo.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Forests are the natural home for many wild animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Some animals like cow, goat, sheep, hen, horse, etc. are kept in zoos.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "We get fruits and vegetables from animals like cows and goats.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Animals can speak, so we should communicate with them verbally.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Domestic animals should be kept clean, provided with proper food, and taken for medical check-ups.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Wild animals are often found in seas, mountains, and deserts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Sunday is suggested as a good day to visit the zoo.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Animals are considered our true enemies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Taking domestic animals for regular medical check-ups is unnecessary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
