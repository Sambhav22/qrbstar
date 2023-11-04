export const chapter = "Chapter - 5: 'o' Sound";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What action should you take to enter a room with a locked door?",
        optionA: "Knock on the door",
        optionB: "Open the lock and push the door",
        optionC: "Wait for someone to open the door",
        correctAnswer: "Open the lock and push the door",
      },
      {
        question: "What did the king's crown do?",
        optionA: "Flew away",
        optionB: "Fell down",
        optionC: "Sparkled brightly",
        correctAnswer: "Fell down",
      },
      {
        question: "How did she clean her nose?",
        optionA: "With her hand",
        optionB: "With a cloth",
        optionC: "With a tissue",
        correctAnswer: "With a cloth",
      },
      {
        question: "When does Mother mop the floor?",
        optionA: "In the morning",
        optionB: "At noon",
        optionC: "In the evening",
        correctAnswer: "At noon",
      },
      {
        question: "Where did the cock crow?",
        optionA: "In the afternoon",
        optionB: "In the evening",
        optionC: "In the morning",
        correctAnswer: "In the morning",
      },
      {
        question: "What did Golu do after getting up?",
        optionA: "Ate breakfast",
        optionB: "Called his friends",
        optionC: "Went to school",
        correctAnswer: "Called his friends",
      },
      {
        question: "What did Golu and his friends do after he called them?",
        optionA: "Watched TV",
        optionB: "Went to the playground",
        optionC: "Played video games",
        correctAnswer: "Went to the playground",
      },
      {
        question: "What sport did Golu play with his friends?",
        optionA: "Cricket",
        optionB: "Basketball",
        optionC: "Football",
        correctAnswer: "Football",
      },
      {
        question: "What happened to Golu's team in the football game?",
        optionA: "They won by one goal",
        optionB: "They tied the game",
        optionC: "They were defeated by one goal",
        correctAnswer: "They were defeated by one goal",
      },
      {
        question: "What was the emotion described as 'Joy in the Ground'?",
        optionA: "Sadness",
        optionB: "Happiness",
        optionC: "Surprise",
        correctAnswer: "Happiness",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Open the lock and ______ the door.",
        optionA: "pull",
        optionB: "push",
        optionC: "close",
        correctAnswer: "push",
      },
      {
        question: "The king's crown ______ down.",
        optionA: "flew",
        optionB: "fell",
        optionC: "sparkled",
        correctAnswer: "fell",
      },
      {
        question: "She cleaned her nose with a ______.",
        optionA: "tissue",
        optionB: "hand",
        optionC: "book",
        correctAnswer: "tissue",
      },
      {
        question: "Mother mops the floor at ______.",
        optionA: "night",
        optionB: "noon",
        optionC: "morning",
        correctAnswer: "noon",
      },
      {
        question: "The cock ______ in the morning.",
        optionA: "sang",
        optionB: "crowed",
        optionC: "flew",
        correctAnswer: "crowed",
      },
      {
        question: "Golu got ______.",
        optionA: "tired",
        optionB: "sad",
        optionC: "up",
        correctAnswer: "up",
      },
      {
        question: "He called his friends and went to the ______.",
        optionA: "park",
        optionB: "school",
        optionC: "playground",
        correctAnswer: "playground",
      },
      {
        question: "He played ______ with them.",
        optionA: "chess",
        optionB: "soccer",
        optionC: "video games",
        correctAnswer: "soccer",
      },
      {
        question: "He could not stop the ______.",
        optionA: "rain",
        optionB: "ball",
        optionC: "wind",
        correctAnswer: "ball",
      },
      {
        question: "His team was defeated by one ______.",
        optionA: "goal",
        optionB: "point",
        optionC: "basket",
        correctAnswer: "goal",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Did the king's crown fall down?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Did Golu get up?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Did Golu's team win the football game?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Did the cock crow in the evening?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Did Mother mop the floor in the morning?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Did she clean her nose with a book?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Did Golu play chess with his friends?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Did the kid go to the park with his father?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Did Little Kiran sing beautifully?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Did she smile and say thank you when complimented?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
