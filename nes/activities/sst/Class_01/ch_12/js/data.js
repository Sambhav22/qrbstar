export const chapter = "Chapter - 12: Well Behaving ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What does 'well-behaving' mean in the context of the text?",
        optionA: "Being quiet",
        optionB: "Having good manners",
        optionC: "Following orders",
        correctAnswer: "Having good manners",
      },
      {
        question: "Where can you learn good manners according to the text?",
        optionA: "Only at home",
        optionB: "Only at school",
        optionC: "Both at home and school",
        correctAnswer: "Both at home and school",
      },
      {
        question:
          "According to the text, what should you say when you need something from someone?",
        optionA: "Sorry",
        optionB: "Please",
        optionC: "Thank you",
        correctAnswer: "Please",
      },
      {
        question: "How should you speak to others, according to the text?",
        optionA: "Loudly and harshly",
        optionB: "Softly and politely",
        optionC: "Only to your friends",
        correctAnswer: "Softly and politely",
      },
      {
        question:
          "What should you do when you hurt or disturb someone, as per the text?",
        optionA: "Thank you",
        optionB: "Please",
        optionC: "Sorry",
        correctAnswer: "Sorry",
      },
      {
        question:
          "How should you treat birds and animals, according to the text?",
        optionA: "Ignore them",
        optionB: "Be kind to them",
        optionC: "Tease them",
        correctAnswer: "Be kind to them",
      },
      {
        question:
          "According to the text, what should you never do when speaking to anybody?",
        optionA: "Use harsh or foul language",
        optionB: "Speak loudly",
        optionC: "Tell jokes",
        correctAnswer: "Use harsh or foul language",
      },
      {
        question:
          "What should you say when you interrupt someone, according to the text?",
        optionA: "Thank you",
        optionB: "Excuse me",
        optionC: "Sorry",
        correctAnswer: "Excuse me",
      },
      {
        question: "What is one of the 'Don'ts' mentioned in the text?",
        optionA: "Tell a lie",
        optionB: "Respect your elders",
        optionC: "Love younger children",
        correctAnswer: "Tell a lie",
      },
      {
        question:
          "According to the text, what should you never do with someone's things?",
        optionA: "Share them",
        optionB: "Ask for permission",
        optionC: "Take them without permission",
        correctAnswer: "Take them without permission",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Well-behaving means having ________________.",
        options: ["Good grades", "Good manners", "Good food"],
        correctAnswer: "Good manners",
      },
      {
        question: "To become a good child, one must learn ________________.",
        options: ["Mathematics", "Good manners", "Sports"],
        correctAnswer: "Good manners",
      },
      {
        question: "We learn good manners both at ________________.",
        options: ["Home and school", "The park", "The library"],
        correctAnswer: "Home and school",
      },
      {
        question:
          "One of the 'Do's mentioned in the text is to always speak ________________ with everyone.",
        options: ["Loudly", "Softly and politely", "Angrily"],
        correctAnswer: "Softly and politely",
      },
      {
        question:
          "According to the text, we should respect our elders and ________________ younger children.",
        options: ["Fear", "Ignore", "Love"],
        correctAnswer: "Love",
      },
      {
        question: "One of the 'Do's is to be kind to ________________.",
        options: ["Cars", "Birds and animals", "Machines"],
        correctAnswer: "Birds and animals",
      },
      {
        question:
          "According to the text, we should say 'thank you' when we get a ________________ from someone.",
        options: ["Homework assignment", "Scolding", "Gift"],
        correctAnswer: "Gift",
      },
      {
        question:
          "When you need something from someone, you should say ________________.",
        options: ["Sorry", "Excuse me", "Please"],
        correctAnswer: "Please",
      },
      {
        question:
          "According to the text, we should say 'excuse me' when we ________________ someone.",
        options: ["Interrupt", "Ignore", "Annoy"],
        correctAnswer: "Interrupt",
      },
      {
        question:
          "According to the text, we should never use ________________ when we speak to anybody.",
        options: ["Kind words", "Harsh or foul language", "Whispering"],
        correctAnswer: "Harsh or foul language",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "A tailor is responsible for stitching our clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A milkman sells us milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A carpenter can make furniture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A cobbler can mend our shoes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A barber cuts our hair.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A policeman protects us from thieves and robbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A postman delivers us letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A doctor can treat us when we fall ill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A watchman guards our houses at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A shopkeeper sells us many things and services.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
