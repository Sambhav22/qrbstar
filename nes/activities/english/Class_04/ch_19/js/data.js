export const chapter = "Chapter - 19: The Bear and I";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What did the narrator encounter the other day?",
          optionA: "A rabbit",
          optionB: "A bear",
          optionC: "A squirrel",
          correctAnswer: "A bear",
        },
        {
          question: "Where did the bear appear?",
          optionA: "In the narrator's house",
          optionB: "Up in a tree",
          optionC: "In a cave",
          correctAnswer: "Up in a tree",
        },
        {
          question:
            "How did the bear and the narrator initially react to each other?",
          optionA: "They both ran away",
          optionB: "They stared at each other",
          optionC: "They had a friendly conversation",
          correctAnswer: "They stared at each other",
        },
        {
          question: "What did the bear say to the narrator?",
          optionA: "Let's be friends.",
          optionB: "You should climb the tree.",
          optionC: "Why don't you run?",
          correctAnswer: "Why don't you run?",
        },
        {
          question: "Why did the narrator start running away from the bear?",
          optionA: "The bear challenged the narrator to a race.",
          optionB: "The bear had a gun.",
          optionC: "The bear told the narrator to run.",
          correctAnswer: "The bear told the narrator to run.",
        },
        {
          question:
            "What obstacle did the narrator encounter while running from the bear?",
          optionA: "A river",
          optionB: "A mountain",
          optionC: "A tree",
          correctAnswer: "A tree",
        },
        {
          question:
            "How high was the lowest branch of the tree the narrator had to jump to?",
          optionA: "Five feet",
          optionB: "Ten feet",
          optionC: "Fifteen feet",
          correctAnswer: "Ten feet",
        },
        {
          question:
            "What happened when the narrator jumped into the air to reach the tree branch?",
          optionA: "They missed the branch and fell to the ground.",
          optionB: "They grabbed the branch on the first try.",
          optionC: "They landed on the bear.",
          correctAnswer: "They missed the branch and fell to the ground.",
        },
        {
          question:
            "How did the narrator eventually reach the branch they missed?",
          optionA: "They didn't reach the branch.",
          optionB: "They used a ladder.",
          optionC: "They caught it on the way back down.",
          correctAnswer: "They caught it on the way back down.",
        },
        {
          question:
            "What does the narrator hint at in the last line of the poem?",
          optionA: "They won't meet the bear again.",
          optionB: "They hope to have a rematch with the bear.",
          optionC: "They are excited to see the bear soon.",
          correctAnswer: "They hope to have a rematch with the bear.",
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
          question: "The other day I met a _______ bear.",
          options: ["friendly", "great big", "tiny"],
          correctAnswer: "great big",
        },
        {
          question: "He said to me, 'Why don't you _______?",
          options: ["walk", "run", "hide"],
          correctAnswer: "run",
        },
        {
          question: "The lowest branch was _______ feet high.",
          options: ["five", "ten", "fifteen"],
          correctAnswer: "ten",
        },
        {
          question: "I had to jump and trust my _______.",
          options: ["luck", "bear", "speed"],
          correctAnswer: "luck",
        },
        {
          question: "And missed that branch way up _______.",
          options: ["here", "there", "above"],
          correctAnswer: "there",
        },
        {
          question: "I caught that branch on the way back _______.",
          options: ["up", "down", "sideways"],
          correctAnswer: "down",
        },
        {
          question: "The narrator's encounter with the bear ended _______.",
          options: ["sadly", "strangely", "humorously"],
          correctAnswer: "humorously",
        },
        {
          question:
            "The narrator's experience with the bear left them wanting to meet the bear _______.",
          options: ["never again", "every day", "tomorrow"],
          correctAnswer: "soon",
        },
        {
          question: "The narrator and the bear both _______ each other.",
          options: ["avoided", "ignored", "sized up"],
          correctAnswer: "sized up",
        },
        {
          question: "That's all there is, there is no _______.",
          options: ["bear", "more", "tree"],
          correctAnswer: "more",
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
          question: "The bear in the story was small.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The narrator ran away from the bear as soon as they saw it.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The lowest branch of the tree was twenty feet high.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The bear suggested that the narrator climb the tree.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The narrator successfully caught the tree branch on the first try.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The encounter with the bear ended tragically.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The narrator has no intention of meeting the bear again.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The narrator and the bear sized each other up.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The narrator caught the tree branch on the way back up.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The story implies that the bear and the narrator became friends.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
