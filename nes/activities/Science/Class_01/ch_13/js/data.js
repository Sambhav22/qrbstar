export const chapter = "Chapter - 13: THE SKY ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the wide open space above the earth called?",
          optionA: "Ocean",
          optionB: "Sky",
          optionC: "Atmosphere",
          correctAnswer: "Sky",
        },
        {
          question:
            "What are the sun, moon, and stars collectively referred to as?",
          optionA: "Terrestrial bodies",
          optionB: "Celestial bodies",
          optionC: "Earthly bodies",
          correctAnswer: "Celestial bodies",
        },
        {
          question: "When does the sun shine?",
          optionA: "Night",
          optionB: "Day",
          optionC: "Dawn",
          correctAnswer: "Day",
        },
        {
          question: "What is the sun made of?",
          optionA: "Solid rock",
          optionB: "Liquid water",
          optionC: "Burning gases",
          correctAnswer: "Burning gases",
        },
        {
          question: "In which direction does the sun rise and bring day?",
          optionA: "North",
          optionB: "East",
          optionC: "West",
          correctAnswer: "East",
        },
        {
          question: "When do we see the moon in the sky?",
          optionA: "Day",
          optionB: "Evening",
          optionC: "Night",
          correctAnswer: "Night",
        },
        {
          question: "What is the moon made of?",
          optionA: "Metal",
          optionB: "Rock",
          optionC: "Ice",
          correctAnswer: "Rock",
        },
        {
          question: "How does the moon get its light?",
          optionA: "It emits its own light",
          optionB: "It reflects the light of the sun",
          optionC: "It absorbs light from the stars",
          correctAnswer: "It reflects the light of the sun",
        },
        {
          question: "When do we see lots of stars in the sky?",
          optionA: "Morning",
          optionB: "Afternoon",
          optionC: "Night",
          correctAnswer: "Night",
        },
        {
          question: "Why do stars appear tiny in the night sky?",
          optionA: "They are small objects",
          optionB: "They are far away",
          optionC: "They are surrounded by clouds",
          correctAnswer: "They are far away",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "The wide open space above the earth is called _______.",
          options: ["Ocean", "Sky", "Atmosphere"],
          correctAnswer: "Sky",
        },
        {
          question: "The sun shines during the _______.",
          options: ["Night", "Day", "Dawn"],
          correctAnswer: "Day",
        },
        {
          question:
            "The moon is a big round lump of _______ that moves around the earth.",
          options: ["Metal", "Rock", "Ice"],
          correctAnswer: "Rock",
        },
        {
          question:
            "Stars look like tiny glowing dots twinkling in the _______ sky.",
          options: ["Morning", "Afternoon", "Night"],
          correctAnswer: "Night",
        },
        {
          question: "The sun rises in the _______ and brings day.",
          options: ["North", "East", "West"],
          correctAnswer: "East",
        },
        {
          question: "The moon reflects the light of the _______.",
          options: ["Moon", "Stars", "Sun"],
          correctAnswer: "Sun",
        },
        {
          question: "The sun is a massive ball of burning _______.",
          options: ["Rock", "Water", "Gases"],
          correctAnswer: "Gases",
        },
        {
          question:
            "Stars are far away from us, which is why they look so small or _______.",
          options: ["Large", "Tiny", "Bright"],
          correctAnswer: "Tiny",
        },
        {
          question: "The moon changes its shape every _______.",
          options: ["Week", "Month", "Year"],
          correctAnswer: "Month",
        },
        {
          question:
            "The wide open space above the earth where we see the sun, moon, and stars is collectively called _______ bodies.",
          options: ["Celestial", "Terrestrial", "Earthly"],
          correctAnswer: "Celestial",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The wide open space above the earth is called Ocean.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The sun shines during the night.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The moon is a big round lump of metal that moves around the earth.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Stars look like tiny glowing dots twinkling in the morning sky.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The sun rises in the east and brings night.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The moon reflects the light of the moon.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The sun is a massive ball of burning rock.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Stars are close to us, which is why they look so large.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The moon changes its shape every week.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The wide open space above the earth where we see the sun, moon, and stars is collectively called Terrestrial bodies.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
