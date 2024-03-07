export const chapter = "Chapter - 2: The Earth: Our Home Planet";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the Earth's position in the Solar System?",
        optionA: "Second planet",
        optionB: "Third planet",
        optionC: "Fourth planet",
        correctAnswer: "B",
      },
      {
        question: "Why is life possible on Earth?",
        optionA: "Due to the presence of air and water",
        optionB: "Due to the presence of air, water, land, and sunlight",
        optionC: "Due to the presence of land and sunlight",
        correctAnswer: "B",
      },
      {
        question:
          "What percentage of the Earth's atmosphere is composed of oxygen?",
        optionA: "21%",
        optionB: "78%",
        optionC: "0.04%",
        correctAnswer: "A",
      },
      {
        question: "What do animals and humans need from the air to live?",
        optionA: "Carbon dioxide",
        optionB: "Nitrogen",
        optionC: "Oxygen",
        correctAnswer: "C",
      },
      {
        question: "What do plants use carbon dioxide for?",
        optionA: "To make oxygen",
        optionB: "To make sunlight",
        optionC: "To make their food",
        correctAnswer: "C",
      },
      {
        question: "What percentage of the Earth's surface is covered by water?",
        optionA: "71%",
        optionB: "50%",
        optionC: "90%",
        correctAnswer: "A",
      },
      {
        question: "Which is the largest ocean on Earth?",
        optionA: "Atlantic Ocean",
        optionB: "Indian Ocean",
        optionC: "Pacific Ocean",
        correctAnswer: "C",
      },
      {
        question:
          "What are the large areas of land found on Earth's surface called?",
        optionA: "Valleys",
        optionB: "Continents",
        optionC: "Plains",
        correctAnswer: "B",
      },
      {
        question: "What is the tallest landform, often with a pointed peak?",
        optionA: "Hills",
        optionB: "Mountains",
        optionC: "Plateaus",
        correctAnswer: "B",
      },
      {
        question: "What causes day and night on Earth?",
        optionA: "Rotation",
        optionB: "Revolution",
        optionC: "Gravitational pull",
        correctAnswer: "A",
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
          "The Earth is the _______ planet from the Sun in the Solar System.",
        optionA: "first",
        optionB: "second",
        optionC: "third",
        correctAnswer: "third",
      },
      {
        question:
          "Life on Earth is possible due to the presence of air, water, land, and _______.",
        optionA: "clouds",
        optionB: "mountains",
        optionC: "sunlight",
        correctAnswer: "sunlight",
      },
      {
        question:
          "The Earth's atmosphere is primarily composed of about 78% _______.",
        optionA: "oxygen",
        optionB: "nitrogen",
        optionC: "carbon dioxide",
        correctAnswer: "nitrogen",
      },
      {
        question: "Humans need _______ in the air to live.",
        optionA: "carbon dioxide",
        optionB: "oxygen",
        optionC: "nitrogen",
        correctAnswer: "oxygen",
      },
      {
        question: "Plants use _______ in the air to make their food.",
        optionA: "oxygen",
        optionB: "carbon dioxide",
        optionC: "nitrogen",
        correctAnswer: "carbon dioxide",
      },
      {
        question: "Water covers approximately _______ of the Earth's surface.",
        optionA: "50%",
        optionB: "71%",
        optionC: "90%",
        correctAnswer: "71%",
      },
      {
        question: "The largest ocean on Earth is the _______.",
        optionA: "Atlantic Ocean",
        optionB: "Indian Ocean",
        optionC: "Pacific Ocean",
        correctAnswer: "Pacific Ocean",
      },
      {
        question:
          "The large areas of land on Earth's surface are known as _______.",
        optionA: "oceans",
        optionB: "continents",
        optionC: "islands",
        correctAnswer: "continents",
      },
      {
        question:
          "Mountains are tall landforms with steep sloping sides, often coming to a point at the top, called the _______.",
        optionA: "hill",
        optionB: "peak",
        optionC: "plateau",
        correctAnswer: "peak",
      },
      {
        question:
          "The Earth's movement that causes day and night is known as _______.",
        optionA: "rotation",
        optionB: "revolution",
        optionC: "gravitation",
        correctAnswer: "rotation",
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
          "The Earth is the second planet from the Sun in the Solar System.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The Earth's atmosphere primarily consists of carbon dioxide.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Water covers approximately 71% of the Earth's surface.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Mountains are landforms that usually have rounded tops.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "People living in plain areas usually live in igloos.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Sloping roofs on houses in mountain areas allow rain and snow to slide down easily.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Oceans are the largest water bodies on Earth's surface.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Revolution is the Earth's rotation on its axis.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Plants use oxygen in the air to make their food.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "People living in areas with a lot of rainfall build houses on stilts to prevent standing rainwater from entering.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
