export const chapter = "Chapter - 5: The King as Servant";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is King Kamera's attitude towards his subjects?",
        optionA: "He respects them",
        optionB: "He considers them equals",
        optionC: "He believes they are his servants",
        correctAnswer: "He believes they are his servants",
      },
      {
        question:
          "When asked, 'Who said that? How dare!' What is the response?",
        optionA: "'I said that, Your Majesty.'",
        optionB: "'I am sorry, I didn't say that.'",
        optionC: "'I have no idea who said that.'",
        correctAnswer: "'I said that, Your Majesty.'",
      },
      {
        question: "What does Boubakar come to King Kamera's palace to request?",
        optionA: "Money",
        optionB: "Food",
        optionC: "A well for his village",
        correctAnswer: "A well for his village",
      },
      {
        question: "According to Boubakar, why do people serve one another?",
        optionA: "Because it's a tradition",
        optionB: "Because it's their duty",
        optionC: "Because God made them to serve one another",
        correctAnswer: "Because God made them to serve one another",
      },
      {
        question:
          "What does King Kamera challenge Boubakar to do by nightfall?",
        optionA: "Touch his feet",
        optionB: "Dig a well",
        optionC: "Prove that they are all bound to serve one another",
        correctAnswer: "Prove that they are all bound to serve one another",
      },
      {
        question: "How does Boubakar fulfill the challenge set by King Kamera?",
        optionA: "By touching the king's feet",
        optionB: "By digging a well",
        optionC: "By holding the king's stick and returning it",
        correctAnswer: "By holding the king's stick and returning it",
      },
      {
        question: "What custom does Boubakar mention from his village?",
        optionA: "Touching feet to accept challenges",
        optionB: "Giving gifts to the king",
        optionC: "Kneeling to royalty",
        correctAnswer: "Touching feet to accept challenges",
      },
      {
        question: "How does Boubakar show his gratitude to King Kamera?",
        optionA: "By giving the king a gift",
        optionB: "By bowing down to the king",
        optionC: "By returning the king's stick",
        correctAnswer: "By bowing down to the king",
      },
      {
        question:
          "What does King Kamera promise to do for Boubakar in the end?",
        optionA: "Build one well in Boubakar's village",
        optionB: "Build three wells in Boubakar's village",
        optionC: "Make him the king of a neighboring village",
        correctAnswer: "Build three wells in Boubakar's village",
      },
      {
        question:
          "What role does King Kamera offer to Boubakar at the end of the story?",
        optionA: "Advisor",
        optionB: "Servant",
        optionC: "Guard",
        correctAnswer: "Advisor",
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
          "King Kamera was a proud and stern man. Subjects, 'I am the _______ of the world.'",
        optionA: "Master",
        optionB: "Servant",
        optionC: "Ruler",
        correctAnswer: "Master",
      },
      {
        question:
          "'You all people are my servants, _______ you? yes, we are. no, we are not.'",
        optionA: "Aren't",
        optionB: "Are",
        optionC: "Will",
        correctAnswer: "Aren't",
      },
      {
        question: "'Who said that? How _______!'",
        optionA: "What",
        optionB: "Dare",
        optionC: "Who",
        correctAnswer: "Dare",
      },
      {
        question: "'I say that we all people are servants to one _______.'",
        optionA: "Master",
        optionB: "Other",
        optionC: "Another",
        correctAnswer: "Another",
      },
      {
        question:
          "'You people may be servants to one another, but I am the _______.'",
        optionA: "Leader",
        optionB: "King",
        optionC: "Master",
        correctAnswer: "Master",
      },
      {
        question:
          "'What have you come here for? We have no water in our _______.'",
        optionA: "House",
        optionB: "Town",
        optionC: "Village",
        correctAnswer: "Village",
      },
      {
        question:
          "'I have come to ask for a _______. A well must be dug in our village.'",
        optionA: "Challenge",
        optionB: "Gift",
        optionC: "Well",
        correctAnswer: "Well",
      },
      {
        question:
          "'So you are a _______ yet you are doing enough to call me a servant.'",
        optionA: "Beggar",
        optionB: "Ruler",
        optionC: "King",
        correctAnswer: "Beggar",
      },
      {
        question:
          "'We all are bound to serve one another. Can you _______ that?'",
        optionA: "Deny",
        optionB: "Prove",
        optionC: "Defend",
        correctAnswer: "Prove",
      },
      {
        question:
          "'A servant does what another person tells him to do. Is this true? _______'",
        optionA: "Yes, it is.",
        optionB: "No, it isn't.",
        optionC: "Maybe, it depends.",
        correctAnswer: "Yes, it is.",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "King Kamera believed that he was the master of the world.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question:
          "Boubakar came to King Kamera's palace to request a well for his village.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question:
          "According to Boubakar, people are not bound to serve one another.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question:
          "King Kamera challenged Boubakar to prove that people are bound to serve one another.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question:
          "Boubakar fulfilled the challenge by holding the king's stick and returning it.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question:
          "Boubakar wanted to touch King Kamera's feet as a gesture of respect.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question:
          "King Kamera agreed to get three wells dug in Boubakar's village.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question: "Boubakar was offered the role of a servant by King Kamera.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question:
          "The text suggests that King Kamera was pleased with Boubakar's wit.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question: "Boubakar left the palace without fulfilling the challenge.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
    ],
  };
}

export var activityData;
