export const chapter = "Chapter - 7: The Prairies : The Grasslands ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What type of climate characterizes the prairies in North America?",
        optionA: "Tropical",
        optionB: "Continental",
        optionC: "Mediterranean",
        correctAnswer: "Continental",
      },
      {
        question:
          "What are the different names for grasslands in various parts of the world mentioned in the text?",
        optionA: "Savannah, Tundra, Taiga",
        optionB: "Pampas, Downs, Steppes",
        optionC: "Rainforest, Desert, Prairie",
        correctAnswer: "Pampas, Downs, Steppes",
      },
      {
        question: "Which continent are the prairies mainly located in?",
        optionA: "Africa",
        optionB: "Asia",
        optionC: "North America",
        correctAnswer: "North America",
      },
      {
        question:
          "What natural features bound the prairies in the west and east?",
        optionA: "The Amazon River and Sahara Desert",
        optionB: "The Rocky Mountains and Great Lakes",
        optionC: "The Alps and the Mediterranean Sea",
        correctAnswer: "The Rocky Mountains and Great Lakes",
      },
      {
        question:
          "What is the main type of farming practiced in areas where rainfall is above 50 cm in the prairies?",
        optionA: "Rice farming",
        optionB: "Wheat and maize farming",
        optionC: "Coffee farming",
        correctAnswer: "Wheat and maize farming",
      },
      {
        question:
          "What local wind is mentioned as blowing in the prairies due to the absence of a north-south barrier?",
        optionA: "Typhoon",
        optionB: "Chinook",
        optionC: "Monsoon",
        correctAnswer: "Chinook",
      },
      {
        question:
          "What is the primary reason for the destruction of wildlife in the prairies?",
        optionA: "Natural disasters",
        optionB: "Game hunting and clearing for farming",
        optionC: "Pollution",
        correctAnswer: "Game hunting and clearing for farming",
      },
      {
        question:
          "What are the original inhabitants of the prairies, as mentioned in the text?",
        optionA: "Red Indians",
        optionB: "Vikings",
        optionC: "Mayans",
        correctAnswer: "Red Indians",
      },
      {
        question:
          "Why are the prairies often referred to as the 'Granaries of the World'?",
        optionA: "Due to their large gold deposits",
        optionB: "Because they are a major source of dairy products",
        optionC: "Because of their surplus wheat production",
        correctAnswer: "Because of their surplus wheat production",
      },
      {
        question:
          "Which means of transport is emphasized in the prairies as a lifeline for the economy?",
        optionA: "Air travel",
        optionB: "Waterways",
        optionC: "A network of roads, railways, and canals",
        correctAnswer: "A network of roads, railways, and canals",
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
          "The prairies are located in the heart of the continent, and the climate is of __________ type with extreme temperatures. The summers are warm with temperatures of around 20°C and winters are very cold with temperatures of around -20°C.",
        options: ["Coastal", "Continental", "Tropical"],
        correctAnswer: "Continental",
      },
      {
        question:
          "The grasslands in different parts of the world have different names. For example, they are known as pampas in South America, downs in Australia, steppes in Russia, velds in South Africa, and prairies in North America. Let's focus on the __________ in this lesson.",
        options: ["pampas", "downs", "steppes"],
        correctAnswer: "prairies",
      },
      {
        question: "The Rocky Mountains bound the prairies in the __________.",
        options: ["north", "south", "west"],
        correctAnswer: "west",
      },
      {
        question:
          "In the prairies, where sufficient water can be found, trees such as willows, alders, and poplars grow in these areas. Where rainfall is above 50 cm, farming is practiced as the soil is fertile. The main crops grown in this area include __________ and maize.",
        options: ["rice", "wheat", "coffee"],
        correctAnswer: "wheat",
      },
      {
        question:
          "In the prairies, those areas where rainfall is very little or unreliable, short and sparse grasses are found there. These areas are suitable for __________ rearing. Large cattle farms are called ranches and are looked after by sturdy men called cowboys.",
        options: ["horse", "cattle", "sheep"],
        correctAnswer: "cattle",
      },
      {
        question:
          "The prairies are home to a diverse variety of seed-eating birds and birds of prey. Bustards, hawks, owls, eagles, and falcons are some of them. Similarly, insects like grasshoppers, leaf-hoppers, and spiders are found in large numbers here. The prairies have a rich diversity of __________.",
        options: ["reptiles", "insects", "amphibians"],
        correctAnswer: "insects",
      },
      {
        question:
          "The people of the prairies are very industrious and have successfully harnessed technology to utilize natural resources. The prairies are often called the 'Granaries of the World' due to surplus __________ production.",
        options: ["dairy", "wheat", "cotton"],
        correctAnswer: "wheat",
      },
      {
        question:
          "The dairy belt in the prairies extends from the Great Lakes to the __________ Coast in the east. Advanced technology and modern machines are used for all operations, including bathing, feeding, and milking of cattle.",
        options: ["Atlantic", "Pacific", "Indian"],
        correctAnswer: "Atlantic",
      },
      {
        question:
          "There is a very good network of roads, railways, and canals in this region, and these facilities have made the prairies one of the most __________ regions in the world.",
        options: ["arid", "industrialized", "tropical"],
        correctAnswer: "industrialized",
      },
      {
        question:
          "The absence of the north-south barrier in the prairies allows a local wind called 'Chinook' to blow. This wind affects the __________ in the region.",
        options: ["temperature", "rainfall", "humidity"],
        correctAnswer: "temperature",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "Rainforests receive moderate rainfall.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The prairies are primarily located in South America.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The climate in the prairies is of a continental type with extreme temperatures.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Prairie grasslands are mainly treeless.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Ranches in the prairies are mainly used for coffee farming.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The prairies are home to a diverse variety of reptiles.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The prairies are known as the 'Granaries of the World' due to their surplus cotton production.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The dairy belt in the prairies extends from the Great Lakes to the Pacific Coast in the east.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The prairies have a very poor network of roads, railways, and canals.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The absence of the north-south barrier in the prairies allows a local wind called 'Chinook' to blow.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
