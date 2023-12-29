export const chapter = "Chapter - 4: Congo: The Land of Forests  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Which of the following regions are considered equatorial regions?",
        options: [
          "Between 20°N and 20°S",
          "Between 0°N and 10°S",
          "Between 5°N and 5°S",
        ],
        answer: "Between 5°N and 5°S",
      },
      {
        question:
          "What percentage of the Earth's surface do equatorial regions cover?",
        options: ["About 10%", "About 6%", "About 20%"],
        answer: "About 6%",
      },
      {
        question:
          "Which of the following basins is located in equatorial regions?",
        options: ["Amazon Basin", "Mississippi Basin", "Nile Basin"],
        answer: "Amazon Basin",
      },
      {
        question:
          "What is the climate like in most parts of the Democratic Republic of Congo (DRC)?",
        options: ["Hot and dry", "Hot and wet", "Cold and wet"],
        answer: "Hot and wet",
      },
      {
        question:
          "What is the second largest river in Africa that flows through the DRC?",
        options: ["Nile River", "Congo River", "Amazon River"],
        answer: "Congo River",
      },
      {
        question:
          "Which ethnic group is believed to be the original inhabitants of Congo and lives in the dense forests?",
        options: ["Bantu", "Luba", "Pygmies"],
        answer: "Pygmies",
      },
      {
        question: "What is the main religion in Congo?",
        options: ["Islam", "Christianity", "Hinduism"],
        answer: "Christianity",
      },
      {
        question:
          "Which type of agriculture, characterized by clearing and farming for a few years before abandonment, has led to deforestation in Congo?",
        options: [
          "Commercial agriculture",
          "Shifting cultivation",
          "Organic farming",
        ],
        answer: "Shifting cultivation",
      },
      {
        question: "What is the primary source of energy in Congo?",
        options: ["Coal", "Mineral oil", "Hydroelectricity"],
        answer: "Hydroelectricity",
      },
      {
        question:
          "Which major city is the largest in Congo and situated on the southern bank of the Congo River?",
        options: ["Matadi", "Bokavu", "Kinshasa"],
        answer: "Kinshasa",
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
          "Equatorial regions are located on or near the Equator (between 5°N and ________).",
        options: ["20°N", "10°N", "5°S"],
        correctAnswer: "5°S",
      },
      {
        question:
          "Equatorial regions lie in the Torrid Zone, the area on both sides of the Equator between ________ and Tropic of Capricorn.",
        options: [
          "Tropic of Cancer",
          "Prime Meridian",
          "International Date Line",
        ],
        correctAnswer: "Tropic of Cancer",
      },
      {
        question:
          "The Equatorial regions cover about ________ of the Earth's surface.",
        options: ["10%", "6%", "20%"],
        correctAnswer: "6%",
      },
      {
        question:
          "Some regions of Asia, such as parts of Indonesia and ________, are located in equatorial regions.",
        options: ["India", "China", "Malaysia"],
        correctAnswer: "Malaysia",
      },
      {
        question: "Equatorial regions do not have a ________ or dry season.",
        options: ["cold", "winter", "hot"],
        correctAnswer: "winter",
      },
      {
        question:
          "The diurnal range of temperature in equatorial regions is usually ________.",
        options: ["small", "greater", "constant"],
        correctAnswer: "greater",
      },
      {
        question:
          "Congo is officially known as the Democratic Republic of Congo (DRC) and is the ________ largest country on the African continent.",
        options: ["largest", "second largest", "third largest"],
        correctAnswer: "second largest",
      },
      {
        question:
          "The capital of Congo, Kinshasa, is located on the Congo River about ________ miles from its mouth.",
        options: ["100 km", "250 km", "515 km"],
        correctAnswer: "515 km",
      },
      {
        question:
          "The Democratic Republic of Congo is almost a landlocked country with only a narrow outlet to the ________ Ocean.",
        options: ["Pacific", "Atlantic", "Indian"],
        correctAnswer: "Atlantic",
      },
      {
        question:
          "The climate in most parts of the DRC is very hot throughout the year since it is near the ________.",
        options: ["Arctic Circle", "Tropic of Capricorn", "Equator"],
        correctAnswer: "Equator",
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
          "The equatorial regions are located mainly between 5°N and 5°S.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Equatorial regions experience a distinct winter season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Congo River is the second longest river in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Congo gained independence from France in 1960.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Democratic Republic of Congo is a landlocked country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The majority of the DRC's population lives in urban areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Christianity is the predominant religion in Congo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Shifting cultivation in the DRC has led to deforestation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Congo Basin covers almost the entire territory of the DRC.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The Indira Gandhi Canal provides water to the Thar Desert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
