export const chapter = "Chapter - 14: It's Diwali Tonight ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the occasion being celebrated in the text?",
          optionA: "Christmas",
          optionB: "Diwali",
          optionC: "New Year",
          correctAnswer: "Diwali",
        },
        {
          question: "How is the atmosphere described in the text?",
          optionA: "Dark and gloomy",
          optionB: "Bright with light",
          optionC: "Cloudy and overcast",
          correctAnswer: "Bright with light",
        },
        {
          question:
            "What have people done to guide others to their front door?",
          optionA: "Hung decorations",
          optionB: "Lit lamps",
          optionC: "Put up a sign",
          correctAnswer: "Lit lamps",
        },
        {
          question:
            "What have people done on the floor as part of the celebration?",
          optionA: "Sprinkled colored powders to make pictures",
          optionB: "Vacuumed the floor",
          optionC: "Painted the floor",
          correctAnswer: "Sprinkled colored powders to make pictures",
        },
        {
          question: "What kind of gifts are exchanged during this celebration?",
          optionA: "Clothes",
          optionB: "Sweets",
          optionC: "Toys",
          correctAnswer: "Sweets",
        },
        {
          question: "What is the central theme of the text?",
          optionA: "Halloween",
          optionB: "Diwali preparations and celebrations",
          optionC: "Thanksgiving",
          correctAnswer: "Diwali preparations and celebrations",
        },
        {
          question:
            "What is used to create pictures on the floor during Diwali?",
          optionA: "Colored pencils",
          optionB: "Rangoli",
          optionC: "Stickers",
          correctAnswer: "Rangoli",
        },
        {
          question:
            "What is the common sentiment among the people in the text?",
          optionA: "Sadness",
          optionB: "Joy",
          optionC: "Anger",
          correctAnswer: "Joy",
        },
        {
          question: "What is the significance of lighting lamps in the text?",
          optionA: "To save electricity",
          optionB: "To guide the way to the front door",
          optionC: "For decoration",
          correctAnswer: "To guide the way to the front door",
        },
        {
          question: "When is Diwali being celebrated in the text?",
          optionA: "In the morning",
          optionB: "In the afternoon",
          optionC: "At night",
          correctAnswer: "At night",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question: "Everything's ready to greet the ________.",
          options: ["morning", "new year", "Christmas"],
          correctAnswer: "new year",
        },
        {
          question: "Everything is bright with ________.",
          options: ["darkness", "light", "colors"],
          correctAnswer: "light",
        },
        {
          question: "Everyone's dressed up and full of ________.",
          options: ["sorrow", "fear", "joy"],
          correctAnswer: "joy",
        },
        {
          question: "It's ________ tonight!",
          options: ["Halloween", "Diwali", "Christmas"],
          correctAnswer: "Diwali",
        },
        {
          question:
            "We've lit the lamps to show the ________ up to our front door.",
          options: ["path", "way", "darkness"],
          correctAnswer: "path",
        },
        {
          question:
            "We've sprinkled colored powders to make ________ on the floor.",
          options: ["pictures", "drawings", "sculptures"],
          correctAnswer: "pictures",
        },
        {
          question: "We've given each other gifts of ________.",
          options: ["toys", "sweets", "flowers"],
          correctAnswer: "sweets",
        },
        {
          question: "There's a lot of delicious things to ________.",
          options: ["see", "hear", "eat"],
          correctAnswer: "eat",
        },
        {
          question: "Everything's ready to greet the ________.",
          options: ["morning", "new year", "Christmas"],
          correctAnswer: "new year",
        },
        {
          question: "Everything is bright with ________.",
          options: ["darkness", "light", "colors"],
          correctAnswer: "light",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "Mount Everest is the tallest mountain in the world.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question: "The Nile River is the longest river on Earth.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question: "The Earth orbits the Moon.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question: "The Great Wall of China can be seen from space.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "Mars is known as the Red Planet because of its reddish appearance.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question: "The Eiffel Tower is located in London.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question: "A human has four lungs.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question: "Gold is a liquid at room temperature.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question: "The Sun is a planet.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question: "Water boils at 100 degrees Fahrenheit.",
          options: ["True", "False"],
          answer: "False",
        },
      ],
    ],
  };
}

export var activityData;
