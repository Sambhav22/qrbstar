export const chapter = "Chapter - 18:A Practical Joke";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the main theme of the text?",
        options: [
          "A) Summer vacations",
          "B) Practical jokes",
          "C) Friends' hospitality",
        ],
        answer: "B",
      },
      {
        question:
          "Why did the author become suspicious when they arrived at their friends' fort?",
        options: [
          "A) Their friends were unfriendly.",
          "B) Their friends gave them a grand reception.",
          "C) Their friends were not present to welcome them.",
        ],
        answer: "B",
      },
      {
        question: "How did the author feel during dinner at the fort?",
        options: [
          "A) Relaxed and happy",
          "B) Suspicious and on edge",
          "C) Grateful for their friends' kindness",
        ],
        answer: "B",
      },
      {
        question:
          "What did the author notice about the way people laughed during the evening?",
        options: [
          "A) They laughed quietly.",
          "B) They laughed in a normal manner.",
          "C) They laughed in an exaggerated fashion.",
        ],
        answer: "C",
      },
      {
        question:
          "Why did the author feel like they were being watched when they retired to their room?",
        options: [
          "A) They had seen someone spying.",
          "B) They had a gut feeling.",
          "C) They heard laughter and whispering outside.",
        ],
        answer: "C",
      },
      {
        question:
          "What did the author do to ensure they wouldn't be in complete darkness?",
        options: [
          "A) Lit all the lights in the room",
          "B) Covered the windows with curtains",
          "C) Slept with a night bulb on",
        ],
        answer: "A",
      },
      {
        question: "What made the author suspicious about the bed in the room?",
        options: [
          "A) It was too comfortable.",
          "B) It looked suspicious.",
          "C) It was located by the window.",
        ],
        answer: "B",
      },
      {
        question:
          "What precaution did the author take with the mattress before lying down?",
        options: [
          "A) Pulled it away from the bed",
          "B) Checked for hidden objects",
          "C) Flipped it over",
        ],
        answer: "A",
      },
      {
        question:
          "What woke the author up from a deep sleep in the middle of the night?",
        options: [
          "A) A loud noise",
          "B) A heavy body falling on them",
          "C) The smell of burning liquid",
        ],
        answer: "B",
      },
      {
        question:
          "Who turned out to be the source of the practical joke in the end?",
        options: [
          "A) The author's friends",
          "B) The author's own paranoia",
          "C) A stranger who had broken into the fort",
        ],
        answer: "A",
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
          "Once I went to spend the summer vacation with some friends in a ____________.",
        options: ["hotel", "cottage", "fort"],
        correctAnswer: "fort",
      },
      {
        question: "My friends were fond of ____________.",
        options: ["playing cards", "practical jokes", "outdoor adventures"],
        correctAnswer: "practical jokes",
      },
      {
        question: "When I arrived, they gave me a ____________ reception.",
        options: ["casual", "warm", "princely"],
        correctAnswer: "princely",
      },
      {
        question:
          "I said to myself: 'Look out, old man! They have something in store for you.'",
        options: [
          "Look out, old man!",
          "Beware, my friend!",
          "Watch your step!",
        ],
        correctAnswer: "Look out, old man!",
      },
      {
        question: "During the dinner, the enjoyment was ____________.",
        options: ["moderate", "excessive", "subdued"],
        correctAnswer: "excessive",
      },
      {
        question:
          "I thought: 'Here are people who have more than their share of ____________.'",
        options: ["work", "amusement", "stress"],
        correctAnswer: "amusement",
      },
      {
        question: "Every one laughed in an ____________ fashion.",
        options: ["ordinary", "exaggerated", "quiet"],
        correctAnswer: "exaggerated",
      },
      {
        question: "I smelled a practical joke in the ____________.",
        options: ["air", "water", "ground"],
        correctAnswer: "air",
      },
      {
        question:
          "The hour struck for retiring; and the whole household came to escort me to my ____________.",
        options: ["room", "car", "garden"],
        correctAnswer: "room",
      },
      {
        question:
          "They called to me: 'Good night.' I entered the room, shut the door, and remained standing, without moving a single step, looking at everything very carefully in the light of the ____________.",
        options: ["moonlight", "night bulb", "lantern"],
        correctAnswer: "night bulb",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The author's friends gave them a warm reception.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The author felt relaxed during dinner at the fort.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The author was not suspicious of their friends' intentions.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The king in the story loved perfectly round chapattis.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The author found something suspicious about the bed in the room.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The king refused to eat square chapattis.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The king enjoyed a chapatti that turned into a butterfly.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Meena's family could only afford to eat chapattis with ketchup.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The author's friends were spying on them outside their room.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The author's paranoia led to the practical joke in the end.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
