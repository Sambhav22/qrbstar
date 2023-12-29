export const chapter = "Chapter -13: The Promise ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is Mahatma Gandhi lovingly called?",
        optionA: "Bapu",
        optionB: "Uncle",
        optionC: "Kalyan",
        correctAnswer: "Bapu",
      },
      {
        question:
          "In which country did Mahatma Gandhi build an ashram when he was in South Africa?",
        optionA: "India",
        optionB: "South Africa",
        optionC: "England",
        correctAnswer: "South Africa",
      },
      {
        question:
          "What was the name of Mahatma Gandhi's young son in South Africa?",
        optionA: "Kalyan",
        optionB: "Manila!",
        optionC: "Polak",
        correctAnswer: "Manila!",
      },
      {
        question: "Who asked Manila! to fetch a book from the office?",
        optionA: "Mahatma Gandhi",
        optionB: "Mr. Polak",
        optionC: "Kalyan",
        correctAnswer: "Mr. Polak",
      },
      {
        question: "How far was the office from the ashram in South Africa?",
        optionA: "One mile",
        optionB: "Two miles",
        optionC: "Three miles",
        correctAnswer: "Three miles",
      },
      {
        question: "When did Manila! promise to bring the book?",
        optionA: "Evening",
        optionB: "Morning",
        optionC: "Afternoon",
        correctAnswer: "Morning",
      },
      {
        question: "Who needed the book in the evening?",
        optionA: "Mahatma Gandhi",
        optionB: "Ba",
        optionC: "Mr. Polak",
        correctAnswer: "Mr. Polak",
      },
      {
        question:
          "What was Manila!'s response when Mr. Polak asked about the book in the evening?",
        optionA: "I forgot, Uncle.",
        optionB: "I'll bring it in the morning.",
        optionC: "I can't go now.",
        correctAnswer: "I'll bring it in the morning.",
      },
      {
        question: "Who suggested going to fetch the book in Manila!'s place?",
        optionA: "Ba",
        optionB: "Kalyan",
        optionC: "Gandhiji",
        correctAnswer: "Kalyan",
      },
      {
        question: "Why did Kalyan offer to go with Manilal to fetch the book?",
        optionA: "It was his responsibility.",
        optionB: "Manila! was scared of the dark.",
        optionC: "He wanted to help a child in the dark.",
        correctAnswer: "Manila! was scared of the dark.",
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
          "__________ expresses interest in making friends with the forest animals.",
        optionA: "Giraffe",
        optionB: "Elephant",
        optionC: "Lion",
        correctAnswer: "Elephant",
      },
      {
        question:
          "The monkey refused to be the elephant's friend because the elephant was too big to ________ on trees.",
        optionA: "Climb",
        optionB: "Swing",
        optionC: "Sleep",
        correctAnswer: "Swing",
      },
      {
        question:
          "The rabbit couldn't be the elephant's friend because the elephant was too big to enter her ________.",
        optionA: "House",
        optionB: "Hole",
        optionC: "Nest",
        correctAnswer: "Hole",
      },
      {
        question:
          "The deer refused to be the elephant's friend because the elephant couldn't run fast and ________ high.",
        optionA: "Fly",
        optionB: "Jump",
        optionC: "Swim",
        correctAnswer: "Jump",
      },
      {
        question:
          "All the animals refused the elephant's friendship because they thought he was too big to be a ________.",
        optionA: "Leader",
        optionB: "Friend",
        optionC: "King",
        correctAnswer: "Friend",
      },
      {
        question:
          "The forest animals were running in fright because the king was hunting for ________.",
        optionA: "Food",
        optionB: "Joy",
        optionC: "Shelter",
        correctAnswer: "Joy",
      },
      {
        question:
          "The elephant lifted the tiger in his trunk and warned him not to ________ any animal.",
        optionA: "Help",
        optionB: "Trouble",
        optionC: "Ignore",
        correctAnswer: "Trouble",
      },
      {
        question:
          'The tiger growled, "I am the king of the jungle. I can do ________ I like."',
        optionA: "What",
        optionB: "Where",
        optionC: "When",
        correctAnswer: "What",
      },
      {
        question:
          'The forest animals surrounded the elephant and said, "We want to be your ________. You are just the right size."',
        optionA: "Ruler",
        optionB: "Teacher",
        optionC: "Friend",
        correctAnswer: "Friend",
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
          "Mahatma Gandhi's ashram in South Africa was built for his family and followers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Manila! forgot to bring the book from the office in the evening.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Gandhiji insisted that if you make a promise, you ought to keep it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Ba, Gandhiji's wife, suggested that Manila! could bring the book in the morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Kalyan offered to go alone to fetch the book for Manila!",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The office was two miles away from Gandhiji's ashram in South Africa.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Manila! promised to bring the book in the evening.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Gandhiji allowed Kalyan to go alone to fetch the book.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Manila! was scared of the dark when Kalyan offered to go with him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The forest animals attacked the elephant after he helped them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
