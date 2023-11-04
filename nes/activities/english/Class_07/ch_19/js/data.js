export const chapter = "Chapter - 19: If ...  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "In the given text, what does the speaker emphasize the importance of keeping when others are losing theirs?",
          optionA: "Patience",
          optionB: "Virtue",
          optionC: "Wisdom",
          correctAnswer: "A) Patience",
        },
        {
          question:
            "According to the text, what should one do when all men doubt you?",
          optionA: "Trust yourself",
          optionB: "Confront them",
          optionC: "Ignore them",
          correctAnswer: "A) Trust yourself",
        },
        {
          question:
            "What should you make allowance for, according to the text?",
          optionA: "Doubts",
          optionB: "Criticism",
          optionC: "Compliments",
          correctAnswer: "A) Doubts",
        },
        {
          question:
            "According to the text, what should you not do when being lied about?",
          optionA: "Confront the liar",
          optionB: "Deal in lies",
          optionC: "Remain silent",
          correctAnswer: "B) Deal in lies",
        },
        {
          question:
            "What is the advice regarding responding to hatred in the text?",
          optionA: "Give way to hating",
          optionB: "Respond with kindness",
          optionC: "Do not give way to hating",
          correctAnswer: "C) Do not give way to hating",
        },
        {
          question:
            "What should you avoid looking like and talking like, according to the text?",
          optionA: "Wise and good",
          optionB: "Foolish and bad",
          optionC: "Arrogant and boastful",
          correctAnswer: "A) Wise and good",
        },
        {
          question:
            "According to the text, what should you not make your master?",
          optionA: "Dreams",
          optionB: "Thoughts",
          optionC: "Desires",
          correctAnswer: "A) Dreams",
        },
        {
          question: "How does the text describe triumph and disaster?",
          optionA: "As inevitable",
          optionB: "As impostors",
          optionC: "As life's challenges",
          correctAnswer: "B) As impostors",
        },
        {
          question:
            "What should you do when the truth you've spoken is twisted by knaves, according to the text?",
          optionA: "Retaliate",
          optionB: "Make a trap for fools",
          optionC: "Bear to hear it",
          correctAnswer: "C) Bear to hear it",
        },
        {
          question:
            "In the text, what is the ultimate reward for following the described principles?",
          optionA: "Worldly success",
          optionB: "Happiness",
          optionC: "Mastery and character development",
          correctAnswer: "C) Mastery and character development",
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
            "If you can keep your _____ when all about you Are losing theirs and blaming it on you;",
          options: ["composure", "head", "mind"],
          correctAnswer: "head",
        },
        {
          question:
            "Are losing theirs and blaming it on you; If you can trust yourself when all men _____ you,",
          options: ["believe", "doubt", "admire"],
          correctAnswer: "doubt",
        },
        {
          question: "But make allowance for their doubting _____;",
          options: ["as well", "too", "also"],
          correctAnswer: "too",
        },
        {
          question: "If you can wait and not be tired by _____;",
          options: ["resting", "running", "waiting"],
          correctAnswer: "waiting",
        },
        {
          question: "Or, being lied about, don't deal in _____;",
          options: ["truths", "lies", "stories"],
          correctAnswer: "lies",
        },
        {
          question: "Or being hated don't give way to _____;",
          options: ["love", "indifference", "hating"],
          correctAnswer: "hating",
        },
        {
          question: "And yet don't look too good, nor talk too _____;",
          options: ["much", "wisely", "boastfully"],
          correctAnswer: "wisely",
        },
        {
          question: "If you can dream-and not make dream your _____;",
          options: ["reality", "fantasy", "master"],
          correctAnswer: "master",
        },
        {
          question:
            "If you can meet with triumph and disaster and treat those two impostors just the _____;",
          options: ["same", "differently", "equally"],
          correctAnswer: "same",
        },
        {
          question:
            "What should you do when the truth you've spoken is twisted by knaves, according to the text?",
          options: ["Retaliate", "Make a trap for fools", "Bear to hear it"],
          correctAnswer: "Bear to hear it",
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
          question:
            "The speaker in the text emphasizes the importance of patience and self-trust.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The text suggests that it's acceptable to deal in lies when being lied about.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "According to the text, it is advisable to give way to hating when being hated.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The text advises looking too good and talking too wisely.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The text encourages making dreams your master.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Triumph and disaster are described as impostors in the text.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The text suggests retaliating when the truth you've spoken is twisted by knaves.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The ultimate reward for following the described principles in the text is worldly success.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The text implies that the traveler met a beautiful child on his journey.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The speaker in the text advocates losing patience when all about you are losing theirs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
