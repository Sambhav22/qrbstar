export const chapter = "Chapter - 17: Proposal to Marriage";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What does the tiger first notice about the young girl?",
        optionA: "Her fear",
        optionB: "Her beauty",
        optionC: "Her firewood",
        correctAnswer: "Her beauty",
      },
      {
        question:
          "What does the tiger want to do when he first sees the young girl?",
        optionA: "Kill her",
        optionB: "Propose to her",
        optionC: "Run away",
        correctAnswer: "Propose to her",
      },
      {
        question:
          "Why does the girl run away from the tiger when he approaches her?",
        optionA: "She is scared of being eaten.",
        optionB: "She is scared of marriage.",
        optionC: "She is gathering more firewood.",
        correctAnswer: "She is scared of being eaten.",
      },
      {
        question:
          "What is the man's initial reaction when the tiger asks to marry his daughter?",
        optionA: "He agrees immediately.",
        optionB: "He runs away.",
        optionC: "He is frightened but thinks for a while.",
        correctAnswer: "He is frightened but thinks for a while.",
      },
      {
        question:
          "What does the man suggest as a solution to the problem of the tiger's sharp nails and teeth?",
        optionA: "To run away with his daughter",
        optionB: "To clip the tiger's nails and pull out his teeth",
        optionC: "To invite the tiger for dinner",
        correctAnswer: "To clip the tiger's nails and pull out his teeth",
      },
      {
        question:
          "How does the tiger react to the man's suggestion to clip his nails and pull out his teeth?",
        optionA: "He refuses to do it.",
        optionB: "He agrees willingly.",
        optionC: "He suggests an alternative solution.",
        correctAnswer: "He agrees willingly.",
      },
      {
        question:
          "Who ultimately beats the tiger and chases him back to the forest?",
        optionA: "The young girl",
        optionB: "The tiger's family",
        optionC: "The girl's father",
        correctAnswer: "The girl's father",
      },
      {
        question:
          "What is the tiger's condition after having his nails clipped and teeth pulled out?",
        optionA: "Happy and excited",
        optionB: "Angry and aggressive",
        optionC: "Fearful and weak",
        correctAnswer: "Happy and excited",
      },
      {
        question: "How does the story end for the tiger?",
        optionA: "He marries the girl and lives happily.",
        optionB: "He is eaten by the man.",
        optionC: "He is chased back to the forest.",
        correctAnswer: "He is chased back to the forest.",
      },
      {
        question: "What is the overall tone of this story?",
        optionA: "Tragic",
        optionB: "Humorous",
        optionC: "Romantic",
        correctAnswer: "Humorous",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "The tiger is ________ in the jungle.",
        options: ["running", "sleeping", "roaming"],
        correctAnswer: "roaming",
      },
      {
        question:
          "Tiger: (to himself) What a pretty day it is! I got a lavish meal in the ________. I can enjoy myself.",
        options: ["evening", "morning", "afternoon"],
        correctAnswer: "morning",
      },
      {
        question: "The greenery really looks ________.",
        options: ["ugly", "nice", "scary"],
        correctAnswer: "nice",
      },
      {
        question: "These flowers are really ________.",
        options: ["colorful", "ugly", "pretty"],
        correctAnswer: "pretty",
      },
      {
        question: "The tiger notices a young girl. She is gathering ________.",
        options: ["food", "firewood", "flowers"],
        correctAnswer: "firewood",
      },
      {
        question:
          "Tiger: (to himself) I am not hungry, so I don't need to ________ her.",
        options: ["chase", "kill", "marry"],
        correctAnswer: "kill",
      },
      {
        question:
          "But let me see from near what she is doing. (looks at her from behind a ________)",
        options: ["rock", "tree", "bush"],
        correctAnswer: "tree",
      },
      {
        question:
          "She is very beautiful. I think she can be my ________. Let me propose to her.",
        options: ["friend", "wife", "neighbor"],
        correctAnswer: "wife",
      },
      {
        question:
          "Tiger: (calls from behind) Stop, girl, stop. I don't want to ________ you. I want to marry you.",
        options: ["harm", "see", "kill"],
        correctAnswer: "kill",
      },
      {
        question:
          "Man: Tiger, you are so handsome. You will make a good husband for her.",
        options: ["ugly", "strong", "handsome"],
        correctAnswer: "handsome",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Confucius had several pupils.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Lu was known for his aggressive nature.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Wei was known for his good brain and kind heart.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Wei's anger caused him health issues.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Lu and Wei never had any disagreements.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Confucius advised Wei to abandon his studies and return to his village.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Wei had 40 teeth.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "According to Confucius, teeth are the first to decay.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Wei's anger led to a fit of temper one thousand times in a year.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Confucius encouraged Wei to learn the lesson of patience.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
