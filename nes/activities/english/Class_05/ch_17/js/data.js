export const chapter = "Chapter - 17: The Naming Game ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What did the king of Nippon present to the emperor of China?",
          optionA: "A horse",
          optionB: "A cat",
          optionC: "A dog",
          correctAnswer: "A cat",
        },
        {
          question:
            "How many wise ministers did the emperor of China consult to name his cat?",
          optionA: "Four",
          optionB: "Five",
          optionC: "Seven",
          correctAnswer: "Seven",
        },
        {
          question:
            "What was the youngest minister's suggestion for the cat's name?",
          optionA: "Lion",
          optionB: "Tiger",
          optionC: "Panther",
          correctAnswer: "Tiger",
        },
        {
          question: "Why did the second minister suggest the name 'DRAGON'?",
          optionA: "Because dragons can fly",
          optionB: "Because dragons are powerful",
          optionC: "Because dragons are colorful",
          correctAnswer: "Because dragons can fly",
        },
        {
          question: "What name did the third minister suggest for the cat?",
          optionA: "Tiger",
          optionB: "Dragon",
          optionC: "Cloud",
          correctAnswer: "Cloud",
        },
        {
          question: "Why did the fourth minister suggest the name 'WIND'?",
          optionA: "Because winds can move clouds",
          optionB: "Because winds are invisible",
          optionC: "Because winds can destroy brick walls",
          correctAnswer: "Because winds can move clouds",
        },
        {
          question: "What name did the fifth minister suggest for the cat?",
          optionA: "Cloud",
          optionB: "Wind",
          optionC: "Brick Wall",
          correctAnswer: "Brick Wall",
        },
        {
          question: "Why did the sixth minister suggest the name 'RAT'?",
          optionA: "Because rats are small",
          optionB: "Because rats can eat through brick walls",
          optionC: "Because rats are the emperor's favorite animal",
          correctAnswer: "Because rats can eat through brick walls",
        },
        {
          question: "What did the seventh minister argue about naming the cat?",
          optionA: "Cats are mightier than rats",
          optionB: "A rat is mightier than a cat",
          optionC: "The cat should be named 'Dragon'",
          correctAnswer: "Cats are mightier than rats",
        },
        {
          question: "How did the Naming Game end for the emperor's cat?",
          optionA: "It was named 'Brick Wall'",
          optionB: "It remained nameless",
          optionC: "It was named 'Tiger'",
          correctAnswer: "It remained nameless",
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
            "The king of Nippon presented a beautiful _______ to the emperor of China.",
          options: ["dog", "cat", "horse"],
          correctAnswer: "cat",
        },
        {
          question:
            "The emperor called his ministers, the seven _______ men in the empire, to find a suitable name for his pet.",
          options: ["wealthiest", "wisest", "youngest"],
          correctAnswer: "wisest",
        },
        {
          question:
            "The youngest of the group suggested the name '_______' for the cat.",
          options: ["Lion", "Tiger", "Panther"],
          correctAnswer: "Tiger",
        },
        {
          question:
            "The second minister argued that '_______' would be a more suitable name for the cat.",
          options: ["Dog", "Dragon", "Cloud"],
          correctAnswer: "Dragon",
        },
        {
          question:
            "The third minister believed that '_______' was more powerful than a dragon.",
          options: ["Wind", "Cloud", "Rain"],
          correctAnswer: "Cloud",
        },
        {
          question:
            "The fourth wise man suggested that '_______' would be the most appropriate name for the cat.",
          options: ["Dog", "Wind", "Dragon"],
          correctAnswer: "Wind",
        },
        {
          question:
            "The fifth wise man proposed the name '_______' for the cat.",
          options: ["Lion", "Tiger", "Brick Wall"],
          correctAnswer: "Brick Wall",
        },
        {
          question:
            "The sixth minister suggested the name '_______' for the cat.",
          options: ["Tiger", "Dragon", "Rat"],
          correctAnswer: "Rat",
        },
        {
          question: "The emperor was doubtful about naming the cat '_______.'",
          options: ["Tiger", "Wind", "Rat"],
          correctAnswer: "Rat",
        },
        {
          question:
            "The seventh wise man argued that a cat is mightier than a '_______.'",
          options: ["Lion", "Dragon", "Rat"],
          correctAnswer: "Rat",
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
            "The king of Nippon presented a beautiful cat to the emperor of China.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The emperor called his ministers, the seven wisest men in the empire, to name his pet.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The youngest minister suggested naming the cat 'TIGER.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The second minister thought that 'DRAGON' would be a more suitable name for the cat.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The third minister believed that a 'CLOUD' was more powerful than a dragon.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The fourth wise man suggested 'WIND' as the most appropriate name for the cat.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The fifth wise man proposed the name 'BRICK WALL' for the cat.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The sixth minister suggested the name 'RAT' for the cat.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The emperor was doubtful about naming the cat 'RAT.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The seventh wise man argued that a 'CAT' is mightier than a rat.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
