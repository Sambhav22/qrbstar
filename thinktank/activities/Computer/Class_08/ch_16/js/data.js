export const chapter = "Chapter - 16: Natural Resources : Land and Soil ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What percentage of the Earth's surface is covered by land?",
        optionA: "29%",
        optionB: "43%",
        optionC: "30%",
        correctAnswer: "a) 29%",
      },
      {
        question: "Why is only 30% of the land inhabited by people?",
        optionA: "Steep mountainous slopes",
        optionB: "Lack of water",
        optionC: "Extreme cold",
        correctAnswer: "a) Steep mountainous slopes",
      },
      {
        question: "What is the primary use of land in fulfilling human needs?",
        optionA: "Growing crops",
        optionB: "Setting up industries",
        optionC: "Building dams",
        correctAnswer: "a) Growing crops",
      },
      {
        question:
          "Which landform is known for being home to glaciers that feed perennial rivers?",
        optionA: "Plains",
        optionB: "Mountains",
        optionC: "Plateaus",
        correctAnswer: "b) Mountains",
      },
      {
        question:
          "Which of the following plains has been the cradle of great civilizations in history?",
        optionA: "Ganga-Brahmaputra Plains",
        optionB: "Prairies",
        optionC: "Yangtze-Kiang Plains",
        correctAnswer: "a) Ganga-Brahmaputra Plains",
      },
      {
        question:
          "What type of soil is rich in iron and suitable for crops like cotton and tobacco?",
        optionA: "Alluvial Soil",
        optionB: "Black Soil",
        optionC: "Laterite Soil",
        correctAnswer: "b) Black Soil",
      },
      {
        question: "What is the bottom layer of soil called?",
        optionA: "Subsoil",
        optionB: "Parent rock",
        optionC: "Bedrock",
        correctAnswer: "c) Bedrock",
      },
      {
        question:
          "Which factor influences soil formation due to its role in chemical reactions?",
        optionA: "Climate",
        optionB: "Topography",
        optionC: "Time",
        correctAnswer: "a) Climate",
      },
      {
        question: "What is the main purpose of crop rotation in agriculture?",
        optionA: "Increase soil erosion",
        optionB: "Improve soil fertility",
        optionC: "Save water",
        correctAnswer: "b) Improve soil fertility",
      },
      {
        question: "How can soil erosion be checked in areas with strong winds?",
        optionA: "Crop rotation",
        optionB: "Terrace farming",
        optionC: "Shelterbelts",
        correctAnswer: "c) Shelterbelts",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "Land covers about ______% of the Earth's surface.",
        optionA: "29%",
        optionB: "43%",
        optionC: "30%",
        correctAnswer: "29%",
      },
      {
        question:
          "Only _____% of the land is inhabited, with the remaining being sparsely populated or uninhabited.",
        optionA: "30%",
        optionB: "40%",
        optionC: "50%",
        correctAnswer: "30%",
      },
      {
        question:
          "Land is primarily used for various purposes such as settlement, growing crops, grazing animals, mining, setting up industries, and building _____.",
        optionA: "Rivers",
        optionB: "Roads",
        optionC: "Railways",
        correctAnswer: "Roads",
      },
      {
        question:
          "_____, plains, and plateaus are the three main types of landforms on Earth.",
        optionA: "Mountains",
        optionB: "Deserts",
        optionC: "Oceans",
        correctAnswer: "Mountains",
      },
      {
        question:
          "The _____ is an example of old mountains with rounded peaks, while the _____ are young mountains with high and steep peaks.",
        optionA: "Rockies, Himalayas",
        optionB: "Alps, Andes",
        optionC: "Aravallis, Kunlun Shan",
        correctAnswer: "Rockies, Himalayas",
      },
      {
        question:
          "_____ provide the most favorable conditions for habitation due to their low altitude, fertile soil, and abundant water supply.",
        optionA: "Mountains",
        optionB: "Deserts",
        optionC: "Plains",
        correctAnswer: "Plains",
      },
      {
        question:
          "Plateaus are characterized by their flat lands and are often rich sources of _____.",
        optionA: "Minerals",
        optionB: "Oceans",
        optionC: "Forests",
        correctAnswer: "Minerals",
      },
      {
        question:
          "India is unique in its geographical features, as it has mountains, plains, and plateaus. The great Himalayas in the north are the highest _____.",
        optionA: "Deserts",
        optionB: "Mountains",
        optionC: "Rivers",
        correctAnswer: "Mountains",
      },
      {
        question:
          "_____ is the most fertile soil in India, suitable for crops like rice, sugarcane, and wheat.",
        optionA: "Black Soil",
        optionB: "Alluvial Soil",
        optionC: "Laterite Soil",
        correctAnswer: "Alluvial Soil",
      },
      {
        question:
          "Soil erosion can be caused by natural factors such as _____ and human factors like poor agricultural practices.",
        optionA: "Winds",
        optionB: "Volcanoes",
        optionC: "Earthquakes",
        correctAnswer: "Winds",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Land covers about 29% of the Earth's surface.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Only 30% of the land is inhabited, with the remaining being sparsely populated or uninhabited.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Land is primarily used for various purposes such as settlement, growing crops, grazing animals, mining, setting up industries, and building roads.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Mountains, plains, and plateaus are the three main types of landforms on Earth.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The Rockies are an example of old mountains with rounded peaks, while the Himalayas are young mountains with high and steep peaks.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Plains provide the most favorable conditions for habitation due to their low altitude, fertile soil, and abundant water supply.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Plateaus are characterized by their flat lands and are often rich sources of minerals.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "India is unique in its geographical features, as it has mountains, plains, and plateaus.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Alluvial soil is the most fertile soil in India, suitable for crops like rice, sugarcane, and wheat.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Soil erosion can be caused by natural factors such as winds and human factors like poor agricultural practices.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
