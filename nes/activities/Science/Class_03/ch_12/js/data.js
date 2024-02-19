export const chapter = "Chapter - 12: The Earth and Its Neighbours";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the Sun's role in the Solar System?",
          optionA: "It revolves around the Earth",
          optionB: "It provides heat and light to planets",
          optionC: "It reflects the light of the planets",
          correctAnswer: "B) It provides heat and light to planets",
        },
        {
          question: "How many planets are there in the Solar System?",
          optionA: "7",
          optionB: "9",
          optionC: "8",
          correctAnswer: "C) 8",
        },
        {
          question: "Why is Earth considered unique in the Solar System?",
          optionA: "It is the largest planet",
          optionB: "It is the only planet with life",
          optionC: "It is closest to the Sun",
          correctAnswer: "B) It is the only planet with life",
        },
        {
          question: "How did ancient thinkers deduce the Earth's round shape?",
          optionA: "By observing the Moon's phases",
          optionB: "By sailing on ships and observing flags",
          optionC: "By studying the movements of stars",
          correctAnswer: "B) By sailing on ships and observing flags",
        },
        {
          question: "What is the shape of the Earth described in the text?",
          optionA: "Perfectly spherical",
          optionB: "Shaped like an orange",
          optionC: "Flat and rectangular",
          correctAnswer: "B) Shaped like an orange",
        },
        {
          question:
            "What is responsible for the formation of day and night on Earth?",
          optionA: "Revolution",
          optionB: "Rotation",
          optionC: "Both Revolution and Rotation",
          correctAnswer: "B) Rotation",
        },
        {
          question:
            "How long does it take for the Earth to complete one revolution around the Sun?",
          optionA: "365 days",
          optionB: "365¼ days",
          optionC: "366 days",
          correctAnswer: "B) 365¼ days",
        },
        {
          question: "What causes the Moon's changing shapes, known as phases?",
          optionA: "Earth's rotation",
          optionB: "Moon's revolution",
          optionC: "Earth's orbit",
          correctAnswer: "B) Moon's revolution",
        },
        {
          question: "Why do stars appear small or dim in the night sky?",
          optionA: "They are far away from Earth",
          optionB: "They are small in size",
          optionC: "They have no light of their own",
          correctAnswer: "A) They are far away from Earth",
        },
        {
          question:
            "What is a group of stars forming a pattern in the sky called?",
          optionA: "Galaxy",
          optionB: "Constellation",
          optionC: "Solar System",
          correctAnswer: "B) Constellation",
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
          question:
            "The Sun is a ________ and lies in the center of the Solar System. It is around 100 times ________ than our Earth. Sun looks bigger because it is closer to the Earth than any other ________.",
          options: ["Planet", "Star", "Moon"],
          correctAnswer: "Star",
        },
        {
          question:
            "Earth is the only planet in the Solar System that has ________. It is at the right ________ from the Sun and is neither too hot nor too cold for plants and animals to live.",
          options: ["No life", "Life", "Oceans"],
          correctAnswer: "Life",
        },
        {
          question:
            "The Earth is shaped like an orange, round from sides and slightly flattened at the ________ and the ________.",
          options: ["Top", "Bottom", "East", "West"],
          correctAnswer: "Top, Bottom",
        },
        {
          question:
            "The movement of the Earth spinning on its ________ is known as rotation. It takes ________ hours to complete its one rotation.",
          options: ["Revolution, 365", "Axis, 24", "Orbit, 29½"],
          correctAnswer: "Axis, 24",
        },
        {
          question:
            "The Earth also ________ around the Sun. This movement of the Earth around the Sun in its ________ is called revolution.",
          options: ["Rotates, Axis", "Revolves, Orbit", "Spins, Rotation"],
          correctAnswer: "Revolves, Orbit",
        },
        {
          question:
            "The Moon is a natural ________ of the Earth because it rotates around the Earth. It takes ________ days to complete its one rotation.",
          options: ["Star, 365", "Satellite, 29½", "Planet, 24"],
          correctAnswer: "Satellite, 29½",
        },
        {
          question:
            "Stars are the huge balls of ________ that have light of their own. They appear very small or dim because they are far away from the ________.",
          options: ["Water, Earth", "Gases, Earth", "Rock, Moon"],
          correctAnswer: "Gases, Earth",
        },
        {
          question:
            "The group of stars which form a pattern in the sky is called ________. The stars in the sky are divided into ________ constellations.",
          options: ["Galaxy, 88", "Nebula, 15", "Constellation, 88"],
          correctAnswer: "Constellation, 88",
        },
        {
          question:
            "In the north, before the first two stars of Ursa Major, there is a shining star called ________. In the east of Ursa Major, there is a group of fifteen stars called ________.",
          options: [
            "Pole Star, Orion",
            "North Star, Draco",
            "Sirius, Pleiades",
          ],
          correctAnswer: "Pole Star, Orion",
        },
        {
          question:
            "The revolution of Moon around the Earth makes the Moon appear as it is changing its ________. The changing shapes of the Moon are called its ________.",
          options: ["Colors, Orbits", "Phases, Positions", "Sizes, Movements"],
          correctAnswer: "Phases, Positions",
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
          question: "The Sun is the largest planet in the Solar System.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "All planets in the Solar System have their own light.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The Earth is the second planet from the Sun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Earth's rotation is responsible for the formation of day and night.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The Moon has its own light.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Stars appear small or dim in the night sky because they are close to the Earth.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Ursa Major is a constellation in the southern hemisphere.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Earth's revolution is responsible for the change in seasons.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Holi is also known as the Festival of Lights.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Moon's revolution around the Earth does not affect its appearance or phases.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
