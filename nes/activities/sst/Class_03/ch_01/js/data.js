export const chapter = "Chapter - 1: The Solar System";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the primary source of life on Earth?",
        optionA: "The Moon",
        optionB: "The Sun",
        optionC: "The planets",
        correctAnswer: "The Sun",
      },
      {
        question: "What is the family of the Sun called?",
        optionA: "The Milky Way",
        optionB: "The Solar System",
        optionC: "The Galaxy",
        correctAnswer: "The Solar System",
      },
      {
        question: "How does the Sun provide heat and light to the Earth?",
        optionA: "It reflects light from other stars",
        optionB: "It has its own light source",
        optionC: "It doesn't provide heat and light",
        correctAnswer: "It has its own light source",
      },
      {
        question:
          "How long does it take for sunlight to reach the Earth from the Sun?",
        optionA: "24 hours",
        optionB: "8 minutes",
        optionC: "365 days",
        correctAnswer: "8 minutes",
      },
      {
        question: "How many planets are there in the Solar System?",
        optionA: "10 planets",
        optionB: "12 planets",
        optionC: "8 planets",
        correctAnswer: "8 planets",
      },
      {
        question: "What makes planets in the Solar System visible from Earth?",
        optionA: "They emit their own light",
        optionB: "They are illuminated by the Moon",
        optionC: "They reflect the light of the Sun",
        correctAnswer: "They reflect the light of the Sun",
      },
      {
        question: "What is a satellite in the context of the Solar System?",
        optionA: "A planet that orbits the Sun",
        optionB: "Any object moving in a fixed orbit around a planet",
        optionC: "A natural satellite of the Earth",
        correctAnswer: "Any object moving in a fixed orbit around a planet",
      },
      {
        question: "How many natural satellites does the Earth have?",
        optionA: "None",
        optionB: "One",
        optionC: "Multiple",
        correctAnswer: "One",
      },
      {
        question:
          "What causes the Moon to appear to change its shape over time?",
        optionA: "Its rotation on its axis",
        optionB: "Its orbit around the Earth",
        optionC: "Illumination by the Sun on different days",
        correctAnswer: "Illumination by the Sun on different days",
      },
      {
        question:
          "How long does it take for the Moon to complete one rotation on its axis and one revolution around the Earth?",
        optionA: "12 hours",
        optionB: "30 days",
        optionC: "27½ days",
        correctAnswer: "27½ days",
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
          "The ____________ is the primary source of life on Earth. It gives us heat and light.",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Planets",
        correctAnswer: "Sun",
      },
      {
        question: "The family of the Sun is called the ____________.",
        optionA: "Milky Way",
        optionB: "Solar System",
        optionC: "Galaxy",
        correctAnswer: "Solar System",
      },
      {
        question:
          "The Sun is very hot because of the continuous huge explosions of ____________ happening in it.",
        optionA: "Air",
        optionB: "Water",
        optionC: "Gases",
        correctAnswer: "Gases",
      },
      {
        question:
          "The Sun is approximately 100 times bigger than the ____________.",
        optionA: "Moon",
        optionB: "Earth",
        optionC: "Jupiter",
        correctAnswer: "Earth",
      },
      {
        question:
          "It takes approximately ____________ for sunlight to reach the Earth.",
        optionA: "1 minute",
        optionB: "8 minutes",
        optionC: "24 hours",
        correctAnswer: "8 minutes",
      },
      {
        question:
          "After the Sun, the most important members of the Solar System are the ____________.",
        optionA: "Comets",
        optionB: "Stars",
        optionC: "Planets",
        correctAnswer: "Planets",
      },
      {
        question:
          "Planets in the Solar System move around the Sun in their fixed ____________.",
        optionA: "Galaxies",
        optionB: "Orbits",
        optionC: "Moons",
        correctAnswer: "Orbits",
      },
      {
        question:
          "The Earth has only one natural satellite, the ____________, which shines in the sky at night.",
        optionA: "Sun",
        optionB: "Venus",
        optionC: "Moon",
        correctAnswer: "Moon",
      },
      {
        question:
          "The Moon has no light of its own. It is lit up by the light from the ____________.",
        optionA: "Stars",
        optionB: "Planets",
        optionC: "Sun",
        correctAnswer: "Sun",
      },
      {
        question:
          "The time taken by the Moon to complete one rotation on its axis and revolution around the Earth is the same, which is ____________ days.",
        optionA: "30 days",
        optionB: "27½ days",
        optionC: "365 days",
        correctAnswer: "27½ days",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The Sun is a planet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "All planets in the Solar System have their own light source.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Moon is a natural satellite of the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Planets in the Solar System move around the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Sun is about 100 times smaller than the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "It takes approximately 8 hours for sunlight to reach the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Solar System consists of the Sun, eight planets, and their moons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The Moon has its own light source.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The time of rotation and revolution of each planet in the Solar System is the same.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Earth is the only planet in the Solar System with a natural satellite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
