export const chapter = "Chapter - 10: Food in Garbage ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What did Saran and Madhur plan to do after school?",
        optionA: "Study for another test",
        optionB: "Have lunch in the sun",
        optionC: "Visit the burger shop",
        correctAnswer: "Visit the burger shop",
      },
      {
        question: "Why did Saran and Madhur push their lunches aside?",
        optionA: "They weren't hungry",
        optionB: "They didn't like the food",
        optionC: "They were busy studying",
        correctAnswer: "They didn't like the food",
      },
      {
        question: "What subject were Saran and Madhur studying for?",
        optionA: "Math",
        optionB: "Science",
        optionC: "English",
        correctAnswer: "English",
      },
      {
        question:
          "What did people eat in the olden days when the sky was close to the earth?",
        optionA: "Sky",
        optionB: "Ripe bananas",
        optionC: "The sky turned dark",
        correctAnswer: "Ripe bananas",
      },
      {
        question:
          "How did the sky's taste change when people ate it in the olden days?",
        optionA: "It always tasted like roasted potatoes",
        optionB: "It was always delicious and different",
        optionC: "It tasted like tamarind seeds",
        correctAnswer: "It was always delicious and different",
      },
      {
        question:
          "What did some people do with the pieces of the sky that made the sky angry?",
        optionA: "Ate them all",
        optionB: "Threw them away",
        optionC: "Shared them with their family",
        correctAnswer: "Threw them away",
      },
      {
        question: "What happened when the sky turned angry?",
        optionA: "The king and people were happy",
        optionB: "The sky gave more food",
        optionC: "Dark clouds and thunder occurred",
        correctAnswer: "Dark clouds and thunder occurred",
      },
      {
        question: "What did the sky warn the people about?",
        optionA: "Not to eat sky food",
        optionB: "Not to waste the gift of food",
        optionC: "Not to throw away their food",
        correctAnswer: "Not to waste the gift of food",
      },
      {
        question: "How did people need to obtain food after the sky went away?",
        optionA: "By reaching up to the sky",
        optionB: "By planting crops and hunting",
        optionC: "By buying it from the market",
        correctAnswer: "By planting crops and hunting",
      },
      {
        question:
          "What message did Mr. Tyagi want the students to take from the story?",
        optionA: "To eat more food",
        optionB: "To waste the gifts of nature",
        optionC: "To care for the gifts of nature and not waste them",
        correctAnswer: "To care for the gifts of nature and not waste them",
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
          "Saran and Madhur planned to visit the ________ after school.",
        options: ["library", "playground", "burger shop"],
        correctAnswer: "burger shop",
      },
      {
        question:
          "Saran and Madhur pushed their lunches aside because they didn't like the ________.",
        options: ["weather", "food", "grass"],
        correctAnswer: "food",
      },
      {
        question: "They were busy studying for their upcoming ________ test.",
        options: ["math", "science", "English"],
        correctAnswer: "English",
      },
      {
        question:
          "In the olden days, people could reach up and break off a piece of the ________ to eat.",
        options: ["ground", "sky", "river"],
        correctAnswer: "sky",
      },
      {
        question: "The taste of the sky was always ________ and different.",
        options: ["sweet", "delicious", "sour"],
        correctAnswer: "delicious",
      },
      {
        question:
          "The sky became angry when people took more food than they could eat and discarded it in the ________.",
        options: ["river", "forest", "garbage"],
        correctAnswer: "garbage",
      },
      {
        question: "The sky warned people not to waste the gift of ________.",
        options: ["money", "food", "time"],
        correctAnswer: "food",
      },
      {
        question:
          "After the sky went away, people had to learn how to plant crops in the ________ and hunt in the ________.",
        options: ["sky, water", "ground, forests", "air, mountains"],
        correctAnswer: "ground, forests",
      },
      {
        question:
          "The inscription over the monastery doorway read, 'Be Honest At All ________.'",
        options: ["Days", "Times", "Nights"],
        correctAnswer: "Times",
      },
      {
        question:
          "The youngest brother revealed the name of the donor, ________, on the tablet that the other brothers didn't see.",
        options: ["Oba", "Aadmi", "Wang Lee"],
        correctAnswer: "Wang Lee",
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
          "The three elderly brothers lived in a large house on the outskirts of a town in China.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The three brothers had perfect eyesight and never claimed to have the best vision.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The eldest brother was in charge of the finances of a poultry farm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The youngest brother suggested taking charge of the finances because he had a habit of stealing money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The second brother paid twenty yuans for an item when he should have paid only two yuans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The third brother claimed that he could make a sheep from a goat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The brothers decided to settle their financial matter by testing their cooking skills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The inscription they were supposed to read at the monastery read, 'Money Is the Root of All Evil.'",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The second brother claimed to see a plain decoration around the inscription on the tablet when they arrived at the monastery.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The youngest brother, when they arrived at the monastery, pointed out that besides the inscription, there was also the name of the donor, Wang Lee, at the top of the tablet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
