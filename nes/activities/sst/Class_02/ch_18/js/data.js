export const chapter = "Chapter - 18: Forms of Land";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What fraction of the Earth's surface is covered by water?",
        optionA: "One-half",
        optionB: "One-third",
        optionC: "Two-thirds",
        correctAnswer: "C",
      },
      {
        question:
          "What type of landform is characterized by a large, flat area where many people live and grow crops?",
        optionA: "Hills",
        optionB: "Mountains",
        optionC: "Plains",
        correctAnswer: "C",
      },
      {
        question:
          "What are the topmost parts of very high areas of land called?",
        optionA: "Peaks",
        optionB: "Valleys",
        optionC: "Deserts",
        correctAnswer: "A",
      },
      {
        question:
          "Which landform is known for its fertility, with many rivers flowing through it?",
        optionA: "Mountains",
        optionB: "Valleys",
        optionC: "Deserts",
        correctAnswer: "B",
      },
      {
        question:
          "What type of landform is characterized by a lack of water and extreme heat?",
        optionA: "Hills",
        optionB: "Valleys",
        optionC: "Deserts",
        correctAnswer: "C",
      },
      {
        question:
          "What type of landform is typically covered by thick forests and is often V-shaped?",
        optionA: "Plains",
        optionB: "Valleys",
        optionC: "Mountains",
        correctAnswer: "B",
      },
      {
        question:
          "A plateau is a landform that is higher than the nearby land and has a flat top. What is the surface of a plateau like?",
        optionA: "Fertile",
        optionB: "Sandy and dry",
        optionC: "Rocky",
        correctAnswer: "C",
      },
      {
        question:
          "Which landform is rocky and has a rocky surface but is not fertile?",
        optionA: "Valleys",
        optionB: "Plains",
        optionC: "Plateaus",
        correctAnswer: "C",
      },
      {
        question: "From where do many rivers rise?",
        optionA: "Plains",
        optionB: "Valleys",
        optionC: "Mountains",
        correctAnswer: "C",
      },
      {
        question: "What fraction of the Earth's surface is covered by land?",
        optionA: "One-half",
        optionB: "One-third",
        optionC: "Two-thirds",
        correctAnswer: "B",
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
          "The Earth is the planet we live on. Its ________ part is land and ________ part is water.",
        options: [
          "One-half, one-half",
          "Two-thirds, one-third",
          "One-third, two-thirds",
        ],
        correctAnswer: "One-third, two-thirds",
      },
      {
        question:
          "Plains are characterized by a large area of flat land, and most of the people live and grow crops on _________. The plains are usually _________.",
        options: ["Mountains, rocky", "Valleys, sandy", "Plains, fertile"],
        correctAnswer: "Plains, fertile",
      },
      {
        question:
          "High areas of land are called hills, and very high areas are called _________. The topmost part of the mountain is known as the _________.",
        options: ["Plains, base", "Mountains, summit", "Valleys, peak"],
        correctAnswer: "Mountains, summit",
      },
      {
        question:
          "Valleys are typically found between two hills or mountains and are often shaped like a _________. The land in valleys is generally very _________.",
        options: ["Mountains, rocky", "Plains, fertile", "Valleys, flat"],
        correctAnswer: "Valleys, flat",
      },
      {
        question:
          "A desert is a very hot, sandy, and dry place with a lack of water. There is a scarcity of water as a result of the extreme _________.",
        options: ["Cold", "Heat", "Rainfall"],
        correctAnswer: "Heat",
      },
      {
        question:
          "Plateaus are lands that are higher than the nearby land but have a flat top. They are usually characterized by a ________ surface, making them less _________.",
        options: ["Rocky, fertile", "Sandy, populated", "Fertile, hilly"],
        correctAnswer: "Rocky, fertile",
      },
      {
        question:
          "Many rivers rise from the _________. These high areas are called _________.",
        options: ["Deserts, plains", "Hills, valleys", "Mountains, peaks"],
        correctAnswer: "Mountains, peaks",
      },
      {
        question:
          "The land is flat at some places, and a large area of flat land is called _________. Most of the people live and grow crops on _________.",
        options: ["Valleys, mountains", "Plains, plateaus", "Deserts, hills"],
        correctAnswer: "Plains, plateaus",
      },
      {
        question:
          "Valleys are often covered by thick _________. The lowlands between two hills or mountains are called _________.",
        options: ["Snow, rivers", "Forests, valleys", "Deserts, plains"],
        correctAnswer: "Forests, valleys",
      },
      {
        question:
          "The Earth's surface is divided into two major parts: land and water. Approximately ________ of the Earth's surface is covered by water, while ________ is covered by land.",
        options: [
          "One-third, two-thirds",
          "Two-thirds, one-third",
          "One-half, one-half",
        ],
        correctAnswer: "Two-thirds, one-third",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Earth's surface is one-third land and two-thirds water.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Valleys are typically covered by thick forests and are often V-shaped.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Plains are generally rocky and not fertile.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Deserts are known for their extreme heat, lack of water, and sandy, dry conditions.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Hills are high areas of land, and very high areas are called mountains.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Valleys are lowlands between two hills or mountains.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Plateaus are lands that are lower than the nearby land and have a flat top.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Rivers often rise from the mountains.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The majority of people live and grow crops on mountains.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The Earth's surface is divided into two major parts: land and air.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
