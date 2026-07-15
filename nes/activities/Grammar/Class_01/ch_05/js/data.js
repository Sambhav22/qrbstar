export const chapter = "Chapter - 5: Singular and Plural";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which term describes 'more than one'?",
            options: ["Singular", "Plural", "Countable"],
            answer: "Plural",
          },
          {
            question: "What do we add to a word to make it plural?",
            options: ["-ed", "-ing", "-s or -es"],
            answer: "-s or -es",
          },
          {
            question:
              "Which of the following is an example of a singular noun?",
            options: ["three flowers", "a flower", "many flowers"],
            answer: "a flower",
          },
          {
            question: "Which category includes nouns like 'pencil' and 'pen'?",
            options: ["Uncountable nouns", "Plural nouns", "Countable nouns"],
            answer: "Countable nouns",
          },
          {
            question: "What is an example of an uncountable noun?",
            options: ["pencil", "bottle", "water"],
            answer: "water",
          },
          {
            question: "What defines a noun as countable or uncountable?",
            options: ["Its size", "Its shape", "Its ability to be counted"],
            answer: "Its ability to be counted",
          },
          {
            question:
              "Which suffix do we use to indicate plural in most cases?",
            options: ["-ed", "-ing", "-s or -es"],
            answer: "-s or -es",
          },
          {
            question: "Which term represents 'one'?",
            options: ["Plural", "Singular", "Countable"],
            answer: "Singular",
          },
          {
            question: "Which word can be made plural by adding 's'?",
            options: ["bag", "tree", "sand"],
            answer: "bag",
          },
          {
            question: "What is the plural form of 'car'?",
            options: ["cars", "caring", "carres"],
            answer: "cars",
          },
        ],
      },
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
            question: "We add __________ to make nouns plural.",
            options: ["-ed", "-s or -es", "-ing"],
            answer: "-s or -es",
          },
          {
            question: "Singular nouns refer to _________.",
            options: ["more than one", "countable objects", "one object"],
            answer: "one object",
          },
          {
            question: "Uncountable nouns cannot be _________.",
            options: ["seen", "counted", "touched"],
            answer: "counted",
          },
          {
            question: "Countable nouns can be __________.",
            options: ["measured", "plural", "counted"],
            answer: "counted",
          },
          {
            question:
              "Some nouns like 'pencil' and 'pen' belong to the category of _________.",
            options: ["uncountable nouns", "plural nouns", "countable nouns"],
            answer: "countable nouns",
          },
          {
            question: "Plural nouns often end with _________.",
            options: ["-ing", "-es", "-ful"],
            answer: "-es",
          },
          {
            question: "___________ nouns cannot be quantified numerically.",
            options: ["Uncountable", "Plural", "Singular"],
            answer: "Uncountable",
          },
          {
            question: "Countable nouns are objects that can be _________.",
            options: ["described", "counted", "weighed"],
            answer: "counted",
          },
          {
            question: "'Water' and 'sand' are examples of ___________ nouns.",
            options: ["plural", "singular", "uncountable"],
            answer: "uncountable",
          },
          {
            question: "To form the plural of a noun, we usually add _________.",
            options: ["-ing", "-ed", "-s or -es"],
            answer: "-s or -es",
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
      {
        questions: [
          {
            question: "Singular nouns always end with '-s' or '-es'.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Uncountable nouns cannot be quantified numerically.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Plural nouns refer to more than one object.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "All nouns that can be counted are called countable nouns.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Countable nouns can't be measured or quantified.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Words like 'pencil' and 'pen' are considered uncountable nouns.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The plural of 'tree' is 'trees'.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "All uncountable nouns end with '-s'.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Countable nouns can't be described or identified.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Uncountable nouns can't be counted individually.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
