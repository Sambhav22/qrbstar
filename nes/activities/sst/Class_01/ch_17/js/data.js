export const chapter = "Chapter - 17: Early Men ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What were early men initially lacking in their lives?",
        optionA: "Clothes",
        optionB: "Fire",
        optionC: "Houses",
        correctAnswer: "A, B, C",
      },
      {
        question:
          "How did early men protect themselves from wild animals when they lived in the open forest?",
        optionA: "By building walls",
        optionB: "By sleeping on trees",
        optionC: "By living in caves",
        correctAnswer: "B",
      },
      {
        question: "What did early men do in search of food in the early days?",
        optionA: "Plucked fruits and nuts",
        optionB: "Grew crops",
        optionC: "Made clothes",
        correctAnswer: "A",
      },
      {
        question: "Why did early men start living in caves?",
        optionA: "To protect themselves from rain, heat, and cold",
        optionB: "To be closer to their hunting grounds",
        optionC: "To escape from wild animals",
        correctAnswer: "A",
      },
      {
        question:
          "How did early men primarily consume animal meat in the beginning?",
        optionA: "Grilled",
        optionB: "Raw",
        optionC: "Boiled",
        correctAnswer: "B",
      },
      {
        question: "What purpose did fire serve for early men?",
        optionA: "To provide light",
        optionB: "To keep wild animals away",
        optionC: "To cook food",
        correctAnswer: "B",
      },
      {
        question:
          "What did early men begin to do with their food once they learned to make fire?",
        optionA: "Boil it",
        optionB: "Roast it",
        optionC: "Eat it raw",
        correctAnswer: "B",
      },
      {
        question:
          "How did early men eventually learn to protect themselves from wild animals and the cold?",
        optionA: "By building houses",
        optionB: "By making clothes",
        optionC: "By using fire",
        correctAnswer: "C",
      },
      {
        question:
          "What did early men eventually learn to do as time passed, according to the text?",
        optionA: "Tame animals",
        optionB: "Fly in the air",
        optionC: "Swim in the sea",
        correctAnswer: "A",
      },
      {
        question:
          "What did early men learn to do with their food as a result of their progress?",
        optionA: "Preserve it for later",
        optionB: "Share it with other tribes",
        optionC: "Grow crops and raise animals",
        correctAnswer: "C",
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
          "Long ago, early men lived in the open forest and had neither clothes, nor fire, nor houses. They slept on trees, and they roamed in search of food from place to place. Later, to protect themselves from rain, heat, and cold, they began to live in __________.",
        options: ["Caves", "Mountains", "Huts"],
        correctAnswer: "Caves",
      },
      {
        question:
          "Early men did not know how to grow food. They plucked fruits and nuts from trees. They also hunted animals for meat and ate the flesh of animals in __________ form.",
        options: ["Raw", "Cooked", "Dried"],
        correctAnswer: "Raw",
      },
      {
        question:
          "As time passed, early men learned to make fire. Fire kept the wild animals away and protected them from __________.",
        options: ["Insects", "Heat", "Cold"],
        correctAnswer: "Cold",
      },
      {
        question:
          "Early men began to roast their food as they discovered fire, which helped improve the taste and made it easier to __________.",
        options: ["Preserve", "Cook", "Share"],
        correctAnswer: "Cook",
      },
      {
        question:
          "With the passing of time, early men learned to grow crops and __________ animals.",
        options: ["Tame", "Hunt", "Scare"],
        correctAnswer: "Tame",
      },
      {
        question:
          "Early men lived like wild animals and were known as __________.",
        options: ["Modern humans", "Prehistoric beings", "Early men"],
        correctAnswer: "Early men",
      },
      {
        question:
          "To protect themselves from wild animals, early men slept on __________.",
        options: ["The ground", "Trees", "Rocks"],
        correctAnswer: "Trees",
      },
      {
        question:
          "They roamed in search of food from place to place and were constantly on the move in their quest for __________.",
        options: ["Adventure", "Civilization", "Food"],
        correctAnswer: "Food",
      },
      {
        question:
          "Early men learned to grow crops and tame animals as they evolved, which marked a significant shift from their earlier reliance on hunting and __________.",
        options: ["Gathering", "Fishing", "Cooking"],
        correctAnswer: "Gathering",
      },
      {
        question:
          "The use of fire not only helped early men protect themselves from cold but also made it possible to __________ their food, enhancing its flavor and nutritional value.",
        options: ["Preserve", "Share", "Dry"],
        correctAnswer: "Preserve",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Early men lived in houses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Early men slept on trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Early men knew how to grow food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Fire helped early men protect themselves from wild animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Early men primarily consumed animal meat in cooked form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Early men started to live in caves to escape the cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Early men learned to grow crops and tame animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Early men were always on the move in search of adventure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Early men were known as modern humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The use of fire made it easier for early men to preserve their food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
