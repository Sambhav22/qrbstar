export const chapter = "Chapter - 12: Use of 'Was' and 'Were'";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which of the following sentences uses 'was' correctly?",
            options: [
              "They was playing in the yard.",
              "He was eating his lunch.",
              "She were reading a book.",
            ],
            answer: "He was eating his lunch.",
          },
          {
            question: "Choose the sentence that uses 'were' appropriately:",
            options: [
              "You was singing beautifully.",
              "We were at the party last night.",
              "He were excited about the movie.",
            ],
            answer: "We were at the party last night.",
          },
          {
            question: "Which sentence demonstrates the correct usage of 'was'?",
            options: [
              "It were a sunny day.",
              "The cat was sleeping on the couch.",
              "They was studying for the exam.",
            ],
            answer: "The cat was sleeping on the couch.",
          },
          {
            question: "Select the sentence with the accurate use of 'were':",
            options: [
              "She was studying for her test.",
              "We were playing soccer in the park.",
              "He were cooking dinner for his family.",
            ],
            answer: "We were playing soccer in the park.",
          },
          {
            question: "Which sentence shows the proper usage of 'was'?",
            options: [
              "You were invited to the party.",
              "The dog was chasing its tail.",
              "They were working on their project.",
            ],
            answer: "The dog was chasing its tail.",
          },
          {
            question:
              "Identify the sentence where 'were' is correctly applied:",
            options: [
              "I was reading a magazine.",
              "They were going on a road trip.",
              "She was practicing the piano.",
            ],
            answer: "They were going on a road trip.",
          },
          {
            question: "Choose the sentence that utilizes 'was' correctly:",
            options: [
              "We were watching a movie at home.",
              "The flowers was blooming in the garden.",
              "He were driving to the store.",
            ],
            answer: "We were watching a movie at home.",
          },
          {
            question:
              "Which sentence demonstrates the accurate usage of 'were'?",
            options: [
              "She was riding her bike in the park.",
              "They were playing video games together.",
              "It was a cloudy day yesterday.",
            ],
            answer: "They were playing video games together.",
          },
          {
            question: "Select the sentence with the proper use of 'was':",
            options: [
              "We were having dinner with friends.",
              "He was fixing his computer.",
              "They were going for a walk in the evening.",
            ],
            answer: "He was fixing his computer.",
          },
          {
            question: "Identify the sentence where 'were' is used correctly:",
            options: [
              "It was a stormy night.",
              "You were invited to the event.",
              "She was reading a storybook.",
            ],
            answer: "You were invited to the event.",
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
            question: "The child _____ in the park.",
            options: ["were", "was", "is"],
            answer: "was",
          },
          {
            question: "They _____ upset.",
            options: ["was", "were", "are"],
            answer: "were",
          },
          {
            question: "It _____ raining yesterday.",
            options: ["are", "were", "was"],
            answer: "was",
          },
          {
            question: "The cat _____ sleeping on the couch.",
            options: ["were", "was", "is"],
            answer: "was",
          },
          {
            question: "We _____ going to school.",
            options: ["were", "was", "is"],
            answer: "were",
          },
          {
            question: "She _____ reading a book.",
            options: ["is", "were", "was"],
            answer: "was",
          },
          {
            question: "You _____ invited to the party.",
            options: ["were", "is", "was"],
            answer: "were",
          },
          {
            question: "The dog _____ chasing its tail.",
            options: ["is", "were", "was"],
            answer: "was",
          },
          {
            question: "He _____ cooking dinner for his family.",
            options: ["were", "is", "was"],
            answer: "was",
          },
          {
            question: "They _____ working on their project.",
            options: ["is", "were", "are"],
            answer: "were",
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
            question: "Water boils at 100 degrees Celsius.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The Earth is the largest planet in our solar system.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Plants perform photosynthesis to produce oxygen.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Diamonds are formed from coal under extreme pressure.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Mount Everest is the tallest mountain above sea level.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The Pacific Ocean is the smallest ocean on Earth.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "All mammals lay eggs for reproduction.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A square has four right angles.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The moon orbits the Earth.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Oxygen makes up the majority of the Earth's atmosphere.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
