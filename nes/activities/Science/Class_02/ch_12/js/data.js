export const chapter = "Chapter - 12: THE SUN AND SHADOW  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the main source of light on Earth?",
          optionA: "Tubelight",
          optionB: "LED bulb",
          optionC: "Sun",
          correctAnswer: "C) Sun",
        },
        {
          question: "Why is it cool and dark during the night?",
          optionA: "The moon provides light",
          optionB: "The sun is absent",
          optionC: "Bulbs are turned off",
          correctAnswer: "B) The sun is absent",
        },
        {
          question: "How is a shadow formed?",
          optionA: "When an object emits light",
          optionB: "When an object reflects light",
          optionC: "When an object blocks light",
          correctAnswer: "C) When an object blocks light",
        },
        {
          question: "In which direction does the sun rise?",
          optionA: "North",
          optionB: "South",
          optionC: "East",
          correctAnswer: "C) East",
        },
        {
          question: "What happens to the length of shadows at midday?",
          optionA: "They become longest",
          optionB: "They become shortest",
          optionC: "They remain constant",
          correctAnswer: "B) They become shortest",
        },
        {
          question: "What does light do when it falls on an object?",
          optionA: "It disappears",
          optionB: "It bounces off and reaches our eyes",
          optionC: "It passes through the object",
          correctAnswer: "B) It bounces off and reaches our eyes",
        },
        {
          question:
            "Which of the following is NOT mentioned as a source of light?",
          optionA: "Torch",
          optionB: "Candle",
          optionC: "Moon",
          correctAnswer: "C) Moon",
        },
        {
          question: "What does the sun provide besides light?",
          optionA: "Water",
          optionB: "Heat and light",
          optionC: "Air",
          correctAnswer: "B) Heat and light",
        },
        {
          question: "When is it dark during the night?",
          optionA: "When the moon is full",
          optionB: "When the sun is shining",
          optionC: "When the sun sets",
          correctAnswer: "C) When the sun sets",
        },
        {
          question:
            "What happens to the length of shadows when the position of the sun changes?",
          optionA: "Shadows remain constant",
          optionB: "Shadows become shorter",
          optionC: "Shadows become longer",
          correctAnswer: "C) Shadows become longer",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "We cannot see anything in the ________.",
          options: ["Day", "Night", "Morning"],
          correctAnswer: "Night",
        },
        {
          question: "The ________ is the main source of light on Earth.",
          options: ["Moon", "Sun", "Torch"],
          correctAnswer: "Sun",
        },
        {
          question:
            "When light falls on any object, it bounces off and reaches our ________.",
          options: ["Ears", "Eyes", "Nose"],
          correctAnswer: "Eyes",
        },
        {
          question:
            "Shadows are formed when an object comes in the path of ________.",
          options: ["Water", "Light", "Air"],
          correctAnswer: "Light",
        },
        {
          question:
            "The length of a shadow is different at different times of the ________.",
          options: ["Month", "Year", "Day"],
          correctAnswer: "Day",
        },
        {
          question:
            "Shadows are the shortest at ________ when the sun shines overhead.",
          options: ["Morning", "Evening", "Midday"],
          correctAnswer: "Midday",
        },
        {
          question: "The sun rises in the ________ and sets in the west.",
          options: ["North", "East", "South"],
          correctAnswer: "East",
        },
        {
          question: "When the sun sets, it starts to become ________.",
          options: ["Bright", "Dark", "Cloudy"],
          correctAnswer: "Dark",
        },
        {
          question: "Light always travels in a ________ line.",
          options: ["Curved", "Zigzag", "Straight"],
          correctAnswer: "Straight",
        },
        {
          question:
            "The night is cool and dark because we do not get ________ from the sun.",
          options: ["Heat and light", "Air and water", "Sound and color"],
          correctAnswer: "Heat and light",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The sun is a big ball of fire.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Shadows are formed on the same side of the light.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Light always travels in a zigzag line.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The night is warm and bright.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The length of shadows remains constant throughout the day.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Harvest festivals are celebrated in regions where the crop is ready to be harvested.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Onam is the harvest festival of Punjab.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Christmas is celebrated on 25th December every year.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The sun rises in the west and sets in the east.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Light disappears when it falls on an object.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
