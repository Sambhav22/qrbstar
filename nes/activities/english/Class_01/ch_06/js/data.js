export const chapter = "Chapter - 6: 'u' Sound";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What does the duck do in the text?",
        optionA: "Peck at the bun",
        optionB: "Pull the bus",
        optionC: "Run in the ground",
        correctAnswer: "Peck at the bun",
      },
      {
        question: "How does the camel walk in the text?",
        optionA: "With a hump",
        optionB: "With a bump",
        optionC: "With a cub",
        correctAnswer: "With a bump",
      },
      {
        question: "What did the bull do in the text?",
        optionA: "Run in the ground",
        optionB: "Pulled the bus",
        optionC: "Pecked at the bun",
        correctAnswer: "Pulled the bus",
      },
      {
        question: "Who jumped over the gun in the text?",
        optionA: "Rumy",
        optionB: "The pup",
        optionC: "A hunter",
        correctAnswer: "A hunter",
      },
      {
        question: "What did Rumy name her pup in the text?",
        optionA: "Drup",
        optionB: "Cub",
        optionC: "Bun",
        correctAnswer: "Drup",
      },
      {
        question: "How did the pup respond when Rumy asked it to run?",
        optionA: "It ran with full speed",
        optionB: "It shook its head and looked at the bun",
        optionC: "It ignored Rumy",
        correctAnswer: "It shook its head and looked at the bun",
      },
      {
        question: "What did Rumy and her pup play with in the text?",
        optionA: "A cub",
        optionB: "A hump",
        optionC: "A bun",
        correctAnswer: "A bun",
      },
      {
        question: "What did the text describe the pup as?",
        optionA: "A hunter",
        optionB: "A cub",
        optionC: "A bull",
        correctAnswer: "A cub",
      },
      {
        question: "Where did the pup run in the text?",
        optionA: "In the ground",
        optionB: "In the bush",
        optionC: "In the bus",
        correctAnswer: "In the bush",
      },
      {
        question: "What does the text describe the pup as looking like?",
        optionA: "A lion",
        optionB: "A cub",
        optionC: "A hump",
        correctAnswer: "A cub",
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
          "Rumy played with her _______________ which looked like a cub.",
        optionA: "puppy",
        optionB: "friend",
        optionC: "ball",
        correctAnswer: "puppy",
      },
      {
        question: 'She said, "Pup! Your name is _______. Now run."',
        optionA: "Drup",
        optionB: "Hump",
        optionC: "Cub",
        correctAnswer: "Drup",
      },
      {
        question: "The pup shook its head and looked at the ___________.",
        optionA: "sky",
        optionB: "ground",
        optionC: "bun",
        correctAnswer: "bun",
      },
      {
        question: '"You will get the bun only if you _______," said Rumy.',
        optionA: "jump",
        optionB: "sit",
        optionC: "run",
        correctAnswer: "run",
      },
      {
        question: "The pup ran in the _______ with full speed.",
        optionA: "bush",
        optionB: "park",
        optionC: "river",
        correctAnswer: "bush",
      },
      {
        question: "Rumy played with her puppy, which looked like a _______.",
        optionA: "bear",
        optionB: "cub",
        optionC: "lion",
        correctAnswer: "cub",
      },
      {
        question: "The duck is _______ at the bun.",
        optionA: "sleeping",
        optionB: "pecking",
        optionC: "dancing",
        correctAnswer: "pecking",
      },
      {
        question: "The bull _______ the bus.",
        optionA: "pushed",
        optionB: "pulled",
        optionC: "kicked",
        correctAnswer: "pulled",
      },
      {
        question: "A hunter _______ over the gun.",
        optionA: "jumped",
        optionB: "crawled",
        optionC: "slept",
        correctAnswer: "jumped",
      },
      {
        question: "The camel had a hump and walked with a _______.",
        optionA: "skip",
        optionB: "jump",
        optionC: "bump",
        correctAnswer: "bump",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The duck pecked at the bun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Rumy's pup looked like a cub.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The bull had a hump.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Rumy wanted her pup to jump over the gun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The camel walked gracefully.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The hunter ran in the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The pup ran in the bush with full speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Rumy's pup received a bun for running.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The pup's name was Bun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The duck pulled the bus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
