export const chapter = "Chapter -23: Story Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What did the cobra eat when the crows went in search of food?",
          optionA: "Fruits",
          optionB: "Eggs",
          optionC: "Insects",
          correctAnswer: "Eggs",
        },
        {
          question:
            "Why were the crows shocked when they returned from searching for food?",
          optionA: "The tree was gone",
          optionB: "The cobra was missing",
          optionC: "Their eggs were missing",
          correctAnswer: "Their eggs were missing",
        },
        {
          question: "How did the cobra grow greedy over time?",
          optionA: "It stole the crows' food",
          optionB: "It ate all the eggs the female crow laid",
          optionC: "It befriended the crows",
          correctAnswer: "It ate all the eggs the female crow laid",
        },
        {
          question:
            "What did the crows steal from the royal bath for their revenge plan?",
          optionA: "Crown",
          optionB: "Necklace",
          optionC: "Ring",
          correctAnswer: "Necklace",
        },
        {
          question: "Where did the crows throw the stolen necklace?",
          optionA: "River",
          optionB: "Forest",
          optionC: "Cobra's hole",
          correctAnswer: "Cobra's hole",
        },
        {
          question:
            "What did the guards do after the crows threw the necklace into the cobra's hole?",
          optionA: "Gave up the chase",
          optionB: "Ignored it",
          optionC: "Dug up the hole",
          correctAnswer: "Dug up the hole",
        },
        {
          question: "How did the cobra meet its end?",
          optionA: "It was killed by the crows",
          optionB: "It was killed by the guards",
          optionC: "It died naturally",
          correctAnswer: "It was killed by the guards",
        },
        {
          question: "What did the crows do after the cobra's death?",
          optionA: "Mourned",
          optionB: "Left the tree",
          optionC: "Lived happily on the same tree",
          correctAnswer: "Lived happily on the same tree",
        },
        {
          question: "Why did the crows want revenge on the cobra?",
          optionA: "The cobra stole their nest",
          optionB: "The cobra killed their friend",
          optionC: "The cobra ate their eggs",
          correctAnswer: "The cobra ate their eggs",
        },
        {
          question: "Where did the cobra live?",
          optionA: "At the top of the tree",
          optionB: "In a burrow",
          optionC: "In a cave",
          correctAnswer: "In a hole at the base of the tree",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "The pair of crows lived on a huge banyan tree, and a ________ lived in a hole at the base of the same tree.",
          options: ["Rabbit", "Cobra", "Squirrel"],
          correctAnswer: "Cobra",
        },
        {
          question:
            "The female crow laid ________, and one morning, when the crows went in search of food, the cobra crawled up the tree and ate them up.",
          options: ["Nuts", "Eggs", "Seeds"],
          correctAnswer: "Eggs",
        },
        {
          question:
            "As days passed, the cobra grew ________. Whenever the female crow laid eggs, the cobra ate them all.",
          options: ["Lazy", "Greedy", "Friendly"],
          correctAnswer: "Greedy",
        },
        {
          question:
            "The crows wanted ________ for the loss of their eggs, so they planned for it.",
          options: ["Justice", "Revenge", "Forgiveness"],
          correctAnswer: "Revenge",
        },
        {
          question:
            "The crows went to the royal bath, and when the queen came to take a bath, they stole her ________ and flew away with it.",
          options: ["Crown", "Necklace", "Bracelet"],
          correctAnswer: "Necklace",
        },
        {
          question: "The crows threw the stolen necklace into the ________.",
          options: ["River", "Forest", "Cobra's hole"],
          correctAnswer: "Cobra's hole",
        },
        {
          question:
            "The guards gave ________ when the crows threw the necklace into the cobra's hole.",
          options: ["Up", "Down", "Chase"],
          correctAnswer: "Chase",
        },
        {
          question: "When the guards dug up the hole, the cobra came ________.",
          options: ["Alive", "Out", "In"],
          correctAnswer: "Out",
        },
        {
          question:
            "The guards killed the cobra and went away with the ________.",
          options: ["Crown", "Necklace", "Ring"],
          correctAnswer: "Necklace",
        },
        {
          question:
            "After the cobra's death, the little crows were able to take ________ on the cobra and lived happily on the same tree.",
          options: ["Flight", "Revenge", "Shelter"],
          correctAnswer: "Revenge",
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
          question: "The pair of crows lived on a mango tree.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The cobra crawled up the tree and ate the crows' eggs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The cobra grew friendly with the crows over time.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The crows stole a crown from the royal bath for their revenge plan.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The crows threw the stolen necklace into the river.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The guards gave up the chase when the crows threw the necklace into the cobra's hole.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The cobra died naturally after the guards dug up its hole.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The little crows mourned after the cobra's death.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The crows' revenge plan was successful.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The crows lived happily on a different tree after the revenge.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
