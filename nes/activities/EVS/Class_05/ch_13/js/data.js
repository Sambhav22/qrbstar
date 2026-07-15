export const chapter = "Chapter -13: Shelter for All";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "What are houses for humans primarily designed to protect against?",
          "optionA": "Harsh weather",
          "optionB": "Theft",
          "optionC": "Wild animals",
          "correctAnswer": "Harsh weather"
        }),
      shuffleOptions({
          "question": "Which of the following insects build colonies consisting of chambers to store food and for other purposes?",
          "optionA": "Bees",
          "optionB": "Ants",
          "optionC": "Butterflies",
          "correctAnswer": "Ants"
        }),
      shuffleOptions({
          "question": "What is the primary material used for houses in hilly and cold regions?",
          "optionA": "Bamboo",
          "optionB": "Wood",
          "optionC": "Ice blocks",
          "correctAnswer": "Wood"
        }),
      shuffleOptions({
          "question": "What type of houses are common in flood-prone areas?",
          "optionA": "Igloos",
          "optionB": "Tents",
          "optionC": "Houses on stilts",
          "correctAnswer": "Houses on stilts"
        }),
      shuffleOptions({
          "question": "What material is commonly used for houses in earthquake-prone regions to prevent injury in case of collapse?",
          "optionA": "Bamboo",
          "optionB": "Wood",
          "optionC": "Mud",
          "correctAnswer": "Wood"
        }),
      shuffleOptions({
          "question": "What material are houses in hot regions primarily made of to prevent overheating?",
          "optionA": "Bamboo",
          "optionB": "Stone",
          "optionC": "Mud",
          "correctAnswer": "Mud"
        }),
      shuffleOptions({
          "question": "Which type of settlement is smaller than a village and is clustered together close to the road?",
          "optionA": "Town",
          "optionB": "Hamlet",
          "optionC": "City",
          "correctAnswer": "Hamlet"
        }),
      shuffleOptions({
          "question": "What term is used for a large human settlement with extensive housing, transportation, and communication systems?",
          "optionA": "Village",
          "optionB": "City",
          "optionC": "Town",
          "correctAnswer": "City"
        }),
      shuffleOptions({
          "question": "What are terrestrial animals?",
          "optionA": "Animals that live in water",
          "optionB": "Animals that fly in the air",
          "optionC": "Animals that live on land",
          "correctAnswer": "Animals that live on land"
        }),
      shuffleOptions({
          "question": "Which group of animals includes those that fly in the air and rest on trees?",
          "optionA": "Terrestrial animals",
          "optionB": "Aerial animals",
          "optionC": "Aquatic animals",
          "correctAnswer": "Aerial animals"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "In hilly and cold regions, houses are primarily made up of _______.",
          "optionA": "Bamboo",
          "optionB": "Wood",
          "optionC": "Ice blocks",
          "correctAnswer": "Wood"
        }),
      shuffleOptions({
          "question": "Houses built on raised platforms or poles in flood-prone areas are called _______.",
          "optionA": "Cottages",
          "optionB": "Igloos",
          "optionC": "Houses on stilts",
          "correctAnswer": "Houses on stilts"
        }),
      shuffleOptions({
          "question": "In earthquake-prone regions, houses are constructed using _______ to prevent injury.",
          "optionA": "Bamboo",
          "optionB": "Wood",
          "optionC": "Mud",
          "correctAnswer": "Wood"
        }),
      shuffleOptions({
          "question": "Houses in hot regions are primarily made of _______ to prevent overheating.",
          "optionA": "Bamboo",
          "optionB": "Stone",
          "optionC": "Mud",
          "correctAnswer": "Mud"
        }),
      shuffleOptions({
          "question": "The settlement smaller than a village, clustered together close to the road, is called a _______.",
          "optionA": "Hamlet",
          "optionB": "Town",
          "optionC": "City",
          "correctAnswer": "Hamlet"
        }),
      shuffleOptions({
          "question": "A large human settlement with extensive housing, transportation, and communication systems is called a _______.",
          "optionA": "Village",
          "optionB": "City",
          "optionC": "Town",
          "correctAnswer": "City"
        }),
      shuffleOptions({
          "question": "Animals who live on land are called _______ animals.",
          "optionA": "Terrestrial",
          "optionB": "Aquatic",
          "optionC": "Aerial",
          "correctAnswer": "Terrestrial"
        }),
      shuffleOptions({
          "question": "Animals that fly in the air and rest on trees are known as _______ animals.",
          "optionA": "Terrestrial",
          "optionB": "Aquatic",
          "optionC": "Aerial",
          "correctAnswer": "Aerial"
        }),
      shuffleOptions({
          "question": "Animals who live both in water and on land are called _______.",
          "optionA": "Amphibians",
          "optionB": "Reptiles",
          "optionC": "Mammals",
          "correctAnswer": "Amphibians"
        }),
      shuffleOptions({
          "question": "The movement of birds from cold regions to warmer places during winters is called _______.",
          "optionA": "Immigration",
          "optionB": "Hibernation",
          "optionC": "Migration",
          "correctAnswer": "Migration"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Ants live in colonies and build anthills to establish their homes.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Bees do not live together in organized family groups.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "In polar regions, houses are commonly built using bricks and stones.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Houses built on stilts are common in flood-prone areas.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Earthquake-prone regions typically use bamboo and wood to construct houses.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Houses in hot regions often have thin walls and flat roofs.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Nomads live in permanent houses called tents.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Houseboats are stationary houses found in the lakes of Kashmir and Kerala.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The settlement called a town is generally smaller than a village.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Terrestrial animals include those that live in water.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }
      ],
  };
}

export var activityData;
