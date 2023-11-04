export const chapter = "Chapter - 4: The Other Lion ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Who suggests the idea of going to the king to request not to kill the animals?",
        optionA: "Horse",
        optionB: "Ass",
        optionC: "Zebra",
        correctAnswer: "Ass",
      },
      {
        question:
          "What is the animals' alternative plan to keep the king from hunting them?",
        optionA: "Requesting the king not to hunt them",
        optionB: "Sending one animal a day to the king",
        optionC: "Going on a strike",
        correctAnswer: "Sending one animal a day to the king",
      },
      {
        question:
          "Who is responsible for ensuring that the chosen animal reaches the king at sunrise?",
        optionA: "Zebra",
        optionB: "Fox",
        optionC: "Elephant",
        correctAnswer: "Elephant",
      },
      {
        question: "Which animal is chosen to be sent to the king in Scene 3?",
        optionA: "Monkey",
        optionB: "Deer",
        optionC: "Rabbit",
        correctAnswer: "Rabbit",
      },
      {
        question: "Why does the rabbit come late to meet the lion in Scene 4?",
        optionA: "Because he got lost in the jungle",
        optionB: "Because he was afraid of the lion",
        optionC: "Because he encountered another lion",
        correctAnswer: "Because he encountered another lion",
      },
      {
        question:
          "How does the lion react when he hears about the other lion in the well?",
        optionA: "He laughs it off",
        optionB: "He becomes angry and wants to confront the other lion",
        optionC: "He decides to avoid the well",
        correctAnswer: "He becomes angry and wants to confront the other lion",
      },
      {
        question: "What happens when the lion jumps into the well?",
        optionA: "He finds the other lion and they become friends",
        optionB: "He gets trapped in the well",
        optionC: "He successfully confronts the other lion",
        correctAnswer: "He gets trapped in the well",
      },
      {
        question:
          "How do the animals ultimately resolve the issue of being hunted by the lion?",
        optionA: "They form an alliance to fight the lion",
        optionB: "They send one animal a day to the lion",
        optionC: "They request the lion to stop hunting them",
        correctAnswer: "They send one animal a day to the lion",
      },
      {
        question: "What was the lion's fate in the end?",
        optionA: "He continued hunting animals",
        optionB: "He became the king of the jungle",
        optionC: "He got trapped and met his end in the well",
        correctAnswer: "He got trapped and met his end in the well",
      },
      {
        question:
          "Who was responsible for leading the lion to the well in Scene 4?",
        optionA: "Monkey",
        optionB: "Deer",
        optionC: "Rabbit",
        correctAnswer: "Rabbit",
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
          "Who suggests the idea of going to the king to request not to kill the animals? The ________ suggests this idea.",
        options: ["Horse", "Ass", "Zebra"],
        correctAnswer: "Ass",
      },
      {
        question:
          "The animals' alternative plan to keep the king from hunting them is to send ________ animal a day to the king.",
        options: ["two", "one", "three"],
        correctAnswer: "one",
      },
      {
        question:
          "Who is responsible for ensuring that the chosen animal reaches the king at sunrise? The ________ must ensure this.",
        options: ["Zebra", "Fox", "Elephant"],
        correctAnswer: "Elephant",
      },
      {
        question:
          "Why does the Rabbit claim he was late to meet the Lion? Because he encountered ________ on the way.",
        options: ["a tiger", "another lion", "a bear"],
        correctAnswer: "another lion",
      },
      {
        question:
          "What happened to the Lion when he jumped into the well? He met his ________ in the well.",
        options: ["reflection", "end", "friend"],
        correctAnswer: "end",
      },
      {
        question:
          "How did the Elephant feel as the Rabbit walked away? The Elephant felt ________ as the Rabbit walked away.",
        options: ["angry", "tearful", "relieved"],
        correctAnswer: "tearful",
      },
      {
        question:
          "Why does the Elephant want the Rabbit to go quickly to meet the king? Because the king is already very ________.",
        options: ["hungry", "angry", "tired"],
        correctAnswer: "hungry",
      },
      {
        question:
          "The animals suggest sending one animal a day to the king to satisfy his hunger. This is an example of a(n) ________ approach.",
        options: ["aggressive", "alternative", "arrogant"],
        correctAnswer: "alternative",
      },
      {
        question:
          "What is the primary concern of the animals in the assembly? They are concerned about avoiding the king's ________ and being killed.",
        options: ["friendship", "anger", "food"],
        correctAnswer: "anger",
      },
      {
        question:
          "What is the main issue faced by the animals in the assembly? The main issue is preventing the king from ________ them.",
        options: ["feeding", "hunting", "protecting"],
        correctAnswer: "hunting",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The king kills jungle animals for food and game.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The animals decide to go to the king to request that he not kill them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The animals' alternative plan is to go on a strike.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The lion encounters another lion on his way to meet the rabbit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The lion successfully confronts the other lion in the well.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The rabbit bit the lion's nose to check if the lion was asleep.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The lion caught Nikie in his paw after Nikie apologized.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Nikie promised to steal food for the lion to secure his release.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The lion laughed and allowed Nikie to go after Nikie offered future help.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The lion was trapped in a cave a few days later.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
