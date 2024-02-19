export const chapter = "Chapter - 25:  Story Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What were the two boys doing when they saw the bear in the forest?",
          optionA: "Fishing",
          optionB: "Travelling",
          optionC: "Playing cricket",
          correctAnswer: "Travelling",
        },
        {
          question: "How did one of the boys escape from the bear?",
          optionA: "By running away",
          optionB: "By climbing a tree",
          optionC: "By playing dead",
          correctAnswer: "By climbing a tree",
        },
        {
          question: "What did the other boy do when he saw the bear?",
          optionA: "Climbed a tree",
          optionB: "Ran away",
          optionC: "Laid on the ground and stopped his breath",
          correctAnswer: "Laid on the ground and stopped his breath",
        },
        {
          question:
            "What did the bear do when it approached the boy who laid on the ground?",
          optionA: "Attacked him",
          optionB: "Sniffed him and thought he was dead",
          optionC: "Ran away",
          correctAnswer: "Sniffed him and thought he was dead",
        },
        {
          question: "What did the bear do after thinking the boy was dead?",
          optionA: "Attacked him",
          optionB: "Went away",
          optionC: "Climbed the tree",
          correctAnswer: "Went away",
        },
        {
          question: "What lesson does the story convey?",
          optionA: "Trust everyone",
          optionB: "Rely on false friends",
          optionC: "Be cautious in choosing friends",
          correctAnswer: "Be cautious in choosing friends",
        },
        {
          question: "What did the boys do together in the village?",
          optionA: "Played video games",
          optionB: "Worked together",
          optionC: "Watched movies",
          correctAnswer: "Worked together",
        },
        {
          question: "How did the boy who climbed the tree save his life?",
          optionA: "By playing dead",
          optionB: "By running away",
          optionC: "By climbing a tree",
          correctAnswer: "By climbing a tree",
        },
        {
          question:
            "What was the bear's initial reaction when it approached the boy on the ground?",
          optionA: "Attacked him",
          optionB: "Sniffed him and thought he was dead",
          optionC: "Ran away",
          correctAnswer: "Sniffed him and thought he was dead",
        },
        {
          question: "What is the main message of the story?",
          optionA: "Always trust your friends",
          optionB: "Friendship can save lives",
          optionC: "Avoid forests to stay safe",
          correctAnswer: "Friendship can save lives",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question: "Once there lived ________ boys in a village.",
            options: ["a) one", "b) two", "c) three"],
            answer: "b) two",
          },
          {
            question: "The two boys were very ________ friends.",
            options: ["a) distant", "b) close", "c) unfamiliar"],
            answer: "b) close",
          },
          {
            question: "They did ________ work together.",
            options: ["a) some", "b) every", "c) no"],
            answer: "b) every",
          },
          {
            question: "Once they were ________ through a forest.",
            options: ["a) playing", "b) travelling", "c) swimming"],
            answer: "b) travelling",
          },
          {
            question: "The bear was ________ towards them.",
            options: ["a) running", "b) coming", "c) hiding"],
            answer: "b) coming",
          },
          {
            question: "One boy ran towards a ________ and climbed up it.",
            options: ["a) rock", "b) tree", "c) river"],
            answer: "b) tree",
          },
          {
            question: "The other boy did not know how to climb up a ________.",
            options: ["a) mountain", "b) tree", "c) building"],
            answer: "b) tree",
          },
          {
            question: "He laid on the ________ and stopped his breath.",
            options: ["a) grass", "b) ground", "c) sand"],
            answer: "b) ground",
          },
          {
            question: "The bear came near the boy and ________ him.",
            options: ["a) hugged", "b) sniffed", "c) ignored"],
            answer: "b) sniffed",
          },
          {
            question: "It thought the boy was ________. So, it went away.",
            options: ["a) sleeping", "b) alive", "c) dead"],
            answer: "c) dead",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "The two boys in the village were distant friends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The boys did some work together in the village.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The bear ran away when it saw the boy climbing a tree.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The other boy knew how to climb up a tree.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The boy on the ground pretended to be dead to fool the bear.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The bear sniffed the boy on the ground and thought he was alive.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The story suggests always trusting your friends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The boys played video games together in the village.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The boy who climbed the tree saved his life by running away.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The bear thought the boy on the ground was dead and left.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
