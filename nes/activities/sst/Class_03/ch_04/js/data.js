export const chapter = "Chapter - 4: Physical Features of India  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What type of physical features are found in India, making it a diverse country?",
        options: [
          "Cultural features",
          "Economic features",
          "Geographical features",
        ],
        answer: "Geographical features",
      },
      {
        question: "What major physiographic form are the Himalayas a part of?",
        options: [
          "The Great Indian Desert",
          "The Northern Plains",
          "The Northern Mountains",
        ],
        answer: "The Northern Mountains",
      },
      {
        question:
          "Which river originates in the Himalayas and is a major source of hydel power?",
        options: ["Ganga", "Brahmaputra", "Yamuna"],
        answer: "Ganga",
      },
      {
        question:
          "What is the primary reason for the fertility of the Northern Plains in India?",
        options: [
          "Dense population",
          "Favorable climate and adequate water supply",
          "Deposits of minerals",
        ],
        answer: "Favorable climate and adequate water supply",
      },
      {
        question:
          "Which river mainly drains the Ganga Plains in the Northern Plains of India?",
        options: ["Brahmaputra", "Ganga", "Yamuna"],
        answer: "Ganga",
      },
      {
        question:
          "The Great Indian Desert is primarily located in which Indian state?",
        options: ["Maharashtra", "Rajasthan", "Haryana"],
        answer: "Rajasthan",
      },
      {
        question:
          "Which type of vegetation is found in the Great Indian Desert (Thar Desert)?",
        options: ["Dense forests", "Thorn and scrub vegetation", "Grasslands"],
        answer: "Thorn and scrub vegetation",
      },
      {
        question:
          "What large water bodies surround the Southern Peninsula of India?",
        options: ["Rivers and lakes", "Mountains and hills", "Oceans and seas"],
        answer: "Oceans and seas",
      },
      {
        question:
          "What separates the Southern Plateau in the Southern Peninsula from the Northern Plains?",
        options: [
          "Eastern Ghats and Western Ghats",
          "Arabian Sea and Bay of Bengal",
          "Vindhya and Satpura ranges",
        ],
        answer: "Vindhya and Satpura ranges",
      },
      {
        question:
          "In which body of water can you find the Andaman and Nicobar Islands?",
        options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean"],
        answer: "Bay of Bengal",
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
          "India is known for its diverse ________________, including culture, economy, and landscape.",
        options: ["heritage", "features", "traditions"],
        correctAnswer: "features",
      },
      {
        question:
          "The physical features of India can be divided into five broad categories according to their physiographic forms: The Northern Mountains, The Northern Plains, The Great Indian Desert, The Southern Peninsula, and ________________.",
        options: [
          "The Coastal Plains",
          "The Deccan Plateau",
          "The Western Ghats",
        ],
        correctAnswer: "The Coastal Plains",
      },
      {
        question:
          "The Himalayas act as an effective barrier by blocking the inflow of cold, dry air into the north during ________________.",
        options: ["summer", "winter", "monsoon"],
        correctAnswer: "winter",
      },
      {
        question:
          "The glaciers in the Himalayas give rise to perennial rivers like the Ganga, Yamuna, Kosi, which provide water for drinking as well as ________________ in the north-Indian plains.",
        options: ["agriculture", "transportation", "industry"],
        correctAnswer: "agriculture",
      },
      {
        question:
          "The Northern Plains are formed due to the depositional activities of the ________________ rivers.",
        options: ["Himalayan", "Ganga", "Brahmaputra"],
        correctAnswer: "Himalayan",
      },
      {
        question:
          "The Great Indian Desert, also known as the Thar Desert, is primarily located in the state of ________________.",
        options: ["Maharashtra", "Rajasthan", "Gujarat"],
        correctAnswer: "Rajasthan",
      },
      {
        question:
          "Thorn and scrub type of vegetation is found in the Great Indian Desert, and the only large river in this region is ________________.",
        options: ["Ganga", "Brahmaputra", "Luni"],
        correctAnswer: "Luni",
      },
      {
        question:
          "The Indian Peninsula is surrounded by the Bay of Bengal to its east, the Arabian Sea to its west, and the ________________ to its south.",
        options: ["Himalayas", "Indian Ocean", "Eastern Ghats"],
        correctAnswer: "Indian Ocean",
      },
      {
        question:
          "The Southern Plateau in the Southern Peninsula is bordered on the east by the ________________ and on the west by the Western Ghats.",
        options: ["Himalayas", "Eastern Ghats", "Western Plains"],
        correctAnswer: "Eastern Ghats",
      },
      {
        question:
          "India has small islands in the Arabian Sea called the Lakshadweep Islands and in the Bay of Bengal called the Andaman and ________________ Islands.",
        options: ["Ceylon", "Maldives", "Nicobar"],
        correctAnswer: "Nicobar",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "India is a land of diversity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The Northern Mountains are also known as the Himalayas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Himalayas act as a barrier to the inflow of cold, dry air during winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The Northern Plains are formed due to volcanic activity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Great Indian Desert is primarily located in the state of Rajasthan.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Ganga Plains are mainly drained by the river Brahmaputra and its tributaries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Indian Peninsula is surrounded by the Pacific Ocean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Southern Plateau in the Southern Peninsula is bordered by the Himalayas on the east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "India has small islands in the Arabian Sea called the Maldives Islands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The amount of usable water on Earth is infinite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
