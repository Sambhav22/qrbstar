export const chapter = "Chapter - 27: Story Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            'What did the king declare for the courtier in "The Clever Courtier"?',
          optionA: "Banishment",
          optionB: "Death penalty",
          optionC: "Imprisonment",
          correctAnswer: "Death penalty",
        },
        {
          question:
            "How did the courtier respond when given the opportunity to decide the mode of his death?",
          optionA: "Requested a quick death",
          optionB: "Asked for a painless death",
          optionC: "Chose to die of old age",
          correctAnswer: "Chose to die of old age",
        },
        {
          question:
            "Why did the king let the courtier go despite his misuse of the concession?",
          optionA: "He felt sorry for the courtier",
          optionB: "He admired the courtier's wit",
          optionC: "The courtier promised to serve the king",
          correctAnswer: "He admired the courtier's wit",
        },
        {
          question:
            'Where was the woodcutter cutting wood in "The Woodcutter and His Axe"?',
          optionA: "Mountains",
          optionB: "Forest",
          optionC: "Riverbank",
          correctAnswer: "Riverbank",
        },
        {
          question: "What happened to the woodcutter's axe in the story?",
          optionA: "It broke",
          optionB: "It got stolen",
          optionC: "It fell into the river",
          correctAnswer: "It fell into the river",
        },
        {
          question:
            'Who appeared to help the woodcutter in "The Woodcutter and His Axe"?',
          optionA: "A wizard",
          optionB: "An angel",
          optionC: "A fellow woodcutter",
          correctAnswer: "An angel",
        },
        {
          question:
            "How many times did the angel dive into the river to retrieve an axe?",
          optionA: "Once",
          optionB: "Twice",
          optionC: "Three times",
          correctAnswer: "Three times",
        },
        {
          question:
            "What was the material of the first axe brought by the angel?",
          optionA: "Gold",
          optionB: "Silver",
          optionC: "Iron",
          correctAnswer: "Gold",
        },
        {
          question: "Why did the woodcutter reject the gold and silver axes?",
          optionA: "He wanted a wooden axe",
          optionB: "He preferred iron",
          optionC: "He already had a gold axe",
          correctAnswer: "He preferred iron",
        },
        {
          question:
            "What did the angel give to the woodcutter as a reward for his honesty?",
          optionA: "A bag of gold",
          optionB: "Three axes",
          optionC: "A magic spell",
          correctAnswer: "Three axes",
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
            "One day, the king declared the __________ for the courtier due to his annoyance.",
          options: ["Banishment", "Life imprisonment", "Death penalty"],
          correctAnswer: "Death penalty",
        },
        {
          question:
            "The courtier pleaded greatly, but his pleas had no __________ on the king.",
          options: ["Effect", "Impact", "Influence"],
          correctAnswer: "Effect",
        },
        {
          question:
            "The king allowed some __________ to the courtier after declaring the death penalty.",
          options: ["Rewards", "Concession", "Pardon"],
          correctAnswer: "Concession",
        },
        {
          question:
            "The king allowed the courtier to decide the mode of his __________.",
          options: ["Life", "Death", "Punishment"],
          correctAnswer: "Death",
        },
        {
          question: "The courtier expressed his desire to die of __________.",
          options: ["Illness", "Old age", "Accidents"],
          correctAnswer: "Old age",
        },
        {
          question:
            "The angel dived into the river and brought out a __________ axe.",
          options: ["Gold", "Silver", "Iron"],
          correctAnswer: "Gold",
        },
        {
          question:
            "The woodcutter rejected the gold axe, stating that it did not __________ to him.",
          options: ["Belong", "Suit", "Fit"],
          correctAnswer: "Belong",
        },
        {
          question:
            "The angel brought out a silver axe, but the woodcutter claimed it did not __________ to him either.",
          options: ["Match", "Pertain", "Belong"],
          correctAnswer: "Belong",
        },
        {
          question:
            "The woodcutter happily accepted the __________ axe as it belonged to him.",
          options: ["Gold", "Silver", "Iron"],
          correctAnswer: "Iron",
        },
        {
          question:
            "The angel rewarded the woodcutter with all three axes for his __________.",
          options: ["Honesty", "Cleverness", "Intelligence"],
          correctAnswer: "Honesty",
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
            "The king declared a reward for the courtier due to his annoyance.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The courtier's pleas had a significant impact on the king's decision.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The king allowed the courtier to choose the mode of his punishment.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The courtier expressed a desire to die of old age.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The woodcutter's axe fell into the river while cutting wood.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The angel retrieved a wooden axe from the river.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The woodcutter claimed the gold axe belonged to him.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The angel rewarded the woodcutter with only one axe for his honesty.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The woodcutter rejected the silver axe, stating it belonged to him.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The king admired the courtier's wit and honesty.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
