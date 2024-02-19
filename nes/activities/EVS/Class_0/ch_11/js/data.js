export const chapter = "Chapter - 11: Up in the Sky";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the bird doing in the picture?",
          optionA: "Eating",
          optionB: "Flying",
          optionC: "Swimming",
          correctAnswer: "b) Flying",
        },
        {
          question:
            "What is the wide open space above us referred to as in the text?",
          optionA: "Ocean",
          optionB: "Sky",
          optionC: "Forest",
          correctAnswer: "b) Sky",
        },
        {
          question: "In the sky, what can we see during the daytime?",
          optionA: "Moon",
          optionB: "Stars",
          optionC: "Sun",
          correctAnswer: "c) Sun",
        },
        {
          question: "What does the Sun give us during the day?",
          optionA: "Heat",
          optionB: "Music",
          optionC: "Paintings",
          correctAnswer: "a) Heat",
        },
        {
          question: "What do we see at night in the sky?",
          optionA: "Clouds",
          optionB: "Rainbows",
          optionC: "Moon and twinkling stars",
          correctAnswer: "c) Moon and twinkling stars",
        },
        {
          question: "What gives us light during the day?",
          optionA: "Moon",
          optionB: "Stars",
          optionC: "Sun",
          correctAnswer: "c) Sun",
        },
        {
          question: "Which celestial body is visible at night?",
          optionA: "Sun",
          optionB: "Moon",
          optionC: "Clouds",
          correctAnswer: "b) Moon",
        },
        {
          question: "What do we see twinkling at night?",
          optionA: "Clouds",
          optionB: "Stars",
          optionC: "Rainbows",
          correctAnswer: "b) Stars",
        },
        {
          question: "When do we see the Moon and stars in the sky?",
          optionA: "During the day",
          optionB: "At night",
          optionC: "During the evening",
          correctAnswer: "b) At night",
        },
        {
          question: "What do stars do at night?",
          optionA: "Dance",
          optionB: "Twinkle",
          optionC: "Sleep",
          correctAnswer: "b) Twinkle",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Look at the picture. Here, the bird is flying high in the ___________.",
          optionA: "ocean",
          optionB: "sky",
          optionC: "forest",
          correctAnswer: "sky",
        },
        {
          question: "The wide open space above us is the ___________.",
          optionA: "ocean",
          optionB: "mountain",
          optionC: "sky",
          correctAnswer: "sky",
        },
        {
          question:
            "In the sky, we see many things such as ___________, Moon, and Stars.",
          optionA: "clouds",
          optionB: "Sun",
          optionC: "rivers",
          correctAnswer: "Sun",
        },
        {
          question:
            "In the day time, we see the Sun. It gives us: ___________.",
          optionA: "happiness",
          optionB: "heat",
          optionC: "music",
          correctAnswer: "heat",
        },
        {
          question: "At night, we see the Moon and the twinkling ___________.",
          optionA: "clouds",
          optionB: "rainbows",
          optionC: "stars",
          correctAnswer: "stars",
        },
        {
          question:
            "What is the bird doing in the picture? Here, the bird is ___________ high in the sky.",
          optionA: "swimming",
          optionB: "flying",
          optionC: "sleeping",
          correctAnswer: "flying",
        },
        {
          question: "The wide open space above us is the ___________.",
          optionA: "ocean",
          optionB: "desert",
          optionC: "sky",
          correctAnswer: "sky",
        },
        {
          question:
            "In the sky, we see many things such as Sun, ___________, and Stars.",
          optionA: "rain",
          optionB: "Moon",
          optionC: "thunder",
          correctAnswer: "Moon",
        },
        {
          question:
            "In the day time, we see the ___________. It gives us: light.",
          optionA: "Moon",
          optionB: "river",
          optionC: "Sun",
          correctAnswer: "Sun",
        },
        {
          question: "At night, we see the Moon and the twinkling ___________.",
          optionA: "clouds",
          optionB: "snowflakes",
          optionC: "stars",
          correctAnswer: "stars",
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
            "Look at the picture. Here, the bird is flying high in the sky.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The wide open space above us is the ocean.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the sky, we see many things such as the Sun, Moon, and Stars.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The Sun gives us music during the day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "At night, we see the Moon and the twinkling clouds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The bird in the picture is swimming in the water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The wide open space above us is the forest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "We see thunder in the sky during the day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The Moon gives us light during the night.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Stars twinkle in the sky at night.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
